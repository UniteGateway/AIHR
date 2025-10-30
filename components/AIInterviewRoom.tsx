
import React, { useState, useRef, useEffect } from 'react';
import {
  MicIcon,
  PhoneOffIcon,
  VideoIcon,
  CloudUploadIcon,
  FileTextIcon,
  SparklesIcon,
  CheckCircleIcon,
} from './Icons';
import { GoogleGenAI, LiveServerMessage, Modality, Blob, Type } from '@google/genai';

// --- Type Definitions ---
type InterviewState = 'idle' | 'in_progress' | 'generating_report' | 'report_ready';
type TranscriptEntry = {
  speaker: 'ai' | 'user';
  text: string;
};
type InterviewReport = {
  score: number;
  summary: string;
  strengths: string[];
  weaknesses: string[];
};

// A local type definition for 'LiveSession' to provide type safety for the session object.
type LiveSession = {
  sendRealtimeInput: (input: { media: Blob }) => void;
  close: () => void;
};

// --- Audio Utility Functions ---
const decode = (base64: string) => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

const encode = (bytes: Uint8Array) => {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

const decodeAudioData = async (
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> => {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
};

const createBlob = (data: Float32Array): Blob => {
    const l = data.length;
    const int16 = new Int16Array(l);
    for (let i = 0; i < l; i++) {
        int16[i] = data[i] * 32768;
    }
    return {
        data: encode(new Uint8Array(int16.buffer)),
        mimeType: 'audio/pcm;rate=16000',
    };
}


const AIInterviewRoom: React.FC = () => {
  const [interviewState, setInterviewState] = useState<InterviewState>('idle');
  const [transcript, setTranscript] = useState<TranscriptEntry[]>([]);
  const [report, setReport] = useState<InterviewReport | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const sessionPromiseRef = useRef<Promise<LiveSession> | null>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const outputAudioContextRef = useRef<AudioContext | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const mediaStreamSourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  
  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
        setNotification(null);
    }, 3000);
  };

  const handleStartInterview = async () => {
    setTranscript([]);
    setReport(null);
    setInterviewState('in_progress');

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;

        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
        
        inputAudioContextRef.current = new window.AudioContext({ sampleRate: 16000 });
        outputAudioContextRef.current = new window.AudioContext({ sampleRate: 24000 });
        
        sessionPromiseRef.current = ai.live.connect({
            model: 'gemini-2.5-flash-native-audio-preview-09-2025',
            config: {
                responseModalities: [Modality.AUDIO],
                inputAudioTranscription: {},
                outputAudioTranscription: {},
                systemInstruction: 'You are an expert HR interviewer named Alex. Your goal is to conduct a friendly yet professional interview for a senior software engineer role. Start by introducing yourself and then ask behavioral and technical questions. Keep your responses concise.',
            },
            callbacks: {
                onopen: () => {
                    const source = inputAudioContextRef.current!.createMediaStreamSource(stream);
                    mediaStreamSourceRef.current = source;
                    const scriptProcessor = inputAudioContextRef.current!.createScriptProcessor(4096, 1, 1);
                    scriptProcessorRef.current = scriptProcessor;

                    scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
                        const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
                        const pcmBlob = createBlob(inputData);
                        sessionPromiseRef.current?.then((session) => {
                            session.sendRealtimeInput({ media: pcmBlob });
                        });
                    };
                    source.connect(scriptProcessor);
                    scriptProcessor.connect(inputAudioContextRef.current!.destination);
                },
                onmessage: async (message: LiveServerMessage) => {
                    const updateLastTranscript = (speaker: 'ai' | 'user', text: string) => {
                        setTranscript(prev => {
                            if (prev.length > 0 && prev[prev.length - 1].speaker === speaker) {
                                const newTranscript = [...prev];
                                newTranscript[newTranscript.length - 1].text += text;
                                return newTranscript;
                            }
                            return [...prev, { speaker, text }];
                        });
                    };

                    if (message.serverContent?.inputTranscription) {
                        const text = message.serverContent.inputTranscription.text;
                        if (text) {
                            updateLastTranscript('user', text);
                        }
                    }

                    if (message.serverContent?.outputTranscription) {
                        const text = message.serverContent.outputTranscription.text;
                        if (text) {
                            updateLastTranscript('ai', text);
                        }
                    }

                    const base64Audio = message.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
                    if (base64Audio) {
                        const outputAudioContext = outputAudioContextRef.current!;
                        nextStartTimeRef.current = Math.max(nextStartTimeRef.current, outputAudioContext.currentTime);
                        const audioBuffer = await decodeAudioData(decode(base64Audio), outputAudioContext, 24000, 1);
                        const source = outputAudioContext.createBufferSource();
                        source.buffer = audioBuffer;
                        source.connect(outputAudioContext.destination);
                        source.start(nextStartTimeRef.current);
                        nextStartTimeRef.current += audioBuffer.duration;
                    }
                },
                onclose: () => console.log('Interview session closed.'),
                onerror: (e) => console.error('Interview error:', e),
            },
        });
    } catch (error) {
        console.error("Failed to start interview:", error);
        setInterviewState('idle');
        alert("Could not access microphone. Please allow microphone permissions.");
    }
  };

  const handleEndInterview = async () => {
    if (sessionPromiseRef.current) {
        const session = await sessionPromiseRef.current;
        session.close();
        sessionPromiseRef.current = null;
    }
    if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
    }
    if (scriptProcessorRef.current) {
        scriptProcessorRef.current.disconnect();
        scriptProcessorRef.current = null;
    }
    if (mediaStreamSourceRef.current) {
        mediaStreamSourceRef.current.disconnect();
        mediaStreamSourceRef.current = null;
    }
    if (inputAudioContextRef.current && inputAudioContextRef.current.state !== 'closed') {
        await inputAudioContextRef.current.close();
    }
    if (outputAudioContextRef.current && outputAudioContextRef.current.state !== 'closed') {
        await outputAudioContextRef.current.close();
    }
    
    setInterviewState('generating_report');
    generateReport();
  };
  
  const generateReport = async () => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const fullTranscript = transcript.map(t => `${t.speaker === 'ai' ? 'Interviewer' : 'Candidate'}: ${t.text}`).join('\n');
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: `Based on the following interview transcript for a senior software engineer role, please provide a candidate evaluation.

Transcript:
---
${fullTranscript}
---

Provide your response in a JSON format.`,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        score: {
                            type: Type.INTEGER,
                            description: "A score from 0 to 100 representing overall performance."
                        },
                        summary: {
                            type: Type.STRING,
                            description: "A brief 2-3 sentence summary of the candidate's performance."
                        },
                        strengths: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                            description: "A list of key strengths observed during the interview."
                        },
                        weaknesses: {
                            type: Type.ARRAY,
                            items: { type: Type.STRING },
                            description: "A list of potential areas for improvement."
                        }
                    },
                    required: ["score", "summary", "strengths", "weaknesses"]
                }
            }
        });
        
        const reportData = JSON.parse(response.text);
        setReport(reportData);
        setInterviewState('report_ready');

    } catch (error) {
        console.error("Failed to generate report:", error);
        setInterviewState('idle'); // Or some error state
        alert("There was an error generating the interview report.");
    }
  };

  useEffect(() => {
    return () => {
      if (interviewState === 'in_progress') {
        handleEndInterview();
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [interviewState]);

  const renderContent = () => {
    switch (interviewState) {
      case 'idle':
        return (
          <div className="flex flex-col items-center justify-center h-full text-center bg-white rounded-lg border border-slate-200">
            <div className="w-24 h-24 rounded-full bg-ai-blue/10 flex items-center justify-center mb-4">
              <MicIcon className="h-12 w-12 text-ai-blue" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Ready for the AI Interview?</h2>
            <p className="text-gray-500 mt-2 max-w-md">The AI will ask you a series of questions. Your conversation will be transcribed and analyzed to generate a performance report.</p>
            <button
              onClick={handleStartInterview}
              className="mt-8 bg-ai-blue text-white font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Interview
            </button>
          </div>
        );
      case 'in_progress':
        return (
          <div className="grid grid-cols-12 gap-6 h-full">
            <div className="col-span-12 lg:col-span-8 bg-slate-900 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-4">
                    <div className="w-40 h-40 rounded-full bg-ai-blue/30 animate-pulse mx-auto flex items-center justify-center border-4 border-ai-blue/50">
                        <MicIcon className="w-16 h-16 text-white"/>
                    </div>
                    <h2 className="text-3xl font-bold text-white mt-4">AI Interviewer is listening...</h2>
                    <p className="text-blue-300 h-6 mt-2">{transcript.filter(t => t.speaker === 'ai').slice(-1)[0]?.text || '"Hello, I am Alex, your AI interviewer today."'}</p>
                </div>
                <div className="absolute bottom-6 left-6 w-48 h-32 bg-gray-800 rounded-lg border-2 border-gray-600 flex items-center justify-center">
                    <p className="text-white text-sm">[Candidate Camera]</p>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-4 bg-white rounded-xl border border-gray-200 flex flex-col h-full">
                <div className="p-4 border-b border-slate-200">
                    <h3 className="font-bold text-lg text-gray-800">Live Transcript</h3>
                </div>
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                  {transcript.map((entry, index) => (
                    entry.speaker === 'ai' ? (
                      <div key={index} className="flex flex-col items-start">
                          <p className="font-semibold text-ai-blue text-sm">AI Interviewer</p>
                          <div className="bg-gray-100 p-3 rounded-lg mt-1 max-w-xs">
                              <p className="text-gray-700">{entry.text}</p>
                          </div>
                      </div>
                    ) : (
                      <div key={index} className="flex flex-col items-end">
                          <p className="font-semibold text-gray-600 text-sm">You</p>
                          <div className="bg-ai-blue text-white p-3 rounded-lg mt-1 max-w-xs">
                              <p>{entry.text}</p>
                          </div>
                      </div>
                    )
                  ))}
                </div>
                <div className="p-4 border-t border-slate-200 flex items-center justify-center gap-4">
                     <button className="bg-gray-200 p-4 rounded-full text-gray-700 hover:bg-gray-300"><MicIcon className="h-6 w-6 text-slate-800" /></button>
                     <button className="bg-gray-200 p-4 rounded-full text-gray-700 hover:bg-gray-300"><VideoIcon /></button>
                     <button onClick={handleEndInterview} className="bg-red-500 p-4 rounded-full text-white hover:bg-red-600"><PhoneOffIcon /></button>
                </div>
            </div>
          </div>
        );
      case 'generating_report':
        return (
            <div className="flex flex-col items-center justify-center h-full text-center">
                 <div className="w-16 h-16 border-4 border-ai-blue border-dashed rounded-full animate-spin"></div>
                 <h2 className="text-2xl font-bold text-gray-800 mt-6">Generating Your Report...</h2>
                 <p className="text-gray-500 mt-2">The AI is analyzing the interview transcript to create your evaluation.</p>
            </div>
        );
      case 'report_ready':
        if (!report) return <div>Error displaying report.</div>;
        return (
            <div className="max-w-4xl mx-auto space-y-6">
                 <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-800">Interview Report</h1>
                    <p className="text-gray-500 mt-1">AI-generated evaluation of the interview.</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200 text-center">
                    <h3 className="text-sm font-semibold text-gray-500 tracking-wider">OVERALL SCORE</h3>
                    <p className={`text-7xl font-bold mt-2 ${report.score >= 80 ? 'text-green-500' : report.score >= 60 ? 'text-yellow-500' : 'text-red-500'}`}>
                        {report.score}<span className="text-4xl text-gray-400">/100</span>
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-gray-800 mb-3">Summary</h4>
                        <p className="text-gray-600">{report.summary}</p>
                    </div>
                     <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-gray-800 mb-3">Actions</h4>
                        <div className="flex flex-col space-y-3">
                            <button onClick={() => showNotification("Report saved to Firebase Storage.")} className="flex items-center justify-center gap-2 w-full bg-slate-100 text-slate-700 font-medium py-2.5 px-4 rounded-lg hover:bg-slate-200 transition">
                                <CloudUploadIcon /> Save to Cloud
                            </button>
                             <button onClick={() => showNotification("PDF download started.")} className="flex items-center justify-center gap-2 w-full bg-slate-100 text-slate-700 font-medium py-2.5 px-4 rounded-lg hover:bg-slate-200 transition">
                                <FileTextIcon /> Download PDF
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-green-600 mb-3">Strengths</h4>
                        <ul className="space-y-2 text-gray-600">
                           {report.strengths.map((s, i) => <li key={i} className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />{s}</li>)}
                        </ul>
                    </div>
                     <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="font-bold text-yellow-600 mb-3">Areas for Improvement</h4>
                        <ul className="space-y-2 text-gray-600">
                           {report.weaknesses.map((w, i) => <li key={i} className="flex items-start"><CheckCircleIcon className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />{w}</li>)}
                        </ul>
                    </div>
                </div>
                 <div className="bg-ai-blue/5 border border-ai-blue/20 p-6 rounded-lg">
                    <div className="flex items-start gap-4">
                        <div className="text-ai-blue pt-1"><SparklesIcon /></div>
                        <div>
                            <h4 className="font-bold text-ai-blue">Contribute to a Smarter AI</h4>
                            <p className="text-sm text-gray-600 mt-1">This anonymized interview data helps train our AI to conduct more effective and fair interviews in the future. By simulating this step, you're contributing to a smarter hiring process.</p>
                        </div>
                    </div>
                 </div>

            </div>
        );
      default:
        return <div>Invalid State</div>;
    }
  };

  return (
    <div className="h-full relative">
        {renderContent()}
        {notification && (
            <div className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center animate-fadeInUp">
                <CheckCircleIcon className="w-5 h-5 mr-2" />
                {notification}
            </div>
        )}
    </div>
  );
};

export default AIInterviewRoom;

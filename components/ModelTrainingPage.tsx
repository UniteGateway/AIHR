import React from 'react';
import { BrainCircuitIcon, CheckCircleIcon, SparklesIcon } from './Icons';

const ModelTrainingPage: React.FC = () => {

    const placeholderCompanyValues = `- **Integrity:** We are honest and transparent in all our interactions.
- **Innovation:** We constantly seek to improve and push boundaries.
- **Customer-Centric:** We succeed when our customers succeed.
- **Collaboration:** We work together as a team to achieve our goals.`;

    const placeholderTechContext = `For a Senior Frontend role, we prioritize:
- **React Proficiency:** Deep understanding of hooks, context, and performance optimization.
- **TypeScript:** Strong typing and modern syntax are essential.
- **Testing:** Experience with Jest and React Testing Library is a must.
- **System Design:** Ability to discuss frontend architecture, state management, and API design.`;

    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">AI Model Training</h1>
                <p className="text-gray-500 mt-1">Customize the AI interviewer to align with your company culture and specific job requirements.</p>
            </div>

            <div className="bg-ai-blue/5 border border-ai-blue/20 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                    <div className="text-ai-blue pt-1"><SparklesIcon /></div>
                    <div>
                        <h4 className="font-bold text-ai-blue">How It Works</h4>
                        <p className="text-sm text-gray-600 mt-1">The information you provide here is passed as a <code className="text-xs bg-slate-200 px-1 py-0.5 rounded">systemInstruction</code> to the Gemini API. This guides the AI to ask more relevant questions and evaluate candidates based on criteria that matter most to you, without complex fine-tuning.</p>
                    </div>
                </div>
            </div>

            {/* Company Values & Culture */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2">
                    <BrainCircuitIcon /> Company Values & Culture
                </h3>
                <p className="text-gray-500 mb-4">Help the AI understand your company's culture. It will use this to ask behavioral questions and assess cultural fit.</p>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="company-values" className="text-sm font-medium text-gray-700">
                            Describe your core company values (Markdown supported)
                        </label>
                        <textarea 
                            id="company-values" 
                            rows={8}
                            className="w-full mt-1 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none font-mono text-sm" 
                            defaultValue={placeholderCompanyValues}
                        />
                    </div>
                </div>
            </div>
            
            {/* Role-Specific Technical Context */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Role-Specific Context</h3>
                <p className="text-gray-500 mb-4">Provide context for specific roles. You can create multiple contexts and apply them to different job postings.</p>
                <div className="space-y-4">
                     <div>
                        <label htmlFor="role-context-name" className="text-sm font-medium text-gray-700">
                           Context Name
                        </label>
                        <input type="text" id="role-context-name" className="w-full max-w-sm mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" defaultValue="Senior Frontend Developer" />
                    </div>
                    <div>
                        <label htmlFor="tech-context" className="text-sm font-medium text-gray-700">
                            Technical skills, frameworks, and concepts to prioritize
                        </label>
                        <textarea 
                            id="tech-context" 
                            rows={8}
                            className="w-full mt-1 border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none font-mono text-sm" 
                            defaultValue={placeholderTechContext}
                        />
                    </div>
                </div>
            </div>
            
             <div className="flex justify-end">
                <button className="bg-ai-blue text-white font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
                    <CheckCircleIcon className="w-5 h-5"/>
                    Save Configuration
                </button>
            </div>
        </div>
    );
};

export default ModelTrainingPage;
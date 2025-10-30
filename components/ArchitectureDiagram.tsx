
import React from 'react';
import { SectionCard } from './SectionCard';
import { ItemCard } from './ItemCard';
import { TechCard } from './TechCard';
import {
  UserIcon,
  AdminIcon,
  ManagerIcon,
  FrontendIcon,
  BackendIcon,
  AIIcon,
  DatabaseIcon,
  CloudIcon,
  JobIcon,
  InterviewIcon,
  TranscriptIcon,
  RankIcon,
  AnalyticsIcon,
  ReactIcon,
  NodeIcon,
  FirebaseIcon,
  GeminiIcon,
  WebRTCIcon,
} from './Icons';

// --- Data Definitions ---

const systemArchitectureData = [
  { icon: <FrontendIcon />, title: "Frontend", description: "User-facing interface built for a seamless and responsive experience on all devices." },
  { icon: <BackendIcon />, title: "Backend", description: "Robust server-side logic to handle business operations, data processing, and API services." },
  { icon: <AIIcon />, title: "AI/ML Services", description: "Core AI engine for conducting interviews, analyzing responses, and generating insights." },
  { icon: <DatabaseIcon />, title: "Database", description: "Scalable and secure storage for all application data, including users, jobs, and interviews." },
  { icon: <CloudIcon />, title: "Cloud Infrastructure", description: "Hosted on a reliable cloud platform for high availability, scalability, and security." },
];

const userTypesData = [
  { icon: <AdminIcon />, title: "Company Admin", description: "Manages company profile, billing, and global settings. Can add/remove HR Managers." },
  { icon: <ManagerIcon />, title: "HR Manager", description: "Creates job postings, invites candidates, reviews interview reports, and manages the hiring pipeline." },
  { icon: <UserIcon />, title: "Candidate", description: "Applies for jobs, participates in AI-driven interviews, and tracks application status." },
];

const keyModulesData = [
    { icon: <JobIcon />, title: "Job Posting", description: "Create, manage, and publish job openings to attract candidates." },
    { icon: <InterviewIcon />, title: "Virtual AI Interview", description: "Candidates interact with an AI interviewer via video/audio in real-time." },
    { icon: <TranscriptIcon />, title: "Transcript Storage", description: "Securely store and access interview transcripts and video recordings." },
    { icon: <RankIcon />, title: "Candidate Ranking", description: "AI-powered scoring and ranking based on predefined criteria and performance." },
    { icon: <AnalyticsIcon />, title: "HR Analytics Dashboard", description: "Visualize key hiring metrics, candidate performance, and process efficiency." },
];

const techStackData = {
  frontend: { icon: <ReactIcon />, name: "React / Next.js", category: "Frontend" },
  css: { icon: <div className="w-6 h-6 bg-cyan-500 rounded-md flex items-center justify-center text-white font-bold text-xs">T</div>, name: "Tailwind CSS", category: "Styling" },
  backend: { icon: <NodeIcon />, name: "Node.js / FastAPI", category: "Backend" },
  database: { icon: <FirebaseIcon />, name: "Firebase / Supabase", category: "Database" },
  ai: { icon: <GeminiIcon />, name: "Gemini API", category: "AI/ML Model" },
  realtime: { icon: <WebRTCIcon />, name: "WebRTC / Twilio", category: "Real-time Communication" },
};


export const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* System Architecture */}
      <SectionCard title="System Architecture">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {systemArchitectureData.map((item, index) => (
            <ItemCard key={index} icon={item.icon} title={item.title} description={item.description} />
          ))}
        </div>
      </SectionCard>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* User Types */}
        <SectionCard title="User Types">
          <div className="space-y-4">
            {userTypesData.map((user, index) => (
               <ItemCard key={index} icon={user.icon} title={user.title} description={user.description} horizontal />
            ))}
          </div>
        </SectionCard>

        {/* Key Modules */}
        <SectionCard title="Key Modules">
            <div className="space-y-4">
                {keyModulesData.map((item, index) => (
                     <ItemCard key={index} icon={item.icon} title={item.title} description={item.description} horizontal />
                ))}
            </div>
        </SectionCard>
      </div>

      {/* Tech Stack */}
      <SectionCard title="Technology Stack">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.values(techStackData).map((tech, index) => (
                <TechCard key={index} icon={tech.icon} name={tech.name} category={tech.category} />
            ))}
        </div>
      </SectionCard>
    </div>
  );
};
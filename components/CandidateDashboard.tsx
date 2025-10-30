import React, { useRef } from 'react';
import { CheckCircleIcon, UploadIcon, ClockIcon } from './Icons';

const applicationData = [
    { company: "Nuro AI Labs", role: "Senior Frontend Developer", date: "Oct 28, 2024", status: "AI Interview Pending", statusColor: "blue" },
    { company: "Innovate Inc.", role: "UX Designer", date: "Oct 15, 2024", status: "Under Review", statusColor: "yellow" },
    { company: "DataDriven Co.", role: "Data Analyst", date: "Oct 12, 2024", status: "Offer Extended", statusColor: "green" },
    { company: "CloudNet Solutions", role: "DevOps Engineer", date: "Sep 30, 2024", status: "Not Selected", statusColor: "red" },
];

interface CandidateDashboardProps {
    onStartInterview: () => void;
    showNotification: (message: string) => void;
}

const CandidateDashboard: React.FC<CandidateDashboardProps> = ({ onStartInterview, showNotification }) => {
    const resumeInputRef = useRef<HTMLInputElement>(null);

    const handleUpdateResumeClick = () => {
        resumeInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            showNotification(`Successfully uploaded ${file.name}.`);
        }
    };
    
    return (
        <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-ai-blue to-blue-800 text-white">
                <h1 className="text-3xl font-bold">Welcome, Alex!</h1>
                <p className="text-blue-200 mt-1">Track your job applications and prepare for interviews.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700">
                     <h3 className="font-bold text-gray-800 dark:text-white mb-3">Profile Completion</h3>
                     <div className="flex items-center gap-4">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
                        </div>
                        <span className="font-semibold text-gray-700 dark:text-gray-200">75%</span>
                     </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">A complete profile increases your chances of getting noticed.</p>
                </div>
                 <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white mb-3">Your Resume</h3>
                     <input type="file" ref={resumeInputRef} onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx" />
                     <div className="flex items-center justify-between">
                         <p className="text-sm text-green-600 dark:text-green-400 flex items-center gap-2"><CheckCircleIcon /> resume_alex_doe.pdf</p>
                        <button onClick={handleUpdateResumeClick} className="flex items-center gap-1.5 text-ai-blue text-sm font-semibold hover:underline">
                            <UploadIcon className="w-4 h-4"/> Update
                        </button>
                    </div>
                 </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700">
                 <div className="p-4 border-b border-slate-200 dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white">My Applications</h3>
                 </div>
                 <div className="overflow-x-auto">
                     <table className="w-full text-left">
                        <thead className='bg-slate-50 dark:bg-gray-700/50'>
                            <tr className="border-b border-slate-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
                                <th className="py-3 px-4 font-semibold">Company</th>
                                <th className="px-4 font-semibold">Role</th>
                                <th className="px-4 font-semibold">Date Applied</th>
                                <th className="px-4 font-semibold">Status</th>
                                <th className="px-4 font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                           {applicationData.map(app => (
                                <tr key={app.company} className="border-b border-slate-200 dark:border-gray-700 hover:bg-slate-50/50 dark:hover:bg-gray-700/50">
                                    <td className="py-4 px-4 font-medium text-gray-800 dark:text-gray-100">{app.company}</td>
                                    <td className="px-4 text-gray-600 dark:text-gray-300">{app.role}</td>
                                    <td className="px-4 text-gray-600 dark:text-gray-300">{app.date}</td>
                                    <td className="px-4">
                                        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
                                            app.statusColor === 'blue' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300' :
                                            app.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300' :
                                            app.statusColor === 'green' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' :
                                            'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                                        }`}>
                                            <ClockIcon className="w-3 h-3" />
                                            {app.status}
                                        </span>
                                    </td>
                                    <td className="px-4">
                                        <button 
                                            onClick={app.status === "AI Interview Pending" ? onStartInterview : undefined} 
                                            className={`font-semibold text-sm transition-colors ${
                                                app.status === "AI Interview Pending" 
                                                ? "text-ai-blue hover:underline cursor-pointer" 
                                                : "text-gray-400 dark:text-gray-500 cursor-not-allowed"
                                            }`}
                                            disabled={app.status !== "AI Interview Pending"}
                                        >
                                            {app.status === "AI Interview Pending" ? "Start Interview" : "View Details"}
                                        </button>
                                    </td>
                                </tr>
                           ))}
                        </tbody>
                     </table>
                 </div>
            </div>
        </div>
    );
}

export default CandidateDashboard;
import React from 'react';
import { BarChart, DoughnutChart } from './Charts';
import { AnalyticsIcon, InterviewIcon, JobIcon } from './Icons';

const candidatesToReview = [
    { name: "Alex Doe", role: "Senior Frontend Developer", score: 92, avatar: "https://i.pravatar.cc/150?u=alex-doe" },
    { name: "Maria Garcia", role: "Senior Frontend Developer", score: 88, avatar: "https://i.pravatar.cc/150?u=maria-garcia" },
    { name: "Jane Smith", role: "Product Manager", score: 95, avatar: "https://i.pravatar.cc/150?u=jane-smith" },
];

const EmployerDashboard: React.FC = () => {
    return (
        <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-ai-blue to-blue-800 text-white">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-blue-200 mt-1">Welcome back! Here's a summary of your hiring activities.</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard icon={<JobIcon />} title="Open Positions" value="12" />
                <StatCard icon={<InterviewIcon />} title="Interviews Today" value="5" />
                <StatCard icon={<AnalyticsIcon />} title="Avg. Time to Hire" value="28 Days" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Candidates Awaiting Review */}
                <div className="lg:col-span-1 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700">
                    <h3 className="font-bold text-gray-800 dark:text-white mb-4">Candidates Awaiting Review</h3>
                    <div className="space-y-4">
                        {candidatesToReview.map(candidate => (
                            <div key={candidate.name} className="flex items-center">
                                <img src={candidate.avatar} alt={candidate.name} className="w-10 h-10 rounded-full" />
                                <div className="ml-3 flex-1">
                                    <p className="font-semibold text-sm text-gray-800 dark:text-gray-100">{candidate.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{candidate.role}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-sm text-green-600 dark:text-green-400">{candidate.score}</p>
                                    <a href="#" className="text-xs text-ai-blue hover:underline">Report</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Charts */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="md:col-span-2 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white mb-4">Candidates by Stage</h3>
                        <div style={{ height: '300px' }}>
                            <BarChart 
                                labels={['Applied', 'Screening', 'Interview', 'Offer', 'Hired']}
                                data={[120, 80, 45, 15, 8]}
                            />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white mb-4">Source of Hire</h3>
                        <div style={{ height: '300px' }}>
                            <DoughnutChart 
                                labels={['LinkedIn', 'Indeed', 'Referrals', 'Website']}
                                data={[45, 30, 15, 10]}
                            />
                        </div>
                    </div>
                     <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700">
                        <h3 className="font-bold text-gray-800 dark:text-white mb-4">Upcoming Interviews</h3>
                        <div className="space-y-3 mt-4 text-sm">
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-gray-700 dark:text-gray-200">Carlos Rossi</p>
                                    <p className="text-gray-500 dark:text-gray-400">Product Manager</p>
                                </div>
                                <p className="font-semibold text-ai-blue">10:00 AM</p>
                            </div>
                             <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-medium text-gray-700 dark:text-gray-200">Sam Wilson</p>
                                    <p className="text-gray-500 dark:text-gray-400">Frontend Developer</p>
                                </div>
                                <p className="font-semibold text-ai-blue">02:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const StatCard: React.FC<{icon: React.ReactElement<{ className?: string }>, title: string, value: string}> = ({icon, title, value}) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-gray-700 flex items-center hover:-translate-y-1 transition-transform">
        <div className="p-3 bg-ai-blue/10 rounded-lg text-ai-blue">
            {React.cloneElement(icon, { className: "w-6 h-6" })}
        </div>
        <div className="ml-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{title}</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">{value}</p>
        </div>
    </div>
)

export default EmployerDashboard;
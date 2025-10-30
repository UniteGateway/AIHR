import React, { useState } from 'react';
import { MailIcon, XIcon, CheckCircleIcon } from './Icons';

// --- Mock Data ---
const initialJobData = [
    { id: 1, title: "Senior Frontend Developer", department: "Engineering", location: "Remote", status: "Open", applicants: 124, description: "We are looking for an experienced Frontend Developer..." },
    { id: 2, title: "Product Manager", department: "Product", location: "New York, NY", status: "Open", applicants: 88, description: "We are seeking a talented Product Manager..." },
    { id: 3, title: "UX/UI Designer", department: "Design", location: "Remote", status: "Closed", applicants: 210, description: "Join our design team..." },
    { id: 4, title: "Backend Engineer (Python)", department: "Engineering", location: "San Francisco, CA", status: "Open", applicants: 95, description: "Help build the backbone of our application..." },
    { id: 5, title: "DevOps Specialist", department: "Engineering", location: "Remote", status: "Paused", applicants: 45, description: "Manage our cloud infrastructure..." },
];

const candidateData = {
    1: [
        { id: 101, name: "Alex Doe", score: 92, status: "Interviewed" },
        { id: 102, name: "Maria Garcia", score: 88, status: "Interviewed" },
        { id: 103, name: "Sam Wilson", score: 0, status: "Applied" },
    ],
    2: [
        { id: 201, name: "Jane Smith", score: 95, status: "Offer" },
        { id: 202, name: "Carlos Rossi", score: 85, status: "Interviewed" },
    ]
};

type Job = typeof initialJobData[0];
type Candidate = { id: number; name: string; score: number; status: string; };

const JobPostings: React.FC = () => {
    const [jobData, setJobData] = useState(initialJobData);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);
    const [emailCandidate, setEmailCandidate] = useState<Candidate | null>(null);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [notification, setNotification] = useState<string | null>(null);

    const showNotification = (message: string) => {
        setNotification(message);
        setTimeout(() => setNotification(null), 3000);
    };

    const handleSendEmail = () => {
        showNotification(`Email successfully sent to ${emailCandidate?.name}.`);
        setEmailCandidate(null);
    };

    const handleCreateJob = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const newJob = {
            id: jobData.length + 1,
            title: formData.get('title') as string,
            department: formData.get('department') as string,
            location: formData.get('location') as string,
            description: formData.get('description') as string,
            status: "Open",
            applicants: 0,
        };
        setJobData([newJob, ...jobData]);
        setShowCreateModal(false);
        showNotification(`Job "${newJob.title}" created successfully!`);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Job Postings</h1>
                    <p className="text-gray-500 mt-1">Manage your company's open positions and candidate pipeline.</p>
                </div>
                <button 
                    onClick={() => setShowCreateModal(true)}
                    className="bg-ai-blue text-white font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                >
                    + Create New Job
                </button>
            </div>

            <div className="bg-white rounded-lg border border-slate-200">
                 <div className="overflow-x-auto">
                     <table className="w-full text-left">
                        <thead className='bg-slate-50'>
                            <tr className="border-b border-slate-200 text-sm text-gray-500">
                                <th className="py-3 px-4 font-semibold">Job Title</th>
                                <th className="px-4 font-semibold">Department</th>
                                <th className="px-4 font-semibold">Location</th>
                                <th className="px-4 font-semibold">Applicants</th>
                                <th className="px-4 font-semibold">Status</th>
                                <th className="px-4 font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobData.map(job => (
                                <tr key={job.id} className="border-b border-slate-200 hover:bg-slate-50/50">
                                    <td className="py-4 px-4 font-medium text-gray-800">{job.title}</td>
                                    <td className="px-4 text-gray-600">{job.department}</td>
                                    <td className="px-4 text-gray-600">{job.location}</td>
                                    <td className="px-4 text-gray-600">{job.applicants}</td>
                                    <td className="px-4">
                                        <span className={`text-xs font-medium mr-2 px-2.5 py-1 rounded-full ${
                                            job.status === 'Open' ? 'bg-green-100 text-green-800' :
                                            job.status === 'Closed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                                        }`}>{job.status}</span>
                                    </td>
                                    <td className="px-4">
                                        <button onClick={() => setSelectedJob(job)} className="text-ai-blue font-semibold text-sm hover:underline">Manage</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                     </table>
                 </div>
            </div>
            
            {/* Create Job Modal */}
            {showCreateModal && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fadeInUp" style={{animationDuration: '0.3s'}}>
                    <form onSubmit={handleCreateJob} className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] flex flex-col">
                        <div className="flex justify-between items-center p-5 border-b border-slate-200">
                             <h3 className="text-lg font-bold text-gray-800">Create New Job Posting</h3>
                             <button type="button" onClick={() => setShowCreateModal(false)} className="p-1 rounded-full hover:bg-slate-100"><XIcon/></button>
                        </div>
                        <div className="p-5 space-y-4 overflow-y-auto">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="title" className="text-sm font-medium text-gray-700">Job Title</label>
                                    <input type="text" id="title" name="title" required className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                                </div>
                                <div>
                                    <label htmlFor="department" className="text-sm font-medium text-gray-700">Department</label>
                                    <input type="text" id="department" name="department" required className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                                </div>
                            </div>
                             <div>
                                <label htmlFor="location" className="text-sm font-medium text-gray-700">Location</label>
                                <input type="text" id="location" name="location" required className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                            </div>
                             <div>
                                <label htmlFor="description" className="text-sm font-medium text-gray-700">Job Description</label>
                                <textarea id="description" name="description" required rows={8} className="w-full mt-1 border border-gray-300 rounded-md p-2 h-40 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none"></textarea>
                            </div>
                        </div>
                        <div className="px-5 py-4 border-t border-slate-200 flex justify-end gap-3">
                            <button type="button" onClick={() => setShowCreateModal(false)} className="bg-slate-100 text-slate-800 font-semibold px-4 py-2 rounded-lg hover:bg-slate-200">Cancel</button>
                            <button type="submit" className="bg-ai-blue text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90">Create Job</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Candidate Management Modal */}
            {selectedJob && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-40 animate-fadeInUp" style={{animationDuration: '0.3s'}}>
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-3xl">
                        <div className="flex justify-between items-center p-5 border-b border-slate-200">
                            <div>
                                <h3 className="text-lg font-bold text-gray-800">Applicants</h3>
                                <p className="text-sm text-gray-500">{selectedJob.title}</p>
                            </div>
                            <button onClick={() => setSelectedJob(null)} className="p-1 rounded-full hover:bg-slate-100"><XIcon/></button>
                        </div>
                        <div className="p-2">
                             <table className="w-full text-left">
                                <thead className="bg-slate-50">
                                    <tr className="border-b border-slate-200 text-sm text-gray-500">
                                        <th className="py-2 px-4 font-semibold">Candidate</th>
                                        <th className="px-4 font-semibold">AI Score</th>
                                        <th className="px-4 font-semibold">Status</th>
                                        <th className="px-4 font-semibold">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(candidateData[selectedJob.id as keyof typeof candidateData] || []).map(candidate => (
                                        <tr key={candidate.id} className="border-b border-slate-200">
                                            <td className="py-3 px-4 font-medium text-gray-800">{candidate.name}</td>
                                            <td className="px-4 text-gray-600">{candidate.score > 0 ? `${candidate.score}/100` : 'N/A'}</td>
                                            <td className="px-4 text-gray-600">{candidate.status}</td>
                                            <td className="px-4 space-x-4">
                                                <button className="text-ai-blue text-sm font-semibold hover:underline">View Report</button>
                                                <button onClick={() => setEmailCandidate(candidate)} className="text-gray-500 text-sm font-semibold hover:underline">Send Email</button>
                                            </td>
                                        </tr>
                                    ))}
                                    {(!candidateData[selectedJob.id as keyof typeof candidateData] || candidateData[selectedJob.id as keyof typeof candidateData].length === 0) && (
                                        <tr><td colSpan={4} className="text-center py-12 text-gray-500">No candidates found for this position.</td></tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
            {/* Email Composer Modal */}
            {emailCandidate && (
                 <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fadeInUp" style={{animationDuration: '0.3s'}}>
                    <div className="bg-white rounded-xl shadow-lg w-full max-w-xl">
                        <div className="flex justify-between items-center p-5 border-b border-slate-200">
                             <h3 className="text-lg font-bold flex items-center gap-2 text-gray-800"><MailIcon/><span>Email to {emailCandidate.name}</span></h3>
                             <button onClick={() => setEmailCandidate(null)} className="p-1 rounded-full hover:bg-slate-100"><XIcon/></button>
                        </div>
                        <div className="p-5 space-y-4">
                            <div>
                                <label className="text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" defaultValue={`Update on your application for the ${selectedJob?.title} position`} />
                            </div>
                             <div>
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea className="w-full mt-1 border border-gray-300 rounded-md p-2 h-40 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" defaultValue={`Dear ${emailCandidate.name},\n\nWe'd like to thank you for your interest...`}></textarea>
                            </div>
                        </div>
                        <div className="px-5 py-4 border-t border-slate-200 flex justify-end gap-3">
                            <button onClick={() => setEmailCandidate(null)} className="bg-slate-100 text-slate-800 font-semibold px-4 py-2 rounded-lg hover:bg-slate-200">Cancel</button>
                            <button onClick={handleSendEmail} className="bg-ai-blue text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90">Send Email</button>
                        </div>
                    </div>
                </div>
            )}
            {/* Notification Toast */}
            {notification && (
                <div className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-lg shadow-lg flex items-center animate-fadeInUp">
                    <CheckCircleIcon className="w-5 h-5 mr-2" />
                    {notification}
                </div>
            )}

        </div>
    );
}

export default JobPostings;
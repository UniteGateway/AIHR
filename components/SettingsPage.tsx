import React from 'react';
import { DatabaseIcon, FirebaseIcon, MailIcon, ShieldCheckIcon, EditIcon, CheckCircleIcon, VercelIcon, FirebaseCloudFunctionsIcon, NuroAILogoIcon, UploadIcon } from './Icons';

const userData = [
    { id: 1, name: "HR Manager", email: "hr.manager@example.com", role: "HR Manager", status: "Active" },
    { id: 2, name: "Admin User", email: "admin@nuroailabs.com", role: "Company Admin", status: "Active" },
    { id: 3, name: "John Doe", email: "john.d@example.com", role: "HR Manager", status: "Inactive" },
];

const SettingsPage: React.FC = () => {
    return (
        <div className="space-y-8 max-w-5xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
                <p className="text-gray-500 mt-1">Manage your workspace configuration, integrations, and security settings.</p>
            </div>
            
            {/* Company Profile */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Company Profile</h3>
                <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0">
                        <div className="w-24 h-24 bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed">
                             <NuroAILogoIcon className="w-12 h-12 text-slate-400" />
                        </div>
                        <button className="text-sm mt-2 text-ai-blue font-semibold hover:underline flex items-center gap-1 mx-auto">
                           <UploadIcon className="w-4 h-4" /> Upload Logo
                        </button>
                    </div>
                    <div className="flex-grow space-y-4">
                        <div>
                            <label htmlFor="companyName" className="text-sm font-medium text-gray-700">Company Name</label>
                            <input type="text" id="companyName" defaultValue="Nuro AI Labs" className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                        </div>
                        <div>
                            <label htmlFor="tagline" className="text-sm font-medium text-gray-700">Tagline</label>
                            <input type="text" id="tagline" defaultValue="Reimagining Recruitment with AI" className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                        </div>
                    </div>
                </div>
                 <div className="mt-6 flex justify-end">
                    <button className="bg-ai-blue text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                        Save Profile
                    </button>
                </div>
            </div>

            {/* Deployment & Hosting */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Deployment & Hosting</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <VercelIcon className="h-8 w-8 text-black flex-shrink-0 mt-1"/>
                        <div>
                            <h4 className="font-semibold text-gray-800">Frontend Hosting</h4>
                            <p className="text-sm text-gray-500">Hosted on Vercel for optimal performance, scalability, and CI/CD.</p>
                            <div className="mt-2 flex items-center gap-2 text-sm font-medium text-green-600">
                                <CheckCircleIcon /> Deployed on Vercel
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <FirebaseCloudFunctionsIcon className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1"/>
                        <div>
                            <h4 className="font-semibold text-gray-800">Backend Infrastructure</h4>
                            <p className="text-sm text-gray-500">Serverless functions for scalable, event-driven backend logic.</p>
                            <div className="mt-2 flex items-center gap-2 text-sm font-medium text-green-600">
                                <CheckCircleIcon /> Firebase Cloud Functions
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cloud & Database Section */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Cloud & Database</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <DatabaseIcon className="h-8 w-8 text-ai-blue flex-shrink-0 mt-1"/>
                        <div>
                            <h4 className="font-semibold text-gray-800">Database Status</h4>
                            <p className="text-sm text-gray-500">Real-time database for user auth, job listings, and candidate data.</p>
                            <div className="mt-2 flex items-center gap-2 text-sm font-medium text-green-600">
                                <CheckCircleIcon /> Connected to Firebase
                            </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <FirebaseIcon className="h-8 w-8 text-yellow-500 flex-shrink-0 mt-1"/>
                        <div>
                            <h4 className="font-semibold text-gray-800">Cloud Storage</h4>
                            <p className="text-sm text-gray-500">Secure storage for AI-generated PDF reports and interview transcripts.</p>
                            <div className="mt-2 flex items-center gap-2 text-sm font-medium text-green-600">
                                <CheckCircleIcon /> Firebase Storage Enabled
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Integrations Section */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2"><MailIcon className="h-6 w-6" /> Email Notifications</h3>
                <p className="text-gray-500 mb-4">Integrate with an email provider to send automated notifications.</p>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700">Email Provider API Key</label>
                        <input type="password" className="w-full max-w-md mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" defaultValue="••••••••••••••••••••••••••••" />
                    </div>
                     <button className="bg-ai-blue text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                        Save Configuration
                    </button>
                </div>
            </div>

            {/* Security & Access Section */}
            <div className="bg-white rounded-lg border border-slate-200">
                <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 flex items-center gap-2"><ShieldCheckIcon /> Role-Based Access Control</h3>
                    <p className="text-gray-500 mb-4">Ensure secure API endpoints and application access by managing user roles.</p>
                </div>
                <div className="overflow-x-auto">
                     <table className="w-full text-left">
                        <thead className='bg-slate-50'>
                            <tr className="border-b border-t border-slate-200 text-sm text-gray-500">
                                <th className="py-3 px-6 font-semibold">User</th>
                                <th className="px-6 font-semibold">Role</th>
                                <th className="px-6 font-semibold">Status</th>
                                <th className="px-6 font-semibold"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map(user => (
                                <tr key={user.id} className="border-b border-slate-200">
                                    <td className="py-3 px-6">
                                        <p className="font-medium text-gray-800">{user.name}</p>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                    </td>
                                    <td className="px-6 text-gray-600">{user.role}</td>
                                    <td className="px-6">
                                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                                            user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                        }`}>{user.status}</span>
                                    </td>
                                    <td className="px-6 text-right">
                                        <button className="text-gray-500 p-1.5 rounded-md hover:bg-slate-100 hover:text-ai-blue">
                                            <EditIcon />
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
};

export default SettingsPage;
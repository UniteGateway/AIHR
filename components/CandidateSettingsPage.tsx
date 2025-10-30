import React from 'react';
import { UserIcon, ShieldCheckIcon } from './Icons';

const CandidateSettingsPage: React.FC = () => {
    return (
        <div className="space-y-8 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
                <p className="text-gray-500 mt-1">Manage your account and notification preferences.</p>
            </div>
            
            {/* Profile Information */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"><UserIcon className="w-6 h-6" /> Profile Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="fullName" defaultValue="Alex Doe" className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                    </div>
                     <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" defaultValue="candidate@example.com" className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                    </div>
                </div>
                 <div className="mt-6 flex justify-end">
                    <button className="bg-ai-blue text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                        Save Changes
                    </button>
                </div>
            </div>

            {/* Change Password */}
            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2"><ShieldCheckIcon /> Change Password</h3>
                <div className="space-y-4 max-w-md">
                    <div>
                        <label htmlFor="currentPassword" className="text-sm font-medium text-gray-700">Current Password</label>
                        <input type="password" id="currentPassword" className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                    </div>
                    <div>
                        <label htmlFor="newPassword" className="text-sm font-medium text-gray-700">New Password</label>
                        <input type="password" id="newPassword" className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                    </div>
                </div>
                 <div className="mt-6 flex justify-end">
                    <button className="bg-ai-blue text-white font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                        Update Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CandidateSettingsPage;

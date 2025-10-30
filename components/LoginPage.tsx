import React, { useState } from 'react';
import { GoogleIcon, LinkedInIcon, NuroAILogoIcon, AppleIcon, ArrowLeftIcon } from './Icons';
import { Role } from '../App';

interface LoginPageProps {
  onLogin: (role: Role) => void;
  onBack: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin, onBack }) => {
  const [activeTab, setActiveTab] = useState<Role>('hr');

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4 font-sans" style={{ background: 'linear-gradient(135deg, #e0f7fa 0%, #002B5B 100%)' }}>
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-8 relative">
        <button onClick={onBack} className="absolute top-4 left-4 text-gray-400 dark:text-gray-500 hover:text-ai-blue dark:hover:text-white transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>

        <div className="text-center pt-2">
          <div className="inline-block text-ai-blue">
            <NuroAILogoIcon className="w-14 h-14" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">Sign In or Create Account</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">Select your role and sign in with a provider.</p>
        </div>
        
        {/* TABS */}
        <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button 
                onClick={() => setActiveTab('hr')}
                className={`flex-1 font-semibold py-3 text-center transition-colors ${activeTab === 'hr' ? 'text-ai-blue border-b-2 border-ai-blue' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
            >
                Employer
            </button>
            <button 
                onClick={() => setActiveTab('candidate')}
                className={`flex-1 font-semibold py-3 text-center transition-colors ${activeTab === 'candidate' ? 'text-ai-blue border-b-2 border-ai-blue' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}
            >
                Candidate
            </button>
        </div>

        {/* OAUTH BUTTONS */}
        <div className="space-y-4">
          <button 
            onClick={() => onLogin(activeTab)}
            className="flex items-center justify-center gap-3 w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <GoogleIcon /> Sign in with Google
          </button>
          <button 
            onClick={() => onLogin(activeTab)}
            className="flex items-center justify-center gap-3 w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-medium py-3 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <LinkedInIcon /> Sign in with LinkedIn
          </button>
          <button 
            onClick={() => onLogin(activeTab)}
            className="flex items-center justify-center gap-3 w-full bg-black text-white font-medium py-3 px-4 rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
          >
            <AppleIcon className="w-6 h-6" /> Sign in with Apple
          </button>
        </div>

         <p className="text-center text-xs text-gray-500 dark:text-gray-400">
          By continuing, you agree to our <a href="#" className="underline hover:text-ai-blue">Terms of Service</a> and <a href="#" className="underline hover:text-ai-blue">Privacy Policy</a>.
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
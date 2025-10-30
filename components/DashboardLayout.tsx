
import React, { useState, useEffect } from 'react';
import {
  BellIcon,
  BrainCircuitIcon,
  NuroAILogoIcon,
  LogoutIcon,
  SettingsIcon,
  HomeIcon,
  NewspaperIcon,
  MessageSquareIcon,
  SunIcon,
  MoonIcon,
  MenuIcon,
  XIcon,
} from './Icons';
import EmployerDashboard from './EmployerDashboard';
import AIInterviewRoom from './AIInterviewRoom';
import JobPostings from './JobPostings';
import HRAnalyticsDashboard from './HRAnalyticsDashboard';
import SettingsPage from './SettingsPage';
import PricingPage from './PricingPage';
import ModelTrainingPage from './ModelTrainingPage';
import { EmployerRightPanel } from './EmployerSidePanels';

type View = 'dashboard' | 'interview' | 'jobs' | 'analytics' | 'training' | 'settings' | 'pricing' | 'news' | 'blog' | 'support' | 'about';

interface DashboardLayoutProps {
  onLogout: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ onLogout }) => {
  const [activeView, setActiveView] = useState<View>('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('theme') === 'dark' || 
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard': return <EmployerDashboard />;
      case 'interview': return <AIInterviewRoom />;
      case 'jobs': return <JobPostings />;
      case 'analytics': return <HRAnalyticsDashboard />;
      case 'training': return <ModelTrainingPage />;
      case 'settings': return <SettingsPage />;
      case 'pricing': return <PricingPage />;
      default: return <EmployerDashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100">
      <Sidebar 
        isOpen={isSidebarOpen} 
        activeView={activeView}
        setActiveView={setActiveView}
        isMobileMenuOpen={isMobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          onMobileMenuToggle={() => setMobileMenuOpen(!isMobileMenuOpen)} 
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          onLogout={onLogout}
        />
        <div className="flex-1 flex overflow-hidden">
          <main className={`flex-1 overflow-x-hidden overflow-y-auto ${activeView === 'interview' ? 'p-4' : 'p-4 md:p-8'}`}>
            {renderContent()}
          </main>
          {activeView !== 'interview' && <EmployerRightPanel />}
        </div>
      </div>
    </div>
  );
};

// --- Sidebar ---
const Sidebar: React.FC<{
    isOpen: boolean,
    activeView: View,
    setActiveView: (view: View) => void,
    isMobileMenuOpen: boolean,
    setMobileMenuOpen: (isOpen: boolean) => void,
}> = ({ isOpen, activeView, setActiveView, isMobileMenuOpen, setMobileMenuOpen }) => {
    
    const navItems = [
        { view: 'dashboard' as View, icon: <HomeIcon />, label: "Dashboard" },
        { view: 'training' as View, icon: <BrainCircuitIcon />, label: "AI Modules" },
        { view: 'news' as View, icon: <NewspaperIcon />, label: "News & Media" },
        { view: 'support' as View, icon: <MessageSquareIcon />, label: "Support" },
        { view: 'settings' as View, icon: <SettingsIcon />, label: "Settings" },
    ];

    const handleItemClick = (view: View) => {
        setActiveView(view);
        setMobileMenuOpen(false);
    }
    
    return (
        <>
            {/* Overlay for mobile */}
            {isMobileMenuOpen && <div onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/60 z-30 lg:hidden"></div>}

            <div className={`fixed lg:relative inset-y-0 left-0 bg-slate-800 text-white flex flex-col z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 ${isOpen ? 'w-64' : 'w-20'}`}>
                <div className={`flex items-center justify-between h-20 border-b border-slate-700/50 ${isOpen ? 'px-4' : 'px-0 justify-center'}`}>
                    <div className="flex items-center">
                        <NuroAILogoIcon className="w-8 h-8 text-white flex-shrink-0" />
                        {isOpen && <h1 className="ml-2 text-xl font-bold">Nuro AI Labs</h1>}
                    </div>
                     <button onClick={() => setMobileMenuOpen(false)} className="lg:hidden p-1 mr-2"><XIcon /></button>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    {navItems.map(item => (
                        <NavItem key={item.view} {...item} activeView={activeView} isSidebarOpen={isOpen} onClick={() => handleItemClick(item.view)} />
                    ))}
                </nav>
            </div>
        </>
    );
}

// --- NavItem ---
const NavItem: React.FC<{
    view: View;
    icon: React.ReactElement<{ className?: string }>;
    label: string;
    activeView: View;
    isSidebarOpen: boolean;
    onClick: () => void;
}> = ({ view, icon, label, activeView, isSidebarOpen, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center w-full py-2.5 text-sm font-medium rounded-lg transition-all group ${isSidebarOpen ? 'px-4' : 'justify-center'} ${activeView === view ? 'bg-ai-blue text-white' : 'text-gray-300 hover:bg-slate-700 hover:text-white'}`}
    >
      {React.cloneElement(icon, { className: "w-5 h-5 text-gray-400 group-hover:text-white transition-colors flex-shrink-0" + (activeView === view ? " !text-white" : "") })}
      {isSidebarOpen && <span className="ml-3 truncate">{label}</span>}
      {!isSidebarOpen && <span className="absolute left-full ml-4 w-max px-2 py-1 bg-slate-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">{label}</span>}
    </button>
);


// --- Header ---
const Header: React.FC<{
    onMobileMenuToggle: () => void;
    isDarkMode: boolean;
    setIsDarkMode: (isDark: boolean) => void;
    onLogout: () => void;
}> = ({ onMobileMenuToggle, isDarkMode, setIsDarkMode, onLogout }) => (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 border-b border-slate-200 dark:border-gray-700">
      <button onClick={onMobileMenuToggle} className="lg:hidden text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
        <MenuIcon className="w-6 h-6"/>
      </button>
      <div className="flex-1"></div> {/* Spacer */}
      <div className="flex items-center space-x-5">
        <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
            {isDarkMode ? <SunIcon className="w-6 h-6"/> : <MoonIcon className="w-6 h-6"/>}
        </button>
        <button className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 relative">
          <BellIcon className="w-6 h-6"/>
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        <div className="flex items-center">
          <img className="h-9 w-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=hr-manager" alt="User" />
          <div className="ml-3 hidden md:block">
            <p className="font-semibold text-sm text-gray-800 dark:text-gray-100">HR Manager</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Nuro AI Labs</p>
          </div>
        </div>
        <button onClick={onLogout} className="flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-ai-blue dark:hover:text-white">
            <LogoutIcon className="w-5 h-5 mr-1.5"/>
            <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
);

export default DashboardLayout;

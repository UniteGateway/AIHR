import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import DashboardLayout from './components/DashboardLayout';
import LandingPage from './components/LandingPage';
import FeaturesPage from './components/FeaturesPage';
import HowItWorksPage from './components/HowItWorksPage';
import PublicPricingPage from './components/PublicPricingPage';
import ContactPage from './components/ContactPage';
import CandidateLayout from './components/CandidateLayout';
import AboutUsPage from './components/AboutUsPage';
import CareersPage from './components/CareersPage';
import BlogPage from './components/BlogPage';
import HelpCenterPage from './components/HelpCenterPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import ApiDocsPage from './components/ApiDocsPage';
import StatusPage from './components/StatusPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CookiePolicyPage from './components/CookiePolicyPage';

export type View = 'landing' | 'features' | 'how-it-works' | 'pricing' | 'contact' | 'login' | 'hrDashboard' | 'candidateDashboard' | 'about' | 'careers' | 'blog' | 'help' | 'caseStudies' | 'apiDocs' | 'status' | 'privacy' | 'terms' | 'cookies';
export type Role = 'hr' | 'candidate';

const App: React.FC = () => {
  const [view, setView] = useState<View>('landing');

  const handleLogin = (role: Role) => {
    setView(role === 'hr' ? 'hrDashboard' : 'candidateDashboard');
  };

  const handleLogout = () => {
    setView('landing');
  };

  const renderView = () => {
    switch(view) {
      case 'hrDashboard':
        return <DashboardLayout onLogout={handleLogout} />;
      case 'candidateDashboard':
        return <CandidateLayout onLogout={handleLogout} />;
      case 'login':
        return <LoginPage onLogin={handleLogin} onBack={() => setView('landing')} />;
      case 'features':
        return <FeaturesPage setView={setView} />;
      case 'how-it-works':
        return <HowItWorksPage setView={setView} />;
      case 'pricing':
        return <PublicPricingPage setView={setView} />;
      case 'contact':
        return <ContactPage setView={setView} />;
      case 'about':
        return <AboutUsPage setView={setView} />;
      case 'careers':
        return <CareersPage setView={setView} />;
      case 'blog':
        return <BlogPage setView={setView} />;
      case 'help':
        return <HelpCenterPage setView={setView} />;
      case 'caseStudies':
        return <CaseStudiesPage setView={setView} />;
      case 'apiDocs':
        return <ApiDocsPage setView={setView} />;
      case 'status':
        return <StatusPage setView={setView} />;
      case 'privacy':
        return <PrivacyPolicyPage setView={setView} />;
      case 'terms':
        return <TermsOfServicePage setView={setView} />;
      case 'cookies':
        return <CookiePolicyPage setView={setView} />;
      case 'landing':
      default:
        return <LandingPage setView={setView} />;
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {renderView()}
    </div>
  );
};

export default App;
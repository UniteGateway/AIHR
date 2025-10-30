import React from 'react';
import { View } from '../App';
import { 
    AILandingLogoIcon, 
    FacebookIcon, 
    LinkedInIcon, 
    TwitterIcon, 
    YouTubeIcon
} from './Icons';

interface PageProps {
  setView: (view: View) => void;
}

const Header: React.FC<PageProps> = ({ setView }) => (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
                <a onClick={() => setView('landing')} className="flex items-center cursor-pointer">
                    <AILandingLogoIcon className="h-8 w-8 text-ai-blue" />
                    <span className="ml-2 text-xl font-bold text-ai-blue">AI HR Global</span>
                </a>
                <nav className="hidden md:flex md:space-x-10">
                    <a onClick={() => setView('features')} className="text-gray-600 hover:text-ai-blue transition-colors font-medium cursor-pointer">Features</a>
                    <a onClick={() => setView('how-it-works')} className="text-gray-600 hover:text-ai-blue transition-colors font-medium cursor-pointer">How It Works</a>
                    <a onClick={() => setView('pricing')} className="text-gray-600 hover:text-ai-blue transition-colors font-medium cursor-pointer">Pricing</a>
                    <a onClick={() => setView('contact')} className="text-gray-600 hover:text-ai-blue transition-colors font-medium cursor-pointer">Contact</a>
                </nav>
                <button onClick={() => setView('login')} className="bg-ai-blue text-white font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                    Sign In
                </button>
            </div>
        </div>
    </header>
);

const Footer: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
    const linkSections = {
        Platform: [
            { name: "Features", view: "features" as View },
            { name: "Pricing", view: "pricing" as View },
            { name: "For Employers", view: "login" as View },
            { name: "For Candidates", view: "login" as View }
        ],
        Company: [
            { name: "About Us", view: "about" as View },
            { name: "Careers", view: "careers" as View },
            { name: "Contact", view: "contact" as View },
            { name: "News & Blog", view: "blog" as View }
        ],
        Resources: [
            { name: "Help Center", view: "help" as View },
            { name: "Case Studies", view: "caseStudies" as View },
            { name: "API Documentation", view: "apiDocs" as View },
            { name: "System Status", view: "status" as View }
        ],
        Legal: [
            { name: "Privacy Policy", view: "privacy" as View },
            { name: "Terms of Service", view: "terms" as View },
            { name: "Cookie Policy", view: "cookies" as View }
        ],
    };
    return (
        <footer className="bg-white border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                 <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center">
                            <AILandingLogoIcon className="h-8 w-8 text-ai-blue" />
                            <span className="ml-2 text-xl font-bold text-ai-blue">AI HR Global</span>
                        </div>
                        <p className="mt-4 text-gray-500 text-sm">The future of virtual interviews and intelligent hiring.</p>
                    </div>
                    {Object.entries(linkSections).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="font-semibold text-gray-800">{title}</h4>
                            <ul className="mt-4 space-y-2">
                                {links.map(link => (
                                    <li key={link.name}><a onClick={() => setView(link.view)} className="text-gray-600 hover:text-ai-blue text-sm cursor-pointer">{link.name}</a></li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Nuro AI Labs Limited – All Rights Reserved.</p>
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" className="text-gray-500 hover:text-ai-blue"><TwitterIcon /></a>
                        <a href="#" className="text-gray-500 hover:text-ai-blue"><LinkedInIcon /></a>
                        <a href="#" className="text-gray-500 hover:text-ai-blue"><YouTubeIcon /></a>
                        <a href="#" className="text-gray-500 hover:text-ai-blue"><FacebookIcon /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

const TermsOfServicePage: React.FC<PageProps> = ({ setView }) => {
    return (
        <div className="bg-white">
            <Header setView={setView} />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <article className="prose max-w-4xl mx-auto">
                    <h1>Terms of Service</h1>
                    <p><strong>Last Updated:</strong> October 28, 2024</p>
                    <p>Please read these Terms of Service ("Terms") carefully before using the AI HR Global platform operated by Nuro AI Labs Limited.</p>
                    
                    <h2>1. Agreement to Terms</h2>
                    <p>By using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Services.</p>

                    <h2>2. User Accounts</h2>
                    <p>You may be required to register for an account to access certain features of the platform. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password.</p>

                     <h2>3. Use of Services</h2>
                    <p>You agree not to use the Services for any unlawful purpose or in any way that interrupts, damages, or impairs the service. You are responsible for all content you upload, including resumes and job descriptions.</p>
                    
                     <h2>4. Intellectual Property</h2>
                    <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Nuro AI Labs Limited and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Nuro AI Labs Limited.</p>

                    <h2>5. Termination</h2>
                    <p>We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.</p>
                    
                    <h2>6. Limitation of Liability</h2>
                    <p>In no event shall Nuro AI Labs Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                    <h2>7. Changes to Terms</h2>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect.</p>
                </article>
            </main>
            <Footer setView={setView} />
        </div>
    );
};

export default TermsOfServicePage;

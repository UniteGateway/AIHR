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

const PrivacyPolicyPage: React.FC<PageProps> = ({ setView }) => {
    return (
        <div className="bg-white">
            <Header setView={setView} />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <article className="prose max-w-4xl mx-auto">
                    <h1>Privacy Policy for AI HR Global</h1>
                    <p><strong>Last Updated:</strong> October 28, 2024</p>
                    <p>Welcome to AI HR Global ("we", "us", or "our"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>
                    
                    <h2>1. Information We Collect</h2>
                    <p>We may collect personal information from you in a variety of ways, including, but not limited to, when you register on the site, create a job posting, participate in an AI interview, or fill out a form. The information we may collect includes:</p>
                    <ul>
                        <li><strong>Personal Data:</strong> Name, email address, phone number, resume/CV details.</li>
                        <li><strong>Interview Data:</strong> Video and audio recordings of interviews, transcripts, and AI-generated analysis.</li>
                        <li><strong>Usage Data:</strong> Information about how you use the platform, such as IP address, browser type, and pages visited.</li>
                    </ul>

                    <h2>2. How We Use Your Information</h2>
                    <p>We use the information we collect to:</p>
                    <ul>
                        <li>Provide, operate, and maintain our services.</li>
                        <li>Process job applications and facilitate the hiring process.</li>
                        <li>Improve, personalize, and expand our services.</li>
                        <li>Communicate with you, either directly or through one of our partners.</li>
                        <li>For compliance purposes, including enforcing our Terms of Service.</li>
                    </ul>

                     <h2>3. Data Sharing and Disclosure</h2>
                    <p>We do not sell your personal information. We may share your information with third parties only in the ways that are described in this privacy policy, such as with prospective employers (for candidates) or with service providers who perform services for us.</p>
                    
                     <h2>4. Data Security</h2>
                    <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>

                    <h2>5. Your Data Protection Rights</h2>
                    <p>Depending on your location, you may have the following rights regarding your personal information: the right to access, the right to rectification, the right to erasure, the right to restrict processing, the right to object to processing, and the right to data portability.</p>
                    
                    <h2>6. Contact Us</h2>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:privacy@aihrglobal.com">privacy@aihrglobal.com</a>.</p>
                </article>
            </main>
            <Footer setView={setView} />
        </div>
    );
};

export default PrivacyPolicyPage;

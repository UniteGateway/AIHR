import React, { useState } from 'react';
import { View } from '../App';
import { 
    AILandingLogoIcon, 
    FacebookIcon, 
    LinkedInIcon, 
    TwitterIcon, 
    YouTubeIcon,
    SearchIcon,
    ChevronDownIcon,
    BriefcaseIcon,
    UserIcon
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


const FAQItem: React.FC<{question: string, answer: string}> = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-lg bg-white">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left p-5">
                <span className="font-semibold text-gray-800">{question}</span>
                <ChevronDownIcon className={`w-5 h-5 text-gray-500 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="px-5 pb-5 text-gray-600 border-t pt-4">{answer}</div>}
        </div>
    );
}

const HelpCenterPage: React.FC<PageProps> = ({ setView }) => {
    const employerFaqs = [
        { q: "How do I create a new job posting?", a: "From your dashboard, navigate to 'Job Postings' and click the 'Create New Job' button. Fill in the required details and publish." },
        { q: "Can I customize interview questions for a specific role?", a: "Yes, on our Premium and Enterprise plans, you can create custom interview templates in the 'Model Training' section of your dashboard." },
        { q: "How do I review a candidate's AI interview report?", a: "In the 'Job Postings' section, click 'Manage' on a job, and you will see a list of applicants. Click 'View Report' for any candidate who has completed their interview." }
    ];

    const candidateFaqs = [
        { q: "How long does the AI interview take?", a: "Most interviews are designed to be completed in 15-25 minutes, but this can vary depending on the role." },
        { q: "Can I retake the interview if I make a mistake?", a: "To ensure a fair and consistent process for all candidates, interviews cannot be retaken once started. We provide a practice session to help you get comfortable." },
        { q: "What do I need to take the interview?", a: "You will need a stable internet connection, a computer or mobile device with a working microphone and camera, and a quiet place where you won't be interrupted." }
    ];

    return (
        <div className="bg-gray-50/50">
            <Header setView={setView} />
            <main>
                <section className="bg-white border-b">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">Help Center</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-600">How can we help you today?</p>
                        <div className="mt-8 max-w-xl mx-auto relative">
                            <input type="search" placeholder="Search for answers..." className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                            <SearchIcon className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </section>

                <section className="py-24">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3"><BriefcaseIcon /> For Employers</h2>
                                <div className="mt-6 space-y-4">
                                    {/* Fix: Explicitly map `faq.q` to `question` and `faq.a` to `answer` to match the `FAQItem` component's prop types. */}
                                    {employerFaqs.map(faq => <FAQItem key={faq.q} question={faq.q} answer={faq.a} />)}
                                </div>
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3"><UserIcon /> For Candidates</h2>
                                <div className="mt-6 space-y-4">
                                    {/* Fix: Explicitly map `faq.q` to `question` and `faq.a` to `answer` to match the `FAQItem` component's prop types. */}
                                    {candidateFaqs.map(faq => <FAQItem key={faq.q} question={faq.q} answer={faq.a} />)}
                                </div>
                            </div>
                        </div>
                        <div className="mt-20 text-center bg-white p-8 rounded-lg border border-gray-200">
                             <h3 className="text-xl font-bold text-gray-900">Can't find what you're looking for?</h3>
                            <p className="mt-2 text-gray-600">Our support team is here to help. Reach out to us for any further questions.</p>
                             <button onClick={() => setView('contact')} className="mt-6 bg-ai-blue text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </section>
            </main>
            <Footer setView={setView} />
        </div>
    );
};

export default HelpCenterPage;
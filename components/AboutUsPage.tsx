import React from 'react';
import { View } from '../App';
import { 
    AILandingLogoIcon, 
    FacebookIcon, 
    LinkedInIcon, 
    TwitterIcon, 
    YouTubeIcon,
    SparklesIcon,
    UsersIcon
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

const AboutUsPage: React.FC<PageProps> = ({ setView }) => {
    const teamMembers = [
        { name: 'Dr. Evelyn Reed', title: 'Founder & CEO', avatar: 'https://i.pravatar.cc/150?u=evelyn' },
        { name: 'Marcus Chen', title: 'Chief Technology Officer', avatar: 'https://i.pravatar.cc/150?u=marcus' },
        { name: 'Aisha Khan', title: 'Head of Product', avatar: 'https://i.pravatar.cc/150?u=aisha' },
        { name: 'Ben Carter', title: 'Lead AI Researcher', avatar: 'https://i.pravatar.cc/150?u=ben' },
    ];

    return (
        <div className="bg-white">
            <Header setView={setView} />
            <main>
                <section className="relative bg-ai-blue">
                    <div className="absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80" alt="Diverse team working together" className="w-full h-full object-cover opacity-20" />
                    </div>
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-extrabold">About AI HR Global</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90">We're on a mission to make hiring more intelligent, fair, and efficient for everyone.</p>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
                                <p className="mt-4 text-gray-600">Founded in 2022 by a team of HR veterans and AI researchers, AI HR Global was born from a simple observation: traditional hiring is broken. It's slow, biased, and often fails to identify the true potential of candidates.</p>
                                <p className="mt-4 text-gray-600">We set out to change that. By harnessing the power of conversational AI, we've built a platform that not only automates the screening process but enriches it, providing deep, actionable insights that help companies build stronger, more diverse teams.</p>
                            </div>
                            <div>
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" alt="Founders planning on a whiteboard" className="rounded-lg shadow-xl" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-gray-50 border-t">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
                        <div className="inline-block bg-ai-blue/10 text-ai-blue p-3 rounded-lg mb-4">
                            <SparklesIcon className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                            To empower organizations to build the world's best teams by providing the most intelligent, fair, and insightful hiring platform.
                        </p>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet the Leadership</h2>
                            <p className="mt-4 text-lg text-gray-600">The minds behind the mission.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                            {teamMembers.map(member => (
                                <div key={member.name} className="text-center">
                                    <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto shadow-lg" />
                                    <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                                    <p className="text-ai-blue">{member.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                <section className="bg-gray-50 border-t">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                        <div className="inline-block bg-ai-blue/10 text-ai-blue p-3 rounded-lg mb-4">
                            <UsersIcon className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold">Join Our Team</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Interested in changing the future of hiring? We're always looking for talented and passionate people.</p>
                        <button onClick={() => setView('careers')} className="mt-8 bg-ai-blue text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:opacity-90 transition text-lg">
                            View Open Positions
                        </button>
                    </div>
                </section>
            </main>
            <Footer setView={setView} />
        </div>
    );
};

export default AboutUsPage;

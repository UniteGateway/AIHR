import React from 'react';
import { View } from '../App';
import { 
    AILandingLogoIcon, 
    FacebookIcon, 
    LinkedInIcon, 
    TwitterIcon, 
    YouTubeIcon,
    SparklesIcon,
    BriefcaseIcon,
    LinkIcon
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


const CareersPage: React.FC<PageProps> = ({ setView }) => {
    const jobOpenings = {
        "Engineering": [
            { title: "Senior Frontend Developer", location: "Remote", type: "Full-time" },
            { title: "Backend Engineer (Python)", location: "San Francisco, CA", type: "Full-time" },
            { title: "AI/ML Engineer", location: "Remote", type: "Full-time" },
        ],
        "Product & Design": [
            { title: "Senior Product Manager", location: "New York, NY", type: "Full-time" },
            { title: "UX/UI Designer", location: "Remote", type: "Contract" },
        ],
        "Sales & Marketing": [
            { title: "Account Executive", location: "Remote", type: "Full-time" },
        ],
    };

    const perks = [
        "Competitive Salary & Equity", "Comprehensive Health Benefits", "Unlimited Paid Time Off", 
        "Remote-First Culture", "Home Office Stipend", "Professional Development Budget"
    ];

    return (
        <div className="bg-white">
            <Header setView={setView} />
            <main>
                <section className="relative bg-ai-blue">
                    <div className="absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1920&q=80" alt="Team celebrating success in an office" className="w-full h-full object-cover opacity-20" />
                    </div>
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-extrabold">Join Our Mission</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90">We're building the future of recruitment. Come be a part of a talented, passionate team that's making a real impact.</p>
                    </div>
                </section>

                <section className="py-24 bg-gray-50/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-gray-900">Why Work With Us?</h2>
                            <p className="mt-3 text-lg text-gray-600">We're more than just a company; we're a community.</p>
                        </div>
                        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
                            {perks.map(perk => (
                                <div key={perk} className="bg-white p-6 rounded-lg border border-gray-200 flex items-center gap-4">
                                    <SparklesIcon className="w-6 h-6 text-ai-blue flex-shrink-0" />
                                    <span className="font-semibold text-gray-700">{perk}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                        <div className="text-center mb-16">
                            <div className="inline-block bg-ai-blue/10 text-ai-blue p-3 rounded-lg mb-4">
                                <BriefcaseIcon className="h-8 w-8" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Current Openings</h2>
                            <p className="mt-4 text-lg text-gray-600">Find the role where you'll make a difference.</p>
                        </div>

                        <div className="space-y-12">
                            {Object.entries(jobOpenings).map(([department, jobs]) => (
                                <div key={department}>
                                    <h3 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-6">{department}</h3>
                                    <div className="space-y-4">
                                        {jobs.map(job => (
                                            <div key={job.title} className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col md:flex-row justify-between items-center hover:shadow-md hover:border-ai-blue/50 transition-all">
                                                <div>
                                                    <h4 className="text-xl font-semibold text-ai-blue">{job.title}</h4>
                                                    <p className="text-gray-500 mt-1">{job.location} &middot; {job.type}</p>
                                                </div>
                                                <button className="mt-4 md:mt-0 bg-gray-100 text-ai-blue font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2">
                                                    Apply on LinkedIn <LinkIcon className="w-5 h-5"/>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer setView={setView} />
        </div>
    );
};

export default CareersPage;

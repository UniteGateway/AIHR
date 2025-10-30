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

const CaseStudiesPage: React.FC<PageProps> = ({ setView }) => {
    const studies = [
        {
            company: "Tech Innovators Inc.",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            title: "How Tech Innovators Reduced Time-to-Hire by 50%",
            image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
            stats: [
                { value: "50%", label: "Reduction in Time-to-Hire" },
                { value: "30%", label: "Increase in Candidate Quality" },
                { value: "120+", label: "Hours Saved per Month" }
            ]
        },
        {
            company: "Global Enterprises",
            logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Microsoft_logo.svg",
            title: "Improving Diversity Metrics with Unbiased AI Screening",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
            stats: [
                { value: "25%", label: "Increase in Diverse Hires" },
                { value: "95%", label: "Positive Candidate Feedback" },
                { value: "Top 3", label: "Candidates Identified Accurately" }
            ]
        }
    ];

    return (
        <div className="bg-white">
            <Header setView={setView} />
            <main>
                <section className="relative bg-ai-blue">
                    <div className="absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1920&q=80" alt="Business people shaking hands" className="w-full h-full object-cover opacity-20" />
                    </div>
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-extrabold">Customer Success Stories</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90">See how leading companies are transforming their recruitment with AI HR Global.</p>
                    </div>
                </section>

                <section className="py-24 bg-gray-50/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                        {studies.map((study, index) => (
                            <div key={study.company} className="bg-white p-8 rounded-lg border border-gray-200 shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <img src={study.image} alt={study.company} className="rounded-md object-cover w-full h-80" />
                                </div>
                                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                                    <img src={study.logo} alt={`${study.company} logo`} className="h-8 mb-4" />
                                    <h2 className="text-3xl font-bold text-gray-900">{study.title}</h2>
                                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                        {study.stats.map(stat => (
                                            <div key={stat.label}>
                                                <p className="text-3xl font-bold text-ai-blue">{stat.value}</p>
                                                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-8 bg-ai-blue text-white font-semibold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                                        Read Full Story
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            <Footer setView={setView} />
        </div>
    );
};

export default CaseStudiesPage;

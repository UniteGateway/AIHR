import React, { useState } from 'react';
import { View } from '../App';
import { 
    AILandingLogoIcon,
    FacebookIcon, 
    LinkedInIcon, 
    TwitterIcon, 
    YouTubeIcon,
    EditIcon,
    MailIcon,
    InterviewIcon,
    AnalyticsIcon,
    ShieldCheckIcon,
    ClockIcon,
    GeminiIcon
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
                    <a onClick={() => setView('how-it-works')} className="text-ai-blue border-b-2 border-ai-blue transition-colors font-semibold cursor-pointer">How It Works</a>
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


const HowItWorksPage: React.FC<PageProps> = ({ setView }) => {
    const [activeTab, setActiveTab] = useState<'employer' | 'candidate'>('employer');

    const employerSteps = [
        { icon: <EditIcon />, title: "Create Your Ideal Interview", description: "Define the role, responsibilities, and key competencies. Use our templates or create custom questions to tailor the interview script. Our AI will use this context to assess candidates effectively.", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80" },
        { icon: <MailIcon />, title: "Invite Candidates Seamlessly", description: "Automate your outreach. Send individual or bulk invitations with a unique, secure link for candidates to begin their AI-powered interview whenever they're ready.", image: "https://images.unsplash.com/photo-1596526131032-0792f6c0054d?auto=format&fit=crop&w=1200&q=80" },
        { icon: <InterviewIcon />, title: "AI Conducts In-Depth Interviews", description: "Our conversational AI engages candidates in a structured, professional interview. It probes for details, assesses skills, and ensures a fair and consistent experience for everyone.", image: "https://images.unsplash.com/photo-1507525428034-b723a9ce6890?auto=format&fit=crop&w=1200&q=80" },
        { icon: <AnalyticsIcon />, title: "Receive Actionable Insights", description: "Instantly get a detailed report for each candidate, complete with transcripts, a performance score, and AI-generated summaries of strengths and weaknesses. Make data-driven decisions and move the best candidates forward.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
    ];

    const candidateSteps = [
        { icon: <MailIcon />, title: "Receive a Flexible Invitation", description: "Get a personal interview link directly to your inbox. No need to coordinate schedules—you can take the interview at a time and place that works best for you.", image: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&w=1200&q=80" },
        { icon: <ShieldCheckIcon />, title: "Prepare and Practice", description: "Familiarize yourself with the platform in a no-pressure practice session. Test your audio and video, and answer sample questions to feel confident before you start.", image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1200&q=80" },
        { icon: <InterviewIcon />, title: "Showcase Your Skills", description: "Engage in a natural conversation with our friendly AI interviewer. It's your opportunity to demonstrate your expertise and personality beyond what's on your resume.", image: "https://images.unsplash.com/photo-1531498163622-7712494c6533?auto=format&fit=crop&w=1200&q=80" },
        { icon: <ClockIcon />, title: "Get Faster Feedback", description: "Because the initial screening is automated, hiring teams can review your results quickly. This streamlined process means you're not left waiting and can expect to hear back sooner.", image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80" },
    ];
    
    const steps = activeTab === 'employer' ? employerSteps : candidateSteps;

  return (
    <div className="bg-white">
      <Header setView={setView} />
      <main>
        <section className="relative bg-ai-blue">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1920&q=80" alt="Person drawing a flowchart on a whiteboard" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold">A Clear Path to Your Next Hire</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90">Streamlined for employers, fair and flexible for candidates. See how our intelligent platform simplifies every step of the hiring journey.</p>
            </div>
        </section>

        <section className="py-24 bg-gray-50/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900">A Simple, Transparent Process for Everyone</h2>
                    <p className="mt-3 text-lg text-gray-600">Select your role to see how AI HR Global works for you.</p>
                </div>

                <div className="flex justify-center my-12">
                    <div className="bg-gray-200 p-1.5 rounded-lg flex items-center space-x-2">
                        <button onClick={() => setActiveTab('employer')} className={`px-6 py-2.5 text-sm font-semibold rounded-md transition-colors ${activeTab === 'employer' ? 'bg-white text-ai-blue shadow' : 'text-gray-600 hover:text-gray-800'}`}>
                            For Employers
                        </button>
                        <button onClick={() => setActiveTab('candidate')} className={`px-6 py-2.5 text-sm font-semibold rounded-md transition-colors ${activeTab === 'candidate' ? 'bg-white text-ai-blue shadow' : 'text-gray-600 hover:text-gray-800'}`}>
                            For Candidates
                        </button>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto space-y-20">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="md:w-1/2 w-full">
                                <img src={step.image} alt={step.title} className="rounded-lg shadow-xl object-cover w-full h-80" />
                            </div>
                            <div className="md:w-1/2">
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 bg-ai-blue/10 text-ai-blue p-3 rounded-lg">
                                        {React.cloneElement(step.icon, {className: "h-7 w-7"})}
                                    </div>
                                    <div className="w-16 h-0.5 bg-gray-200"></div>
                                    <span className="font-bold text-5xl text-gray-300">0{index + 1}</span>
                                </div>
                                <h3 className="mt-5 text-2xl font-bold text-gray-900">{step.title}</h3>
                                <p className="mt-3 text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
                <div className="inline-block bg-indigo-100 text-indigo-600 p-4 rounded-full">
                    <GeminiIcon className="h-10 w-10" />
                </div>
                <h2 className="mt-6 text-3xl font-bold text-gray-900">Powered by Gemini</h2>
                <p className="mt-4 text-lg text-gray-600">
                    Our platform leverages the advanced reasoning and conversational capabilities of the Gemini API to conduct interviews that are not just automated, but intelligent. This ensures a natural, in-depth, and fair evaluation for every candidate, providing you with insights you can't get from a resume alone.
                </p>
            </div>
        </section>
        
        <section className="bg-gray-100 border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Hiring?</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">See the difference intelligent interviewing can make. Start your free trial today and find your next great hire faster.</p>
                <button onClick={() => setView('login')} className="mt-8 bg-ai-blue text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition text-lg">
                    Sign Up for Free
                </button>
            </div>
        </section>
      </main>
      <Footer setView={setView} />
    </div>
  );
};

export default HowItWorksPage;
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

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm">
        <code>{children}</code>
    </pre>
);

const ApiDocsPage: React.FC<PageProps> = ({ setView }) => {
    return (
        <div className="bg-white">
            <Header setView={setView} />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:flex">
                    <aside className="lg:w-64 lg:flex-shrink-0 lg:pr-8 mb-8 lg:mb-0">
                        <nav className="space-y-4 sticky top-24">
                            <h3 className="font-semibold text-lg">API Reference</h3>
                            <ul className="space-y-2">
                                <li><a href="#introduction" className="text-gray-600 hover:text-ai-blue">Introduction</a></li>
                                <li><a href="#authentication" className="text-gray-600 hover:text-ai-blue">Authentication</a></li>
                            </ul>
                             <h3 className="font-semibold text-lg pt-4 border-t">Endpoints</h3>
                             <ul className="space-y-2">
                                <li><a href="#jobs" className="text-gray-600 hover:text-ai-blue">Jobs</a></li>
                                <li><a href="#candidates" className="text-gray-600 hover:text-ai-blue">Candidates</a></li>
                                <li><a href="#reports" className="text-gray-600 hover:text-ai-blue">Reports</a></li>
                            </ul>
                        </nav>
                    </aside>
                    <div className="flex-1 min-w-0">
                        <article className="prose max-w-none">
                            <section id="introduction">
                                <h1>API Documentation</h1>
                                <p>Welcome to the AI HR Global API. Our REST API allows you to integrate our intelligent hiring platform with your existing tools and workflows, such as your Applicant Tracking System (ATS) or internal dashboards.</p>
                            </section>
                            
                            <section id="authentication" className="mt-12 pt-8 border-t">
                                <h2>Authentication</h2>
                                <p>All API requests must be authenticated using an API key. You can generate and manage your API keys from the 'Settings' page in your employer dashboard.</p>
                                <p>Include your API key in the header of your requests:</p>
                                <CodeBlock>
                                    Authorization: Bearer YOUR_API_KEY
                                </CodeBlock>
                            </section>

                            <section id="jobs" className="mt-12 pt-8 border-t">
                                <h2>Jobs Endpoint</h2>
                                <p>Interact with your job postings programmatically.</p>
                                <h4>GET /api/v1/jobs</h4>
                                <p>Retrieves a list of all job postings in your account.</p>
                                <h4>POST /api/v1/jobs</h4>
                                <p>Creates a new job posting.</p>
                                <p>Request Body:</p>
                                <CodeBlock>
{`{
  "title": "Senior Frontend Developer",
  "department": "Engineering",
  "location": "Remote",
  "description": "Job description here..."
}`}
                                </CodeBlock>
                            </section>

                            <section id="candidates" className="mt-12 pt-8 border-t">
                                <h2>Candidates Endpoint</h2>
                                <p>Manage candidates for specific jobs.</p>
                                <h4>GET /api/v1/jobs/:jobId/candidates</h4>
                                <p>Retrieves a list of all candidates for a specific job.</p>
                                <h4>POST /api/v1/jobs/:jobId/candidates</h4>
                                <p>Adds a new candidate to a job posting and sends an interview invitation.</p>
                                <p>Request Body:</p>
                                 <CodeBlock>
{`{
  "name": "Alex Doe",
  "email": "alex.doe@example.com",
  "resume_url": "https://example.com/resume.pdf"
}`}
                                </CodeBlock>
                            </section>

                             <section id="reports" className="mt-12 pt-8 border-t">
                                <h2>Reports Endpoint</h2>
                                <p>Access AI-generated interview reports.</p>
                                <h4>GET /api/v1/reports/:candidateId</h4>
                                <p>Retrieves the detailed interview report for a specific candidate.</p>
                                <p>Example Response:</p>
                                 <CodeBlock>
{`{
  "candidate_id": "c_12345",
  "overall_score": 92,
  "summary": "...",
  "strengths": [...],
  "weaknesses": [...]
}`}
                                </CodeBlock>
                            </section>

                        </article>
                    </div>
                </div>
            </main>
            <Footer setView={setView} />
        </div>
    );
};

export default ApiDocsPage;

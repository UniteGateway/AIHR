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


const BlogPage: React.FC<PageProps> = ({ setView }) => {
    const posts = [
        {
            title: "5 Ways AI is Reducing Unconscious Bias in Hiring",
            category: "Future of Work",
            date: "October 26, 2024",
            excerpt: "Discover how AI-powered interviews create a more level playing field for all candidates...",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "How to Prepare for an AI-Powered Job Interview",
            category: "Candidate Tips",
            date: "October 22, 2024",
            excerpt: "Nervous about talking to a robot? Don't be. Here are our top tips for acing your AI interview...",
            image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "The ROI of AI in Recruitment: A Data-Driven Look",
            category: "HR Tech",
            date: "October 18, 2024",
            excerpt: "We break down the numbers to show how automating your screening process saves time and money.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
        },
    ];

    return (
        <div className="bg-white">
            <Header setView={setView} />
            <main>
                <section className="relative bg-ai-blue">
                    <div className="absolute inset-0">
                        <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1920&q=80" alt="Desk with coffee, laptop, and notebook" className="w-full h-full object-cover opacity-20" />
                    </div>
                    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
                        <h1 className="text-4xl md:text-5xl font-extrabold">News & Insights</h1>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90">The latest in HR technology, recruitment strategy, and AI innovation.</p>
                    </div>
                </section>

                <section className="py-24 bg-gray-50/50">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {posts.map(post => (
                                <div key={post.title} className="bg-white rounded-lg shadow-md overflow-hidden group">
                                    <img src={post.image} alt={post.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                    <div className="p-6">
                                        <p className="text-sm font-semibold text-ai-blue">{post.category}</p>
                                        <h3 className="mt-2 text-xl font-bold text-gray-800">{post.title}</h3>
                                        <p className="mt-3 text-gray-600">{post.excerpt}</p>
                                        <p className="mt-4 text-sm text-gray-500">{post.date}</p>
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

export default BlogPage;

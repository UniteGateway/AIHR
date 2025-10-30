import React from 'react';
import { View } from '../App';
import { 
    AILandingLogoIcon, 
    FacebookIcon, 
    LinkedInIcon, 
    TwitterIcon, 
    YouTubeIcon,
    MailIcon
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
                    <a onClick={() => setView('contact')} className="text-ai-blue border-b-2 border-ai-blue transition-colors font-semibold cursor-pointer">Contact</a>
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

const ContactPage: React.FC<PageProps> = ({ setView }) => {
  return (
    <div className="bg-white">
      <Header setView={setView} />
      <main>
        <section className="relative bg-ai-blue">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1920&q=80" alt="Vintage telephone on a desk" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold">Get in Touch</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90">We'd love to hear from you. Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.</p>
            </div>
        </section>

        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">Contact Sales</h2>
                        <p className="mt-2 text-gray-600">Our sales team can help you find the right plan and answer any questions about our Enterprise offerings.</p>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center gap-3">
                                <MailIcon className="w-6 h-6 text-ai-blue" />
                                <a href="mailto:sales@aihrglobal.com" className="text-gray-800 hover:text-ai-blue font-medium">sales@aihrglobal.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="name" className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                            </div>
                             <div>
                                <label htmlFor="email-contact" className="text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email-contact" className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none" />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={4} className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-ai-blue/50 focus:border-ai-blue outline-none"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-ai-blue text-white font-semibold py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

      </main>
      <Footer setView={setView} />
    </div>
  );
};

export default ContactPage;
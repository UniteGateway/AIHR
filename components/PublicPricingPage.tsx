import React from 'react';
import { View } from '../App';
import { 
    AILandingLogoIcon, 
    FacebookIcon, 
    LinkedInIcon, 
    TwitterIcon, 
    YouTubeIcon,
    CheckIcon,
    StripeIcon
} from './Icons';

interface PageProps {
  setView: (view: View) => void;
}

const pricingData = {
    free: {
        name: "Free",
        price: "$0",
        description: "For individuals and small teams getting started.",
        features: [
            "1 Active Job Posting",
            "5 AI Interviews per month",
            "Basic Reporting",
            "Standard Support"
        ],
        cta: "Get Started Free"
    },
    premium: {
        name: "Premium",
        price: "$99",
        description: "For growing businesses that need more power.",
        features: [
            "20 Active Job Postings",
            "100 AI Interviews per month",
            "Advanced Analytics Dashboard",
            "Customizable Interview Questions",
            "Priority Email Support"
        ],
        cta: "Upgrade to Premium",
        popular: true
    },
    enterprise: {
        name: "Enterprise",
        price: "Custom",
        description: "For large organizations with specific needs.",
        features: [
            "Unlimited Job Postings",
            "Unlimited AI Interviews",
            "Custom Integrations (ATS, HRIS)",
            "Role-Based Access Control",
            "Dedicated Account Manager"
        ],
        cta: "Contact Sales"
    }
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
                    <a onClick={() => setView('pricing')} className="text-ai-blue border-b-2 border-ai-blue transition-colors font-semibold cursor-pointer">Pricing</a>
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

const PublicPricingPage: React.FC<PageProps> = ({ setView }) => {
  return (
    <div className="bg-white">
      <Header setView={setView} />
      <main>
        <section className="relative bg-ai-blue">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1920&q=80" alt="Person making a payment with a credit card" className="w-full h-full object-cover opacity-20" />
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold">Find Your Perfect Plan</h1>
                <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-blue-100/90">Flexible pricing that scales with your company's hiring needs.</p>
            </div>
        </section>

        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <PricingCard {...pricingData.free} setView={setView} />
                    <PricingCard {...pricingData.premium} setView={setView} />
                    <PricingCard {...pricingData.enterprise} setView={setView} />
                </div>
                <div className="mt-12 text-center text-gray-500 flex items-center justify-center gap-2">
                    <p>Secure payments powered by</p> <StripeIcon />
                </div>
            </div>
        </section>
      </main>
      <Footer setView={setView} />
    </div>
  );
};

interface PricingCardProps {
    name: string;
    price: string;
    description: string;
    features: string[];
    cta: string;
    popular?: boolean;
    setView: (view: View) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, description, features, cta, popular = false, setView }) => (
    <div className={`bg-white rounded-xl border-2 ${popular ? 'border-ai-blue' : 'border-slate-200'} p-8 flex flex-col relative`}>
        {popular && (
            <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-ai-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
            </div>
        )}
        <h3 className="text-lg font-semibold text-gray-500">{name}</h3>
        <div className="mt-4">
            <span className="text-4xl font-bold text-gray-800">{price}</span>
            {price !== "Custom" && <span className="text-gray-500">/ month</span>}
        </div>
        <p className="text-gray-500 mt-2 h-12">{description}</p>

        <ul className="space-y-4 mt-8 flex-1">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mt-1">
                        <CheckIcon className="w-5 h-5" />
                    </div>
                    <span className="ml-3 text-gray-700">{feature}</span>
                </li>
            ))}
        </ul>
        
        <button 
            onClick={() => cta === 'Contact Sales' ? setView('contact') : setView('login')}
            className={`w-full mt-8 font-semibold py-3 rounded-lg transition-colors ${
            popular ? 'bg-ai-blue text-white hover:opacity-90' : 'bg-slate-100 text-ai-blue hover:bg-slate-200'
        }`}>
            {cta}
        </button>
    </div>
);


export default PublicPricingPage;
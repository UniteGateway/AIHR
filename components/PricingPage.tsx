
import React from 'react';
import { CheckIcon, StripeIcon } from './Icons';

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
        cta: "Your Current Plan"
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

const PricingPage: React.FC = () => {
  return (
    <div className="space-y-8">
        <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">Choose the Plan That's Right for You</h1>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">AI HR Global offers flexible pricing to fit the needs of any company, from small startups to large enterprises.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard {...pricingData.free} />
            <PricingCard {...pricingData.premium} />
            <PricingCard {...pricingData.enterprise} />
        </div>
        
        <div className="text-center text-gray-500 flex items-center justify-center gap-2">
            <p>Secure payments powered by</p> <StripeIcon />
        </div>

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
}

const PricingCard: React.FC<PricingCardProps> = ({ name, price, description, features, cta, popular = false }) => (
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
        
        <button className={`w-full mt-8 font-semibold py-3 rounded-lg transition-colors ${
            popular ? 'bg-ai-blue text-white hover:opacity-90' : (cta === 'Your Current Plan' ? 'bg-slate-100 text-slate-500 cursor-not-allowed' : 'bg-slate-100 text-ai-blue hover:bg-slate-200')
        }`} disabled={cta === 'Your Current Plan'}>
            {cta}
        </button>
    </div>
);


export default PricingPage;

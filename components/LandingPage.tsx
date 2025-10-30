import React, { useState } from 'react';
import { View } from '../App';
import { 
    AILandingLogoIcon, 
    FacebookIcon, 
    LinkedInIcon, 
    TwitterIcon, 
    YouTubeIcon,
    SparklesIcon,
    AnalyticsIcon,
    ShieldCheckIcon,
    ClockIcon,
    BriefcaseIcon,
    UsersIcon,
    CheckIcon,
    ChevronDownIcon
} from './Icons';

interface LandingPageProps {
  setView: (view: View) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ setView }) => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Header setView={setView} />
      <main>
        <HeroSection setView={setView} />
        <TrustedBySection />
        <WhyChooseUsSection />
        <HowItWorksSection />
        <PricingSection setView={setView} />
        <TestimonialsSection />
        <FAQSection />
        <CTASection setView={setView} />
      </main>
      <Footer setView={setView} />
    </div>
  );
};

const Header: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
    return (
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
                    <button 
                        onClick={() => setView('login')}
                        className="bg-ai-blue text-white font-semibold px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </header>
    );
};


const HeroSection: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
    return (
        <section className="relative">
            <div className="absolute inset-0">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80" alt="Diverse team collaborating in a modern office" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-ai-blue/80"></div>
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center text-white">
                <h1 style={{animationDelay: '0.1s'}} className="text-4xl md:text-6xl font-extrabold leading-tight opacity-0 animate-fadeInUp">Hire Smarter, Not Harder.</h1>
                <p style={{animationDelay: '0.3s'}} className="mt-4 text-lg md:text-xl max-w-3xl mx-auto opacity-0 animate-fadeInUp text-blue-100/90">Our AI-powered platform automates interviews and provides deep candidate insights, helping you build a world-class team faster than ever.</p>
                <div style={{animationDelay: '0.5s'}} className="mt-10 flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-fadeInUp">
                    <button onClick={() => setView('login')} className="bg-white text-ai-blue font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition text-lg">
                        For Employers
                    </button>
                     <button onClick={() => setView('login')} className="bg-transparent border-2 border-white text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-white/10 transition text-lg">
                        For Candidates
                    </button>
                </div>
            </div>
        </section>
    );
};

const TrustedBySection: React.FC = () => {
    const logos = [
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Microsoft_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/ab/Salesforce_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/9/9f/Oracle_logo.svg"
    ];
    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-500 font-semibold uppercase tracking-wider">Trusted by the world's leading companies</p>
                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt={`Company logo ${index + 1}`} className="h-8 sm:h-10 opacity-60 grayscale" />
                    ))}
                </div>
            </div>
        </section>
    );
}

const WhyChooseUsSection: React.FC = () => {
    const features = [
        { icon: <SparklesIcon />, title: "AI-Powered Interviews", description: "Engage candidates with a consistent, professional, and unbiased AI interviewer, available 24/7." },
        { icon: <AnalyticsIcon />, title: "In-Depth Analysis", description: "Go beyond keywords. Get deep insights into candidate skills, communication, and problem-solving abilities." },
        { icon: <ShieldCheckIcon />, title: "Reduce Hiring Bias", description: "Standardized questions and objective evaluation help eliminate unconscious bias from your screening process." },
        { icon: <ClockIcon />, title: "Save Time & Money", description: "Automate first-round interviews and drastically reduce time-to-hire, freeing up your team for final-round candidates." },
        { icon: <BriefcaseIcon />, title: "Better Candidate Experience", description: "Provide a modern, flexible interview process that respects candidates' time and showcases your brand." },
        { icon: <UsersIcon />, title: "Improve Team Collaboration", description: "Share interview reports and candidate scorecards easily with your hiring team for faster decisions." },
    ];

    return (
        <section className="py-24 bg-gray-50 border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">The Future of Recruitment is Here</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                        AI HR Global is more than just a tool—it's your strategic partner in talent acquisition.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center">
                            <div className="inline-flex bg-ai-blue/10 text-ai-blue p-4 rounded-full">
                                {React.cloneElement(feature.icon, {className: "h-8 w-8"})}
                            </div>
                            <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
                            <p className="mt-2 text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowItWorksSection: React.FC = () => {
    const steps = [
        { num: '01', title: "Create Job & Define Criteria", description: "Quickly set up your job posting and specify the key skills and traits you're looking for." },
        { num: '02', title: "Invite Candidates at Scale", description: "Automatically send interview invitations to applicants via email or through your ATS." },
        { num: '03', title: "AI Conducts the Interview", description: "Candidates complete their structured interview with our friendly AI, anytime and anywhere." },
        { num: '04', title: "Review Reports & Hire", description: "Receive detailed, data-driven reports to identify top candidates and make confident hiring decisions." },
    ];
    
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Four Steps to Your Next Great Hire</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.num} className="p-8 bg-gray-50 rounded-xl border border-gray-200">
                            <h3 className="text-3xl font-bold text-ai-blue">{step.num}</h3>
                            <h4 className="mt-4 text-lg font-semibold h-12">{step.title}</h4>
                            <p className="mt-2 text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

const PricingSection: React.FC<{setView: (view: View) => void}> = ({setView}) => {
  const plans = [
    { name: "Free", price: "$0", features: ["1 Active Job", "5 AI Interviews/mo", "Basic Reporting"], popular: false },
    { name: "Premium", price: "$99", features: ["20 Active Jobs", "100 AI Interviews/mo", "Advanced Analytics", "ATS Integration"], popular: true },
    { name: "Enterprise", price: "Custom", features: ["Unlimited Jobs", "Unlimited Interviews", "Custom Branding", "Dedicated Support"], popular: false },
  ];

  return (
    <section className="py-24 bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Transparent Pricing for Every Team</h2>
            <p className="mt-4 text-lg text-gray-600">Choose a plan that scales with your hiring needs.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map(plan => (
            <div key={plan.name} className={`bg-white rounded-xl border-2 ${plan.popular ? 'border-ai-blue' : 'border-gray-200'} p-8 flex flex-col relative`}>
              {plan.popular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-ai-blue text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">MOST POPULAR</div>}
              <h3 className="text-lg font-semibold text-gray-500">{plan.name}</h3>
              <div className="mt-4"><span className="text-4xl font-bold text-gray-800">{plan.price}</span>{plan.price !== "Custom" && <span className="text-gray-500">/ mo</span>}</div>
              <ul className="space-y-4 mt-8 flex-1">
                  {plan.features.map(feature => <li key={feature} className="flex items-center"><CheckIcon className="w-5 h-5 text-green-500" /><span className="ml-3 text-gray-700">{feature}</span></li>)}
              </ul>
              <button onClick={() => setView('pricing')} className={`w-full mt-8 font-semibold py-3 rounded-lg transition-colors ${plan.popular ? 'bg-ai-blue text-white hover:opacity-90' : 'bg-gray-100 text-ai-blue hover:bg-gray-200'}`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Choose Plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            quote: "AI HR Global has transformed our hiring process. We're filling roles 50% faster, and the quality of candidates making it to the final round is significantly higher. The AI reports are incredibly insightful.",
            name: "Sarah Johnson",
            title: "HR Director, Tech Innovators Inc.",
            avatar: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            quote: "As a startup, we need to be efficient. This platform automates our initial screening, saving us countless hours. It's a game-changer for small HR teams.",
            name: "David Chen",
            title: "CEO, NextGen Solutions",
            avatar: "https://i.pravatar.cc/150?u=david"
        },
        {
            quote: "The consistency and fairness of the AI interviews have helped us improve our diversity metrics. We're now making more objective, data-driven hiring decisions.",
            name: "Maria Rodriguez",
            title: "Head of Talent, Global Enterprises",
            avatar: "https://i.pravatar.cc/150?u=maria"
        }
    ];
    return (
        <section className="py-24 bg-ai-blue text-white" style={{ backgroundImage: 'radial-gradient(circle at top right, rgba(0, 43, 91, 1) 0%, rgba(0, 20, 40, 1) 50%)' }}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold">Trusted by Leading HR Teams</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white/10 p-8 rounded-xl backdrop-blur-sm border border-white/20">
                            <p className="text-blue-100/90 italic">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-6">
                                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full border-2 border-cyan-400" />
                                <div className="ml-4">
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-cyan-300 text-sm">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQSection: React.FC = () => {
    const faqs = [
        { q: "How does the AI evaluate candidates?", a: "Our AI uses a multi-faceted approach, analyzing transcripts for key competencies, communication skills, and role-specific knowledge. It's trained on millions of data points to provide an objective and comprehensive assessment." },
        { q: "Is the platform compliant with privacy regulations like GDPR?", a: "Absolutely. We are fully compliant with GDPR, CCPA, and other major privacy regulations. Data security and candidate privacy are our top priorities." },
        { q: "Can we customize the interview questions?", a: "Yes! On our Premium and Enterprise plans, you can create custom question sets tailored to specific roles and your company culture to ensure you're assessing what matters most." },
        { q: "What integrations do you support?", a: "We offer seamless integrations with popular Applicant Tracking Systems (ATS) and HRIS platforms. Our Enterprise plan includes support for custom integrations as well." },
    ];
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
                </div>
            </div>
        </section>
    );
};

const FAQItem: React.FC<{question: string, answer: string}> = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-lg">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-left p-6">
                <span className="font-semibold text-lg">{question}</span>
                <ChevronDownIcon className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && <div className="px-6 pb-6 text-gray-600">{answer}</div>}
        </div>
    );
}

const CTASection: React.FC<{ setView: (view: View) => void }> = ({ setView }) => {
    return (
        <section className="bg-gray-50 border-t">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to Revolutionize Your Hiring?</h2>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Join hundreds of companies building better teams with AI HR Global. Get started today with a free trial.</p>
                <button onClick={() => setView('login')} className="mt-8 bg-ai-blue text-white font-bold px-8 py-4 rounded-lg shadow-lg hover:opacity-90 transition text-lg">
                    Sign Up for Free
                </button>
            </div>
        </section>
    );
};

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
    );
};


export default LandingPage;
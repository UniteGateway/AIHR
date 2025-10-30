import React from 'react';

export const EmployerRightPanel: React.FC = () => {
    const trendingNews = [
        { title: "The Future of AI in HR Tech", source: "TechCrunch" },
        { title: "5 Interview Questions to Ask Every Candidate", source: "HBR" },
        { title: "How to Reduce Hiring Bias with Technology", source: "Forbes" },
    ];

    const recentUpdates = [
        { text: "AI report for Alex Doe is ready for review.", time: "2m ago" },
        { text: "3 new candidates applied for the Frontend role.", time: "1h ago" },
        { text: "Your job posting for 'Product Manager' is expiring soon.", time: "1d ago" },
    ];

    return (
        <aside className="hidden lg:block w-80 bg-white dark:bg-gray-800 border-l border-slate-200 dark:border-gray-700 p-6 overflow-y-auto">
            <div className="space-y-8">
                {/* Ad Placeholder */}
                <div className="bg-gray-200 dark:bg-gray-700 h-40 rounded-2xl flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Ad Placeholder</span>
                </div>
                
                {/* YouTube Embed */}
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Featured Video</h3>
                    <iframe
                        className="w-full h-40 rounded-2xl"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Trending News */}
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Trending HR News</h3>
                    <div className="space-y-3">
                        {trendingNews.map(news => (
                             <a href="#" key={news.title} className="block hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-lg">
                                <p className="font-medium text-sm text-gray-700 dark:text-gray-200">{news.title}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{news.source}</p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Recent Updates */}
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Recent Updates</h3>
                    <div className="space-y-3">
                        {recentUpdates.map(update => (
                            <div key={update.text}>
                                <p className="text-sm text-gray-700 dark:text-gray-200">{update.text}</p>
                                <p className="text-xs text-gray-400 dark:text-gray-500">{update.time}</p>
                            </div>
                        ))}
                    </div>
                </div>

                 {/* Upgrade Plan */}
                 <div className="bg-gradient-to-r from-ai-blue to-blue-800 p-6 rounded-2xl text-white text-center">
                    <h4 className="font-bold">Unlock Your Full Potential</h4>
                    <p className="text-sm text-blue-200 mt-2">Upgrade to Premium for advanced analytics, ATS integrations, and more.</p>
                    <button className="mt-4 bg-white text-ai-blue font-semibold px-4 py-2 rounded-lg text-sm hover:bg-gray-200 transition">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </aside>
    );
};

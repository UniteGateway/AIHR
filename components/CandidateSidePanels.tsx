import React from 'react';

export const CandidateRightPanel: React.FC = () => {
    const recommendedJobs = [
        { title: "Senior UI/UX Designer", company: "Innovate Inc." },
        { title: "React Native Developer", company: "MobileFirst Co." },
        { title: "Full-Stack Engineer", company: "DataDriven Co." },
    ];
    
    return (
        <aside className="hidden lg:block w-80 bg-white dark:bg-gray-800 border-l border-slate-200 dark:border-gray-700 p-6 overflow-y-auto">
            <div className="space-y-8">
                {/* Company Ad Placeholder */}
                <div className="bg-gray-200 dark:bg-gray-700 p-6 rounded-2xl">
                    <h3 className="font-semibold text-gray-800 dark:text-white">Featured Company</h3>
                     <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Company Logo" className="h-8 my-4" />
                    <p className="text-sm text-gray-600 dark:text-gray-300">Google is hiring for multiple remote roles. Join a team that's changing the world.</p>
                    <button className="mt-4 bg-ai-blue text-white w-full text-sm font-semibold py-2 rounded-lg hover:opacity-90">View Jobs</button>
                </div>

                {/* YouTube Embed */}
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Interview Tips</h3>
                    <iframe
                        className="w-full h-40 rounded-2xl"
                        src="https://www.youtube.com/embed/GFsQ2g3cUhA"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                
                {/* Recommended Jobs */}
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Recommended Jobs</h3>
                    <div className="space-y-3">
                        {recommendedJobs.map(job => (
                             <a href="#" key={job.title} className="block hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg border border-transparent dark:hover:border-gray-600">
                                <p className="font-medium text-sm text-gray-700 dark:text-gray-200">{job.title}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">{job.company}</p>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Career Corner */}
                <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Career Corner</h3>
                     <a href="#" className="block hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-lg border border-transparent dark:hover:border-gray-600">
                        <p className="font-medium text-sm text-gray-700 dark:text-gray-200">How to Negotiate Your Salary</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Read Article</p>
                    </a>
                </div>
            </div>
        </aside>
    );
};

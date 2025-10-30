
import React from 'react';

interface ItemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  horizontal?: boolean;
}

export const ItemCard: React.FC<ItemCardProps> = ({ icon, title, description, horizontal = false }) => {
    if (horizontal) {
        return (
             <div className="flex items-start space-x-4 p-4 bg-slate-700/40 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 hover:border-slate-500 transition-all duration-300">
                <div className="flex-shrink-0 text-cyan-400 mt-1">
                    {icon}
                </div>
                <div>
                    <h3 className="font-semibold text-slate-100">{title}</h3>
                    <p className="text-sm text-slate-400">{description}</p>
                </div>
            </div>
        )
    }

  return (
    <div className="flex flex-col items-center text-center p-6 bg-slate-700/40 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 hover:border-slate-500 transition-all duration-300 transform hover:-translate-y-1">
      <div className="mb-4 text-cyan-400">
        {icon}
      </div>
      <h3 className="font-semibold text-slate-100 mb-2">{title}</h3>
      <p className="text-sm text-slate-400">{description}</p>
    </div>
  );
};
   
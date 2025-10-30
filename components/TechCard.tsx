
import React from 'react';

interface TechCardProps {
  icon: React.ReactNode;
  name: string;
  category: string;
}

export const TechCard: React.FC<TechCardProps> = ({ icon, name, category }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-4 bg-slate-700/40 rounded-lg border border-slate-600/50 hover:bg-slate-700/70 hover:border-cyan-500/50 transition-all duration-300 h-full">
      <div className="mb-3">
        {icon}
      </div>
      <h4 className="font-semibold text-sm text-slate-100">{name}</h4>
      <p className="text-xs text-cyan-400/80">{category}</p>
    </div>
  );
};
   
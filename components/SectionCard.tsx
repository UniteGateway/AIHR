
import React from 'react';

interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({ title, children }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg p-6 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-cyan-300 mb-6 border-b border-slate-700 pb-3">{title}</h2>
      <div>{children}</div>
    </div>
  );
};
   
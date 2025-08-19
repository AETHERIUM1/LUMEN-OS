import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="p-4 flex justify-between items-center bg-black/20 border-b border-gray-500/30">
      <div className="flex items-center gap-3">
        <div className="w-4 h-4 rounded-full bg-amber-300 animate-pulse"></div>
        <h1 className="text-xl font-bold tracking-widest text-gray-200">LUMEN OS</h1>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <span className="text-green-400">●</span>
        <span>System Nominal</span>
      </div>
    </header>
  );
};
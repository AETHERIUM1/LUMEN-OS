import React from 'react';
import type { DesktopApp } from '../types';

interface DesktopIconProps {
  app: DesktopApp;
  onDoubleClick: () => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({ app, onDoubleClick }) => {
  return (
    <button 
      onDoubleClick={onDoubleClick} 
      className="flex flex-col items-center justify-center w-24 h-24 p-2 rounded-md hover:bg-white/10 focus:bg-white/20 focus:outline-none transition-colors"
      title={`Double-click to open ${app.title}`}
    >
      <div className="h-8 w-8 mb-1 text-gray-200">
        {app.icon}
      </div>
      <p className="text-xs text-center text-gray-200 font-medium select-none break-words">
        {app.title}
      </p>
    </button>
  );
};

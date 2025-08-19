import React, { useState, useEffect, useRef } from 'react';
import type { WindowState } from '../types';
import { DESKTOP_APPS } from '../constants';
import { StartMenu } from './StartMenu';

interface TaskbarProps {
  openWindows: WindowState[];
  onTaskbarClick: (id: string) => void;
  onOpenApp: (id: string) => void;
}

export const Taskbar: React.FC<TaskbarProps> = ({ openWindows, onTaskbarClick, onOpenApp }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <footer ref={menuRef} className="h-12 bg-black/40 backdrop-blur-lg border-t border-gray-500/30 flex items-center justify-between px-2 relative z-[10000]">
       {isMenuOpen && <StartMenu onOpenApp={(id) => {onOpenApp(id); setIsMenuOpen(false); }} />}
      <div className="flex items-center gap-2">
        <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-9 w-9 flex items-center justify-center rounded-md transition-colors ${isMenuOpen ? 'bg-amber-400/80' : 'hover:bg-gray-700/50'}`}
            aria-label="Start Menu"
        >
            <div className="w-4 h-4 rounded-full bg-amber-300"></div>
        </button>

        {openWindows.map(win => (
          <button
            key={win.id}
            onClick={() => onTaskbarClick(win.id)}
            className="h-9 px-3 flex items-center gap-2 bg-gray-500/30 hover:bg-gray-500/50 rounded-md text-gray-300 text-xs"
            title={win.title}
          >
            <span className="h-4 w-4">{win.icon}</span>
            <span className="hidden sm:inline">{win.title}</span>
          </button>
        ))}
      </div>
      <div className="text-xs text-gray-300 text-right px-2">
        <div>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
        <div>{currentTime.toLocaleDateString([], { year: 'numeric', month: '2-digit', day: '2-digit' })}</div>
      </div>
    </footer>
  );
};

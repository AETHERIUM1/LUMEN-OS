import React from 'react';
import { DESKTOP_APPS } from '../constants';

interface StartMenuProps {
  onOpenApp: (id: string) => void;
}

export const StartMenu: React.FC<StartMenuProps> = ({ onOpenApp }) => {
    const apps = DESKTOP_APPS.filter(app => !app.isWidget);
    const widgets = DESKTOP_APPS.filter(app => app.isWidget);

    return (
        <div className="absolute bottom-full mb-2 w-80 h-96 bg-gray-900/70 backdrop-blur-xl border border-gray-500/30 rounded-lg shadow-2xl flex flex-col overflow-hidden">
            <div className="p-4">
                <input 
                    type="text"
                    placeholder="Search apps & files..."
                    className="w-full bg-gray-800/50 border border-gray-600 rounded-md px-3 py-1.5 text-sm placeholder-gray-400 focus:outline-none focus:border-amber-400"
                />
            </div>
            <div className="flex-grow overflow-y-auto px-2 pb-2">
                <h3 className="px-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Applications</h3>
                {apps.map(app => (
                    <button 
                        key={app.id} 
                        onClick={() => onOpenApp(app.id)}
                        className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-amber-400/20 text-left"
                    >
                        <span className="h-6 w-6">{app.icon}</span>
                        <span className="text-sm">{app.title}</span>
                    </button>
                ))}
                 <h3 className="px-2 mt-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Widgets</h3>
                {widgets.map(app => (
                    <button 
                        key={app.id} 
                        onClick={() => onOpenApp(app.id)}
                        className="w-full flex items-center gap-3 p-2 rounded-md hover:bg-amber-400/20 text-left"
                    >
                        <span className="h-5 w-5">{app.icon}</span>
                        <span className="text-sm">{app.title}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

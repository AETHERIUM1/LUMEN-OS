import React, { useState, useEffect, useCallback } from 'react';
import { getAIResponseStream, generateWallpaper } from './services/geminiService';
import { DESKTOP_APPS, ICONS } from './constants';
import type { WindowState, DesktopApp } from './types';

import { Window } from './components/Window';
import { Taskbar } from './components/Taskbar';
import { DesktopIcon } from './components/DesktopIcon';
import { CommandCenter } from './components/CommandCenter';
import { ResponseDisplay } from './components/ResponseDisplay';
import { Widget } from './components/Widget';
import { SystemMonitor } from './components/SystemMonitor';

const App: React.FC = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [nextZIndex, setNextZIndex] = useState(10);
  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGeneratingWallpaper, setIsGeneratingWallpaper] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string>('');
  const [wallpaperUrl, setWallpaperUrl] = useState<string>('https://picsum.photos/seed/lumenos/1920/1080');
  const [currentCommand, setCurrentCommand] = useState<string>('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  
  // Open default windows on load
  useEffect(() => {
    const commandCenterApp = DESKTOP_APPS.find(app => app.id === 'command_center');
    const nexusMonitorApp = DESKTOP_APPS.find(app => app.id === 'system_monitor');
    if (commandCenterApp) openWindow(commandCenterApp, { x: 100, y: 50 });
    if (nexusMonitorApp) openWindow(nexusMonitorApp, { x: 850, y: 50 });
  }, []);

  const focusWindow = (id: string) => {
    if (windows.find(w => w.id === id)?.zIndex === nextZIndex - 1) return;
    setWindows(
      windows.map(w =>
        w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w
      )
    );
    setNextZIndex(prev => prev + 1);
  };

  const openWindow = (app: DesktopApp, position?: {x: number, y: number}) => {
    const existingWindow = windows.find(w => w.id === app.id);
    if (existingWindow) {
      focusWindow(app.id);
      return;
    }

    const newWindow: WindowState = {
      ...app,
      position: position || {
        x: Math.random() * (window.innerWidth - (typeof app.defaultSize?.width === 'number' ? app.defaultSize.width : 400) - 100) + 50,
        y: Math.random() * (window.innerHeight - (typeof app.defaultSize?.height === 'number' ? app.defaultSize.height : 300) - 200) + 50,
      },
      zIndex: nextZIndex,
      isMinimized: false,
    };
    setWindows(prev => [...prev, newWindow]);
    setNextZIndex(prev => prev + 1);
  };

  const closeWindow = (id: string) => {
    setWindows(windows.filter(w => w.id !== id));
  };
  
  const toggleMinimize = (id: string) => {
      setWindows(windows.map(w => w.id === id ? {...w, isMinimized: !w.isMinimized} : w));
  }

  const updateWindowPosition = (id: string, newPosition: { x: number; y: number }) => {
    setWindows(
      windows.map(w =>
        w.id === id ? { ...w, position: newPosition } : w
      )
    );
  };

  const handleCommandSubmit = async (command: string) => {
    setIsLoading(true);
    setAiResponse('');
    setCurrentCommand(command);
    setCommandHistory(prev => [command, ...prev]);
    
    focusWindow('command_center');

    if (command.toLowerCase().includes('wallpaper') || command.toLowerCase().includes('canvas')) {
      await handleWallpaperGeneration(command);
    } else {
      await handleTextGeneration(command);
    }
    
    setIsLoading(false);
  };
  
  const handleTextGeneration = async (command: string) => {
    try {
      const stream = await getAIResponseStream(command);
      for await (const chunk of stream) {
        setAiResponse(prev => prev + chunk);
      }
    } catch (error) {
      console.error('Error streaming AI response:', error);
      setAiResponse(`// ERROR: NEXUS failed to process the task. Please check system integrity.`);
    }
  };
  
  const handleWallpaperGeneration = async (command: string) => {
    setIsGeneratingWallpaper(true);
    setAiResponse(`// Weaving a new ambient canvas...\n// Task received: ${command}\n// This may take a moment...`);
    try {
      const imageUrl = await generateWallpaper(command);
      setWallpaperUrl(imageUrl);
      setAiResponse(prev => prev + '\n// SUCCESS: New ambient canvas has been rendered.');
    } catch (error) {
      console.error('Error generating wallpaper:', error);
      setAiResponse(prev => prev + `\n// ERROR: Failed to render canvas. Reverting to fallback.`);
    } finally {
      setIsGeneratingWallpaper(false);
    }
  };
  
  const renderWindowContent = (app: DesktopApp) => {
    switch(app.id) {
        case 'command_center':
            return (
                <div className="flex flex-col h-full bg-black/30">
                    <div className="flex-grow min-h-0">
                      <ResponseDisplay 
                          response={aiResponse} 
                          isLoading={isLoading && !isGeneratingWallpaper} 
                          currentCommand={currentCommand}
                      />
                    </div>
                    <CommandCenter onSubmit={handleCommandSubmit} isLoading={isLoading} />
                </div>
            )
        case 'task_history':
             return (
                 <Widget title="" icon={null}>
                    <ul className="text-sm text-gray-400 space-y-1 h-full overflow-y-auto">
                        {commandHistory.length > 0 ? commandHistory.map((cmd, index) => (
                        <li key={index} className="truncate">
                            <span className="text-amber-300 mr-2">&gt;</span>{cmd}
                        </li>
                        )) : (
                        <li>No tasks executed yet.</li>
                        )}
                    </ul>
                 </Widget>
            );
        case 'system_integrity':
            return <SystemMonitor isCpuRamOnly={true} />;
        default:
            return app.component;
    }
  }


  return (
    <div 
      className="h-screen w-screen bg-cover bg-center bg-no-repeat text-gray-200 transition-all duration-1000 overflow-hidden" 
      style={{ backgroundImage: `url(${wallpaperUrl})` }}
    >
      <div className="h-full w-full bg-indigo-950/60 backdrop-blur-md flex flex-col">
        {/* Desktop Area */}
        <main className="flex-grow p-4 relative">
            {/* Desktop Icons */}
            <div className="flex flex-col items-start gap-4">
                {DESKTOP_APPS.filter(app => !app.isWidget && app.id !== 'command_center').map(app => (
                    <DesktopIcon key={app.id} app={app} onDoubleClick={() => openWindow(app)} />
                ))}
                <DesktopIcon key="system_integrity" app={DESKTOP_APPS.find(a => a.id === 'system_integrity')!} onDoubleClick={() => openWindow(DESKTOP_APPS.find(a => a.id === 'system_integrity')!)} />

            </div>

            {/* Windows */}
            {windows.map(win => (
                <Window
                    key={win.id}
                    id={win.id}
                    title={win.title}
                    icon={win.icon}
                    position={win.position}
                    zIndex={win.zIndex}
                    size={win.defaultSize}
                    isMinimized={win.isMinimized}
                    onClose={() => closeWindow(win.id)}
                    onFocus={() => focusWindow(win.id)}
                    onMinimize={() => toggleMinimize(win.id)}
                    onPositionChange={(pos) => updateWindowPosition(win.id, pos)}
                >
                    {renderWindowContent(win)}
                </Window>
            ))}
        </main>
        
        <Taskbar 
            openWindows={windows} 
            onTaskbarClick={(id) => {
              if (windows.find(w=>w.id === id)?.isMinimized) {
                focusWindow(id);
              } else if (windows.find(w=>w.id === id)?.zIndex === nextZIndex - 1) {
                toggleMinimize(id)
              } else {
                 focusWindow(id);
              }
            }} 
            onOpenApp={(id) => openWindow(DESKTOP_APPS.find(app => app.id === id)!)}
        />
      </div>
    </div>
  );
};

export default App;

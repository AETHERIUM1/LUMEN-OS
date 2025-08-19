import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { CommandCenter } from './components/CommandCenter';
import { ResponseDisplay } from './components/ResponseDisplay';
import { ArchitectureCard } from './components/ArchitectureCard';
import { Widget } from './components/Widget';
import { getAIResponseStream, generateWallpaper } from './services/geminiService';
import { LUMEN_OS_PRINCIPLES, ICONS, NEXUS_DIRECTIVES, PREDEFINED_INSIGHTS } from './constants';
import type { ArchitecturePillar } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGeneratingWallpaper, setIsGeneratingWallpaper] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string>('');
  const [wallpaperUrl, setWallpaperUrl] = useState<string>('https://picsum.photos/seed/lumenos/1920/1080');
  const [userInsight, setUserInsight] = useState<string>('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  
  useEffect(() => {
    // To prevent API rate-limiting on load, we now cycle through predefined insights.
    const randomIndex = Math.floor(Math.random() * PREDEFINED_INSIGHTS.length);
    setUserInsight(PREDEFINED_INSIGHTS[randomIndex]);
  }, []);

  const handleCommandSubmit = async (command: string) => {
    setIsLoading(true);
    setAiResponse('');
    setCurrentCommand(command);
    setCommandHistory(prev => [...prev, command]);
    
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

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat text-gray-200 transition-all duration-1000" 
      style={{ backgroundImage: `url(${wallpaperUrl})` }}
    >
      <div className="min-h-screen bg-indigo-950/60 backdrop-blur-md">
        <Header />
        <main className="p-4 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Content Area */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              <CommandCenter onSubmit={handleCommandSubmit} isLoading={isLoading} />
              <ResponseDisplay 
                response={aiResponse} 
                isLoading={isLoading && !isGeneratingWallpaper} 
                currentCommand={currentCommand}
              />
            </div>
            
            {/* Sidebar / Widgets */}
            <div className="lg:col-span-4 flex flex-col gap-6">
               <Widget title="NEXUS Monitor" icon={ICONS.nexus_widget}>
                  <p className="text-sm text-gray-400 mb-2">
                    {userInsight || "Monitoring workflows for optimization..."}
                  </p>
                  <div className="w-full bg-amber-900/50 rounded-full h-2.5">
                      <div className="bg-amber-400 h-2.5 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-right">Automation Efficiency: 75%</p>
               </Widget>
               <Widget title="NEXUS Directives" icon={ICONS.directives}>
                  <ul className="text-sm text-gray-400 space-y-2 max-h-40 overflow-y-auto">
                    {NEXUS_DIRECTIVES.map((directive, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-amber-300 mr-2 mt-1 flex-shrink-0">&#10148;</span>
                        <span>{directive}</span>
                      </li>
                    ))}
                  </ul>
               </Widget>
               <Widget title="Task History" icon={ICONS.history}>
                  <ul className="text-sm text-gray-400 space-y-1 max-h-40 overflow-y-auto">
                    {commandHistory.length > 0 ? commandHistory.slice(-5).reverse().map((cmd, index) => (
                      <li key={index} className="truncate">
                        <span className="text-amber-300 mr-2">&gt;</span>{cmd}
                      </li>
                    )) : (
                      <li>No tasks executed yet.</li>
                    )}
                  </ul>
               </Widget>
               <Widget title="Integrated Environments" icon={ICONS.integrations}>
                  <ul className="text-sm text-gray-400 space-y-3">
                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-orange-400">{ICONS.brave}</span>
                        <span>Brave Browser</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-green-400">●</span>
                        <span>Connected</span>
                      </div>
                    </li>
                    <li className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-blue-400">{ICONS.chrome}</span>
                        <span>Chrome Browser</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-green-400">●</span>
                        <span>Connected</span>
                      </div>
                    </li>
                  </ul>
               </Widget>
            </div>
          </div>
          
          {/* Architecture Pillars */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-300 tracking-wider">LUMEN OS Architecture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {LUMEN_OS_PRINCIPLES.map((pillar: ArchitecturePillar) => (
                <ArchitectureCard key={pillar.title} pillar={pillar} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
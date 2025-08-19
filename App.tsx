import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { CommandCenter } from './components/CommandCenter';
import { ResponseDisplay } from './components/ResponseDisplay';
import { ArchitectureCard } from './components/ArchitectureCard';
import { Widget } from './components/Widget';
import { getAIResponseStream, generateWallpaper } from './services/geminiService';
import { LUMENOS_PRINCIPLES, ICONS } from './constants';
import type { ArchitecturePillar } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGeneratingWallpaper, setIsGeneratingWallpaper] = useState<boolean>(false);
  const [aiResponse, setAiResponse] = useState<string>('');
  const [wallpaperUrl, setWallpaperUrl] = useState<string>('https://picsum.photos/seed/lumenos/1920/1080');
  const [userInsight, setUserInsight] = useState<string>('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState<string>('');
  
  const fetchInitialInsight = useCallback(async () => {
    setIsLoading(true);
    setAiResponse('');
    const prompt = `Generate a single, gentle 'Nexus Core Suggestion' for the LumenOS dashboard. This should be a proactive nudge based on hypothetical user thought patterns. For example: 'The concept of 'ephemerality' appears in your recent notes. Perhaps you'd like to explore its connection to your poetry stream?' or 'A tranquil state has been detected. Suggesting an ambient canvas of a 'Silent Forest' to deepen focus.'`;
    
    let fullResponse = '';
    try {
      const stream = await getAIResponseStream(prompt, 'You are the proactive assistant of LumenOS.');
      for await (const chunk of stream) {
        fullResponse += chunk;
      }
      setUserInsight(fullResponse);
    } catch (error) {
      console.error('Failed to fetch initial insight:', error);
      setUserInsight('Error fetching AI insight. The Weave may be unstable.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInitialInsight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setAiResponse(`// ERROR: The Nexus Core failed to process the echo. Please check the Weave's integrity.`);
    }
  };
  
  const handleWallpaperGeneration = async (command: string) => {
    setIsGeneratingWallpaper(true);
    setAiResponse(`// Weaving a new ambient canvas...\n// Echo received: ${command}\n// This may take a moment...`);
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
               <Widget title="Nexus Core Monitor" icon={ICONS.nexus_widget}>
                  <p className="text-sm text-gray-400 mb-2">
                    {userInsight || "Gleaning insights from the Weave..."}
                  </p>
                  <div className="w-full bg-amber-900/50 rounded-full h-2.5">
                      <div className="bg-amber-400 h-2.5 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 text-right">Cognitive Load: 60%</p>
               </Widget>
               <Widget title="Echo History" icon={ICONS.history}>
                  <ul className="text-sm text-gray-400 space-y-1 max-h-40 overflow-y-auto">
                    {commandHistory.length > 0 ? commandHistory.slice(-5).reverse().map((cmd, index) => (
                      <li key={index} className="truncate">
                        <span className="text-amber-300 mr-2">~</span>{cmd}
                      </li>
                    )) : (
                      <li>No echos sent yet.</li>
                    )}
                  </ul>
               </Widget>
            </div>
          </div>
          
          {/* Architecture Pillars */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-300 tracking-wider">LumenOS Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {LUMENOS_PRINCIPLES.map((pillar: ArchitecturePillar) => (
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
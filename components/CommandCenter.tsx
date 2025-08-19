import React, { useState } from 'react';

interface CommandCenterProps {
  onSubmit: (command: string) => void;
  isLoading: boolean;
}

const commandSuggestions = [
  "Weave a new space for poetry",
  "Show connections for 'biomorphic design'",
  "Generate canvas: tranquil night",
  "Synthesize recent thoughts on philosophy",
];

export const CommandCenter: React.FC<CommandCenterProps> = ({ onSubmit, isLoading }) => {
  const [command, setCommand] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim() && !isLoading) {
      onSubmit(command.trim());
      setCommand('');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCommand(suggestion);
  };

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-500/30 rounded-lg p-4 shadow-2xl">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center gap-4">
          <span className="text-amber-300 font-mono text-lg animate-pulse">~</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="Whisper your intent to the Weave..."
            className="w-full bg-transparent focus:outline-none text-gray-200 placeholder-gray-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-amber-400 text-black font-semibold rounded-md hover:bg-amber-300 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? 'Weaving...' : 'Echo'}
          </button>
        </div>
      </form>
      <div className="mt-3 flex flex-wrap gap-2">
        {commandSuggestions.map(suggestion => (
            <button 
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className="text-xs bg-gray-700/50 hover:bg-gray-600/70 text-gray-400 px-2 py-1 rounded-md transition-colors"
            >
              {suggestion}
            </button>
        ))}
      </div>
    </div>
  );
};
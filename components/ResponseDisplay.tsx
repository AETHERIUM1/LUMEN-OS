import React, { useEffect, useRef } from 'react';

interface ResponseDisplayProps {
  response: string;
  isLoading: boolean;
  currentCommand: string;
}

export const ResponseDisplay: React.FC<ResponseDisplayProps> = ({ response, isLoading, currentCommand }) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [response]);

  const hasResponse = response.trim().length > 0;

  return (
    <div className="h-full bg-gray-900/70 backdrop-blur-sm font-mono text-sm text-gray-300 overflow-y-auto p-4">
      {currentCommand && (
        <div className="mb-4">
          <span className="text-amber-300">&gt; </span>
          <span className="text-gray-200">{currentCommand}</span>
        </div>
      )}
      {hasResponse && (
        <div className="whitespace-pre-wrap">
          <span className="text-green-400">NEXUS: </span>
          {response}
          {isLoading && <span className="inline-block w-2 h-4 bg-amber-300 animate-pulse ml-1" />}
        </div>
      )}
      {!hasResponse && !isLoading && (
        <div className="text-gray-500">
          <p>// NEXUS is ready.</p>
          <p>// Awaiting task.</p>
        </div>
      )}
      <div ref={endOfMessagesRef} />
    </div>
  );
};
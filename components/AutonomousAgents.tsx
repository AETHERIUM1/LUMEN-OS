import React from 'react';
import { AUTONOMOUS_AGENTS } from '../constants';

export const AutonomousAgents: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-300 tracking-wider">Autonomous Cloud Employees</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {AUTONOMOUS_AGENTS.map((agent) => (
          <div 
            key={agent.title}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-500/30 rounded-lg p-4 shadow-xl hover:bg-gray-800/60 hover:border-amber-300/50 transition-all duration-300 flex flex-col items-start"
          >
            <div className="flex items-center mb-3 w-full">
              <span className="text-amber-300 mr-4">{agent.icon}</span>
              <h3 className="font-semibold text-md text-gray-200 flex-grow">{agent.title}</h3>
            </div>
            <p className="text-sm text-gray-400 flex-grow">{agent.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
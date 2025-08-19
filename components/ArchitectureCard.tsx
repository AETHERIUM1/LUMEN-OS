import React from 'react';
import type { ArchitecturePillar } from '../types';

interface ArchitectureCardProps {
  pillar: ArchitecturePillar;
}

export const ArchitectureCard: React.FC<ArchitectureCardProps> = ({ pillar }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-500/30 rounded-lg p-4 shadow-xl hover:bg-gray-800/60 hover:border-amber-300/50 transition-all duration-300 flex flex-col">
      <div className="flex items-center mb-3">
        <span className="text-amber-300 mr-3">{pillar.icon}</span>
        <h3 className="font-semibold text-lg text-gray-200">{pillar.title}</h3>
      </div>
      <p className="text-sm text-gray-400 mb-4 flex-grow">{pillar.description}</p>
      <div>
        <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Key Features</h4>
        <ul className="space-y-1">
          {pillar.keyFeatures.map((feature) => (
            <li key={feature} className="flex items-center text-sm text-gray-300">
              <svg className="w-3 h-3 text-amber-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
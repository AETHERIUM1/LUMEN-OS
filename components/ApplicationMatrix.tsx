import React from 'react';
import { APPLICATION_MATRIX } from '../constants';

export const ApplicationMatrix: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-300 tracking-wider">Core Application Suite</h2>
      <div className="space-y-6">
        {APPLICATION_MATRIX.map((category) => (
          <div key={category.title}>
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">{category.title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
              {category.apps.map((app) => (
                <div 
                  key={app.name} 
                  className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-500/30 rounded-lg p-4 text-center hover:bg-gray-800/60 hover:border-amber-300/50 transition-all duration-300 flex flex-col items-center justify-center aspect-square"
                >
                  <div className="text-gray-300 h-8 w-8 mb-2 flex items-center justify-center">
                    {app.icon}
                  </div>
                  <p className="text-xs text-gray-400">{app.name}</p>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 w-64 p-3 bg-gray-950/80 backdrop-blur-md border border-gray-500/50 rounded-lg text-left opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 pointer-events-none z-10">
                    <h4 className="font-bold text-amber-300 text-xs mb-1 tracking-wider uppercase">NEXUS Synergy</h4>
                    <p className="text-xs text-gray-300 font-sans">{app.synergy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

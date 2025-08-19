
import React from 'react';

interface WidgetProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const Widget: React.FC<WidgetProps> = ({ title, icon, children }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-500/30 rounded-lg p-4 shadow-2xl">
      <div className="flex items-center gap-2 mb-3 text-gray-400">
        {icon}
        <h3 className="font-semibold text-sm uppercase tracking-wider">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import { Widget } from './Widget';
import { ICONS } from '../constants';

interface SystemMonitorProps {
    insights?: string[];
    isCpuRamOnly?: boolean;
}

const StatBar: React.FC<{ label: string; value: number; color: string }> = ({ label, value, color }) => (
    <div>
        <div className="flex justify-between items-center text-xs mb-1">
            <span className="font-semibold text-gray-400">{label}</span>
            <span className={`font-mono text-${color}-300`}>{value.toFixed(1)}%</span>
        </div>
        <div className={`w-full bg-${color}-900/50 rounded-full h-2`}>
            <div className={`bg-${color}-400 h-2 rounded-full transition-all duration-500`} style={{ width: `${value}%` }}></div>
        </div>
    </div>
);

export const SystemMonitor: React.FC<SystemMonitorProps> = ({ insights, isCpuRamOnly = false }) => {
  const [insight, setInsight] = useState('');
  const [cpuUsage, setCpuUsage] = useState(30);
  const [ramUsage, setRamUsage] = useState(55);

  useEffect(() => {
     if(insights && insights.length > 0) {
        const randomIndex = Math.floor(Math.random() * insights.length);
        setInsight(insights[randomIndex]);
     }
  }, [insights]);

  useEffect(() => {
      const interval = setInterval(() => {
          setCpuUsage(prev => Math.max(10, Math.min(90, prev + (Math.random() - 0.5) * 10)));
          setRamUsage(prev => Math.max(30, Math.min(95, prev + (Math.random() - 0.5) * 5)));
      }, 1500);
      return () => clearInterval(interval);
  }, []);

  if (isCpuRamOnly) {
      return (
        <Widget title="" icon={null}>
             <div className="space-y-4">
                <StatBar label="CPU Utilization" value={cpuUsage} color="sky" />
                <StatBar label="Memory Allocation" value={ramUsage} color="fuchsia" />
            </div>
        </Widget>
      )
  }

  return (
    <Widget title="" icon={null}>
      <p className="text-sm text-gray-400 mb-4">
        {insight || "Monitoring workflows for optimization..."}
      </p>
      <div className="w-full bg-amber-900/50 rounded-full h-2.5">
        <div className="bg-amber-400 h-2.5 rounded-full" style={{ width: '75%' }}></div>
      </div>
      <p className="text-xs text-gray-500 mt-1 text-right">Automation Efficiency: 75%</p>
    </Widget>
  );
};

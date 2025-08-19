import React from 'react';
import type { ArchitecturePillar, DesktopApp } from './types';
import { ApplicationMatrix } from './components/ApplicationMatrix';
import { AutonomousAgents } from './components/AutonomousAgents';
import { Widget } from './components/Widget';
import { SystemMonitor } from './components/SystemMonitor';

export const ICONS = {
  core: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l9-5.25" /></svg>,
  shell: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>,
  engine: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v-1.5m0 15v1.5m3.75-18v1.5m0 15v-1.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 100-12 6 6 0 000 12z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>,
  security: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.016h-.008v-.016z" /></svg>,
  nexus_widget: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.5 14h.01M12.5 17h.01M10 14h.01M7 17h.01M5 14h.01M8.5 11h.01M12.5 11h.01M15.5 11h.01M18.5 14h.01" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>,
  history: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  directives: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
  integrations: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>,
  brave: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25c.59 0 1.13.09 1.63.25l7.39 3.65c.3.15.58.38.79.67.21.29.34.64.34 1.01v6.24c0 .37-.13.72-.34 1.01-.21.29-.49.52-.79.67l-7.39 3.65a3.42 3.42 0 0 1-1.63.41c-.59 0-1.13-.09-1.63-.25L2.98 15.2c-.3-.15-.58-.38-.79-.67a2.08 2.08 0 0 1-.34-1.01V7.28c0-.37.13-.72.34-1.01.21-.29.49.52.79-.67L10.37 2.5a3.42 3.42 0 0 1 1.63-.25zM12 4.5l-7.5 4.5v6l7.5 4.5 7.5-4.5v-6L12 4.5zm0 1.5l6.09 3.65-6.09 3.65-6.09-3.65L12 6zm0 9l-4.5-2.25v-1.5L12 13.5l4.5-2.25v1.5L12 15z"/></svg>,
  chrome: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 21a9 9 0 110-18 9 9 0 010 18z"/><path d="M12 15a3 3 0 110-6 3 3 0 010 6z"/><path d="M21 12h-3M6 12H3M12 6V3M12 21v-3"/></svg>,
  vscode: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor"><path d="M23.15 2.587L18.44 0l-3.308 3.028 4.71 2.587zm-22.3 9.413l4.71 2.587L.85 17.613 5.56 20.2l-4.71 2.587V12zM3.4 4.34l9.113 5.022v4.545L3.4 9.387zm17.2 5.045v4.545l-9.113 4.523V13.93z"/></svg>,
  nextcloud: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor"><path d="M12 1.5A10.5 10.5 0 001.5 12A10.5 10.5 0 0012 22.5A10.5 10.5 0 0022.5 12A10.5 10.5 0 0012 1.5zm0 3a7.5 7.5 0 017.5 7.5 7.5 7.5 0 01-7.5 7.5 7.5 7.5 0 01-7.5-7.5 7.5 7.5 0 017.5-7.5zm-3.11 3a1.88 1.88 0 100 3.75 1.88 1.88 0 000-3.75zm3.11 1.5a1.88 1.88 0 100 3.75 1.88 1.88 0 000-3.75zm3.12 1.5a1.88 1.88 0 100 3.75 1.88 1.88 0 000-3.75z"/></svg>,
  system_monitor: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  app_matrix: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>,
  cloud_employees: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  architecture: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>,
};

export const NEXUS_DIRECTIVES: string[] = [
  'Prototype Dynamic Kernel Weave',
  'Evolve predictive algorithms',
  'Generate new canvas topographies',
  'Implement self-healing protocols',
  'Harmonize resonant feedback',
];

export const PREDEFINED_INSIGHTS: string[] = [
  "Analysis of recent Flow Streams indicates a repetitive data entry task. I can architect a visual workflow to automate this.",
  "Multiple containerized applications are awaiting deployment. Shall I orchestrate a staggered rollout to optimize resource allocation?",
  "The Memory Weave contains several untagged visual assets. I can initiate an AI-powered process to apply relevant Lumina Tags.",
  "System monitoring shows suboptimal performance in the shell's rendering loop. I can initiate a self-architecting cycle to harmonize it.",
  "A new security advisory has been issued that may affect our core kernel. I can run a simulation to assess the threat vector.",
];

export const AUTONOMOUS_AGENTS = [
    {
        title: 'Procurement Agent',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
        description: 'Monitors inventory, analyzes usage patterns, and autonomously orders supplies from pre-approved vendors to maintain optimal stock levels.',
    },
    {
        title: 'HR Onboarding Assistant',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-4 0h4" /></svg>,
        description: 'Manages new employee setup, from provisioning accounts and hardware to scheduling orientation sessions, ensuring a smooth day-one experience.',
    },
    {
        title: 'Social Media Curator',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
        description: 'Generates and schedules engaging content across multiple platforms, analyzes engagement metrics, and adapts strategy to grow online presence.',
    },
    {
        title: 'Financial Reconciliation',
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
        description: 'Cross-references invoices, bank statements, and expense reports to identify discrepancies and automate the financial closing process.',
    },
];

export const APPLICATION_MATRIX = [
    {
        title: 'Productivity Suite',
        apps: [
            { name: 'VS Code', icon: React.cloneElement(ICONS.vscode, {className: "h-8 w-8"}), synergy: 'NEXUS can write, refactor, and deploy code directly from the editor.' },
            { name: 'Nextcloud', icon: React.cloneElement(ICONS.nextcloud, {className: "h-8 w-8"}), synergy: 'Automated file organization, sharing, and backup based on project context.' },
            { name: 'Brave', icon: React.cloneElement(ICONS.brave, {className: "h-8 w-8"}), synergy: 'Intelligent web scraping and data extraction for research and analysis tasks.' },
            { name: 'Chrome', icon: React.cloneElement(ICONS.chrome, {className: "h-8 w-8"}), synergy: 'Automates browser-based tasks for any web application.' },
        ]
    },
    {
        title: 'Communication',
        apps: [
            { name: 'Slack', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor"><path d="M5.04 15.12c0-1.44 1.2-2.64 2.64-2.64h2.16v-2.16c0-1.44-1.2-2.64-2.64-2.64S5.04 8.88 5.04 10.32H2.4c0-2.88 2.4-5.28 5.28-5.28s5.28 2.4 5.28 5.28v2.16h2.16c1.44 0 2.64 1.2 2.64 2.64s-1.2 2.64-2.64 2.64H10.32v2.16c0 1.44 1.2 2.64 2.64 2.64s2.64-1.2 2.64-2.64h2.64c0 2.88-2.4 5.28-5.28 5.28S7.68 20.88 7.68 18v-2.16H5.04z"/></svg>, synergy: 'Monitors channels for keywords and automates responses or creates tasks.' },
            { name: 'Gmail', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor"><path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H1.5C.65 21 0 20.35 0 19.5v-15c0-.425.175-.8.475-1.075.3-.275.7-.425 1.125-.425h20.75c.425 0 .825.15 1.125.425.3.275.525.65.525 1.075zM21.5 4.5H2.5l9.5 6.35L21.5 4.5zM21.5 19.5V6.75l-9.5 6.35-9.5-6.35V19.5h19z"/></svg>, synergy: 'Sorts incoming mail, drafts replies, and extracts attachments automatically.' },
            { name: 'Zoom', icon: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="currentColor"><path d="M12.83,11.17a.5.5,0,0,0-.83,0,1.05,1.05,0,0,0-.24.78V15.5a1,1,0,0,0,.24.78.5.5,0,0,0,.83,0l3.2-2.25a.5.5,0,0,0,0-.82ZM3,6H16.5a1.5,1.5,0,0,1,0,3H8.25V18H5.25V9H3A1.5,1.5,0,0,1,3,6Z"/></svg>, synergy: 'Automated meeting scheduling, transcription, and summary generation.' },
        ]
    },
];


export const DESKTOP_APPS: DesktopApp[] = [
    {
        id: 'command_center',
        title: 'NEXUS Command Interface',
        icon: ICONS.engine,
        component: <div />, // Placeholder, will be rendered with state in App.tsx
        defaultSize: { width: 700, height: 500 },
    },
    {
        id: 'app_suite',
        title: 'Core Application Suite',
        icon: ICONS.app_matrix,
        component: <div className="p-4 md:p-8"><ApplicationMatrix /></div>,
        defaultSize: { width: 900, height: 600 },
    },
    {
        id: 'cloud_employees',
        title: 'Autonomous Cloud Employees',
        icon: ICONS.cloud_employees,
        component: <div className="p-4 md:p-8"><AutonomousAgents /></div>,
        defaultSize: { width: 900, height: 500 },
    },
    {
        id: 'system_monitor',
        title: 'NEXUS Monitor',
        icon: ICONS.nexus_widget,
        component: <SystemMonitor insights={PREDEFINED_INSIGHTS} />,
        defaultSize: { width: 350, height: 180 },
        isWidget: true,
    },
    {
        id: 'system_integrity',
        title: 'System Integrity',
        icon: ICONS.system_monitor,
        component: <div />, // Placeholder for RAM/CPU, handled in SystemMonitor
        defaultSize: { width: 350, height: 220 },
        isWidget: true,
    },
    {
        id: 'directives',
        title: 'NEXUS Directives',
        icon: ICONS.directives,
        component: <Widget title="" icon={null}><ul className="text-sm text-gray-400 space-y-2 max-h-40 overflow-y-auto">{NEXUS_DIRECTIVES.map((directive, index) => (<li key={index} className="flex items-start"><span className="text-amber-300 mr-2 mt-1 flex-shrink-0">&#10148;</span><span>{directive}</span></li>))}</ul></Widget>,
        defaultSize: { width: 350, height: 220 },
        isWidget: true,
    },
     {
        id: 'task_history',
        title: 'Task History',
        icon: ICONS.history,
        component: <div />, // Placeholder, needs state from App.tsx
        defaultSize: { width: 350, height: 220 },
        isWidget: true,
    },
    {
        id: 'integrations',
        title: 'Integrated Environments',
        icon: ICONS.integrations,
        component: <Widget title="" icon={null}> <ul className="text-sm text-gray-400 space-y-3"> <li className="flex items-center justify-between"> <div className="flex items-center gap-3"> <span className="text-sky-400">{ICONS.vscode}</span> <span>VS Code (OSS)</span> </div> <div className="flex items-center gap-2 text-xs"> <span className="text-green-400">●</span> <span>Active</span> </div> </li> <li className="flex items-center justify-between"> <div className="flex items-center gap-3"> <span className="text-blue-400">{ICONS.nextcloud}</span> <span>Nextcloud</span> </div> <div className="flex items-center gap-2 text-xs"> <span className="text-green-400">●</span> <span>Syncing</span> </div> </li> <li className="flex items-center justify-between"> <div className="flex items-center gap-3"> <span className="text-orange-400">{ICONS.brave}</span> <span>Brave Browser</span> </div> <div className="flex items-center gap-2 text-xs"> <span className="text-green-400">●</span> <span>Connected</span> </div> </li> <li className="flex items-center justify-between"> <div className="flex items-center gap-3"> <span className="text-yellow-400">{ICONS.chrome}</span> <span>Chrome Browser</span> </div> <div className="flex items-center gap-2 text-xs"> <span className="text-green-400">●</span> <span>Connected</span> </div> </li> </ul> </Widget>,
        defaultSize: { width: 350, height: 250 },
        isWidget: true,
    },
];

export const LUMEN_OS_PRINCIPLES: ArchitecturePillar[] = [
  {
    title: 'The Open-Source Core',
    description: 'A customized, lightweight Linux foundation for cloud-native operations and absolute control.',
    icon: ICONS.core,
    keyFeatures: ['Custom Linux Kernel', 'Container Orchestration (K8s)', 'Advanced File System (ZFS/Btrfs)', 'Seamless Cloud Sync'],
  },
  {
    title: 'The Whispering Canvas (AI Shell)',
    description: 'A profoundly customized KDE Plasma interface. The workspace is a minimalist, adaptive canvas where applications and workflows materialize and recede with intelligent grace.',
    icon: ICONS.shell,
    keyFeatures: ['Customized KDE Plasma UI', 'Context-Aware Adaptive Layouts', 'Brave Browser Integration', 'Visual Workflow Design'],
  },
  {
    title: 'The Warmwind Cognitive Engine',
    description: 'The engine for Autonomous Cloud Employees. Warmwind uses computer vision to interact with applications like a human, bypassing APIs for true no-code, universal automation.',
    icon: ICONS.engine,
    keyFeatures: ["Human-Like Visual Interaction", "True No-Code Integration", "Scalable AI Workforce", "Autonomous Decision-Making"],
  },
  {
    title: 'Security & Self-Healing',
    description: 'An immutable system with AI-driven threat detection and a self-optimizing core designed for perpetual evolution.',
    icon: ICONS.security,
    keyFeatures: ['Immutable Core System', 'Sandboxed AI Assistants', 'AI-Driven Threat Inoculation', 'Perpetual Evolution Module'],
  },
];

import React from 'react';
import type { ArchitecturePillar } from './types';

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
  chrome: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M12 21a9 9 0 110-18 9 9 0 010 18z"/><path d="M12 15a3 3 0 110-6 3 3 0 010 6z"/><path d="M21 12h-3M6 12H3M12 6V3M12 21v-3"/></svg>,
};

export const LUMEN_OS_PRINCIPLES: ArchitecturePillar[] = [
  {
    title: 'The Open-Source Core',
    description: 'A customized, lightweight Linux foundation for cloud-native operations and absolute control.',
    icon: ICONS.core,
    keyFeatures: ['Custom Linux Kernel', 'Container Orchestration (K8s)', 'Advanced File System (ZFS/Btrfs)', 'Seamless Cloud Sync'],
  },
  {
    title: 'The Adaptive AI Shell',
    description: 'A modular, PWA-centric UI that enables visual workflow design and intelligent workspace arrangement.',
    icon: ICONS.shell,
    keyFeatures: ['Modular Widget-Based UI', 'PWA & Containerized Apps', 'Unified AI Command Center', 'Visual Workflow Design'],
  },
  {
    title: 'The Cognitive Engine',
    description: 'Powered by NEXUS, this AI layer uses computer vision and decision-making models to automate tasks in any application.',
    icon: ICONS.engine,
    keyFeatures: ["Computer Vision (NEXUS's Eyes)", "Decision Engines (NEXUS's Brain)", 'No-Code Visual Integration', 'Human-Like Task Execution'],
  },
  {
    title: 'Security & Self-Healing',
    description: 'An immutable system with AI-driven threat detection and a self-optimizing core designed for perpetual evolution.',
    icon: ICONS.security,
    keyFeatures: ['Immutable Core System', 'Granular Sandboxing', 'AI-Driven Threat Detection', 'Perpetual Evolution Module'],
  },
];

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
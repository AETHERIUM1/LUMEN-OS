import React from 'react';
import type { ArchitecturePillar } from './types';

export const ICONS = {
  core: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9.75l9-5.25" /></svg>,
  shell: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>,
  engine: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v-1.5m0 15v1.5m3.75-18v1.5m0 15v-1.5" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 100-12 6 6 0 000 12z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 12a3 3 0 100-6 3 3 0 000 6z" /></svg>,
  security: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.016h-.008v-.016z" /></svg>,
  nexus_widget: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.5 14h.01M12.5 17h.01M10 14h.01M7 17h.01M5 14h.01M8.5 11h.01M12.5 11h.01M15.5 11h.01M18.5 14h.01" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>,
  history: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
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
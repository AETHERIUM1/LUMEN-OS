import React from 'react';
import type { ArchitecturePillar } from './types';

export const ICONS = {
  canvas: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v18h16.5V3H3.75z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12c4.125 2.25 8.25 2.25 12.375 0" /></svg>,
  weave: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 6c-3.375 3.375 0 6.75 3.375 6.75S16.5 9.375 13.125 6s-6.75 0-6.75 3.375S9.75 13.125 13.125 13.125m0-7.125c3.375 3.375 0 6.75-3.375 6.75S6.375 9.375 9.75 6m3.375 7.125c3.375-3.375 0-6.75-3.375-6.75M9.75 16.5c-3.375-3.375 0-6.75 3.375-6.75S16.5 13.125 13.125 16.5" /></svg>,
  luminance: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="12" cy="12" r="3.75" /><circle cx="12" cy="12" r="7.5" opacity="0.6" /><circle cx="12" cy="12" r="11.25" opacity="0.3" /></svg>,
  nexus: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21m6.75-11.25H21m-13.5 0H3m11.25-6.75L19.5 7.5m-15 9l4.25-4.25m0 0L19.5 16.5m-4.25-4.25L3.75 7.5" /></svg>,
  nexus_widget: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3.75c-1.5 1.5-1.5 3.75 0 5.25s3.75 1.5 5.25 0l4.5-4.5-5.25-5.25-4.5 4.5zm-3 9c-1.5 1.5-1.5 3.75 0 5.25s3.75 1.5 5.25 0l4.5-4.5-5.25-5.25-4.5 4.5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v7.5m-3.75-3.75h7.5" /></svg>,
  history: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
};

export const LUMENOS_PRINCIPLES: ArchitecturePillar[] = [
  {
    title: 'The Whispering Canvas',
    description: 'An adaptive, minimalist display where information unfurls organically, prioritizing harmony and legibility.',
    icon: ICONS.canvas,
    keyFeatures: ['Minimalist UI', 'Adaptive Display', 'Organic Information Flow', 'Text-Centric Design'],
  },
  {
    title: 'Intuitive Drift & Weave',
    description: 'Navigate through an associative "Memory Weave" where concepts are interconnected, guided by context and resonance.',
    icon: ICONS.weave,
    keyFeatures: ['Associative Navigation', 'Memory Weave Data Model', 'Lumina Tags', 'Contextual Convergence'],
  },
  {
    title: 'Ephemeral Luminance',
    description: 'Applications and functions emerge as gentle glows when needed and recede softly, maintaining a serene, uncluttered canvas.',
    icon: ICONS.luminance,
    keyFeatures: ['On-Demand UI Elements', 'Uncluttered Workspace', 'Resonant Feedback', 'Serene Immersion'],
  },
  {
    title: 'The Nexus Core',
    description: 'A self-evolving AI that learns your cognitive patterns to subtly connect ideas and guide discovery.',
    icon: ICONS.nexus,
    keyFeatures: ['Self-Evolving AI', 'Pattern Recognition', '"Echo" NL Interface', 'Self-Architecting Resilience'],
  },
];
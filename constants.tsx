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
  chrome: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2}><path d="M12 21a9 9 0 110-18 9 9 0 010 18z"/><path d="M12 15a3 3 0 110-6 3 3 0 010 6z"/><path d="M21 12h-3M6 12H3M12 6V3M12 21v-3"/></svg>,
  vscode: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor"><path d="M23.15 2.587L18.44 0l-3.308 3.028 4.71 2.587zm-22.3 9.413l4.71 2.587L.85 17.613 5.56 20.2l-4.71 2.587V12zM3.4 4.34l9.113 5.022v4.545L3.4 9.387zm17.2 5.045v4.545l-9.113 4.523V13.93z"/></svg>,
  nextcloud: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor"><path d="M12 1.5A10.5 10.5 0 001.5 12A10.5 10.5 0 0012 22.5A10.5 10.5 0 0022.5 12A10.5 10.5 0 0012 1.5zm0 3a7.5 7.5 0 017.5 7.5 7.5 7.5 0 01-7.5 7.5 7.5 7.5 0 01-7.5-7.5 7.5 7.5 0 017.5-7.5zm-3.11 3a1.88 1.88 0 100 3.75 1.88 1.88 0 000-3.75zm3.11 1.5a1.88 1.88 0 100 3.75 1.88 1.88 0 000-3.75zm3.12 1.5a1.88 1.88 0 100 3.75 1.88 1.88 0 000-3.75z"/></svg>,
  libreoffice: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="M5.51 3.012l10.957.012L21.99 8.52l-5.45 5.503-5.503 5.492-5.524-5.492zm.009 1.15l9.782.01L19.5 8.52l-4.204 4.225-1.16-1.15zm8.647 12.63l1.16-1.16L11.09 14.42l-4.385 4.384z"/></svg>,
  jitsi: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="M12 0C5.389 0 0 5.352 0 12c0 2.14.573 4.145 1.578 5.864l-1.5 5.824 5.91-1.53c1.69.815 3.593 1.28 5.58 1.28 6.61 0 11.922-5.352 11.922-11.922S18.61 0 12 0zm1.045 18.033c-3.188 0-6.422-1.922-6.422-4.547 0-2.625 2.156-4.47 5.766-4.47 1.406 0 2.53.258 3.422.68V6.13c0-.492-.563-1.055-1.523-1.055-1.594 0-3.118 1.242-3.118 3.117H5.53C5.53 4.676 8.42 2.379 12.07 2.379c3.657 0 5.313 1.945 5.313 5.313v8.085c-1.125.96-2.906 2.25-6.338 2.25z"/></svg>,
  gimp: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="M11.39 12.012c0-.348-.03-.686-.077-1.018l.19-2.52s-3.953-.59-4.82.918c0 0-.214 2.898 2.227 3.978a3.1 3.1 0 0 0 2.48-1.358zm1.22 0c0 .942.756 1.688 1.688 1.688s1.688-.746 1.688-1.688c0-.942-.756-1.688-1.688-1.688s-1.688.746-1.688 1.688zM12 0C5.382 0 0 5.382 0 12s5.382 12 12 12 12-5.382 12-12S18.618 0 12 0zm5.22 17.15c-.183.19-.38.37-.58.53-.29.23-1.35.91-2.92.91s-2.6-.7-2.9-1.01c-.34-.3-.49-.7-.52-.96l-1.13-2.93c-.34-.84-1.28-2.1-1.28-2.88 0-1.4 1.2-2.58 2.68-2.58.55 0 1.07.18 1.49.49l.34.25-1.36 1.65c.67.24 1.28.3 1.83.07l1.7-1.95c.5-.59.8-1.37.8-2.22 0-1.6-1.3-2.9-2.9-2.9s-2.9 1.3-2.9 2.9v.02h-1.6V9.5c0-2.48 2.02-4.5 4.5-4.5s4.5 2.02 4.5 4.5c0 1.2-.48 2.29-1.25 3.08l-2.06 2.06c-.05.2-.09.4-.09.61 0 .21.05.41.14.6l.87 2.08c.15.34.4.6.72.77.4.23 1.01.2 1.44-.22.14-.14.27-.29.39-.45.2-.28.31-.6.31-.94 0-.6-.28-1.13-.72-1.53l-.3-.28.01.01s.92-1.05.92-2.26c0-1.13-.78-2.07-1.8-2.2v-1.18c1.6.3 2.8 1.7 2.8 3.38 0 1.1-.5 2.1-1.3 2.7l-.02-.01.3.28c.6.58.98 1.4.98 2.3 0 .6-.2 1.18-.58 1.65z"/></svg>,
  inkscape: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="M5.875 1.458L.22 15.68l7.928 6.428 5.67-14.223zM18.125 1.458l5.655 14.223-7.928 6.428-5.67-14.223zM12 4.69l-2.08 5.216 2.08 5.215 2.08-5.215z"/></svg>,
  krita: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="M.24 3.6v16.8h23.52V3.6H.24zm4.8 2.4h2.4v9.6h4.8V18H5.04V6zm14.4 0v12h-2.4v-4.8h-4.8V6h7.2z"/></svg>,
  blender: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="M11.64 0c-4.44 0-8.28 3-9.96 7.08L0 12l2.04 5.4c1.8 3.96 5.52 6.6 9.96 6.6 5.28 0 9.72-3.84 10.92-8.88l1.08-4.44-5.4-3.96A11.12 11.12 0 0011.64 0zm0 3.6c2.4 0 4.56.96 6.24 2.64l-3.36 2.52a4.61 4.61 0 00-3.24-1.2 4.84 4.84 0 00-4.8 4.8c0 2.64 2.16 4.8 4.8 4.8 1.2 0 2.28-.48 3.12-1.2l3.36 2.52c-1.68 1.56-3.84 2.52-6.24 2.52-4.92 0-8.88-3.96-8.88-8.88s3.96-8.88 8.88-8.88zm10.32 8.4a8.8 8.8 0 01-8.88 8.88V12a8.8 8.8 0 018.88 0z"/></svg>,
  gitlab: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="m23.6 9.6-2.5-7.8A.6.6 0 0 0 20.5 1h-17a.6.6 0 0 0-.6 1.8l-2.5 7.8a.6.6 0 0 0 .2 1l11.4 8.2a.6.6 0 0 0 .8 0l11.4-8.2a.6.6 0 0 0 .2-.9Z"/></svg>,
  jupyter: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="M12 24a3.18 3.18 0 0 1-3.18-3.18c0-1.76 2-3.18 3.18-3.18s3.18 1.42 3.18 3.18S13.76 24 12 24zm-9.54-3.18c0 1.25 1.42 2.65 2.65 2.65a2.65 2.65 0 0 0 2.65-2.65c0-1.24-1.19-2.65-2.65-2.65S2.46 19.57 2.46 20.82zm19.08 0c0 1.25-1.42 2.65-2.65 2.65a2.65 2.65 0 0 1-2.65-2.65c0-1.24 1.19-2.65 2.65-2.65s2.65 1.41 2.65 2.65zM12 11.13A9.91 9.91 0 0 1 2.09 1.22a9.91 9.91 0 0 1 19.82 0A9.91 9.91 0 0 1 12 11.13z"/></svg>,
  vlc: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="m12.24 0-4.08 8.16H1.92L12.24 24l10.32-24h-6.24L12.24 0z"/></svg>,
  audacity: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.59c1.47 0 2.818.45 3.978 1.218L9.93 11.115v-4.11c0-.75.608-1.358 1.358-1.358s1.357.608 1.357 1.358V8.9c.78-.17 1.6-.26 2.44-.26 3.11 0 5.63 2.52 5.63 5.63s-2.52 5.63-5.63 5.63c-2.48 0-4.6-1.6-5.36-3.82l5.77-5.77-9.53 1.88C2.93 15.02 2.59 13.56 2.59 12c0-5.198 4.21-9.41 9.41-9.41z"/></svg>,
  kdenlive: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="M11.96 0C7.16 0 3.2 4.01 3.2 8.86v6.28C3.2 20.01 7.16 24 11.96 24s8.75-3.99 8.75-8.86V8.86C20.71 4.01 16.76 0 11.96 0zm-5.8 5.64h2.9v12.72h-2.9zm5.8 0h2.9v12.72h-2.9zm5.8 0h2.9v12.72h-2.9z"/></svg>,
  syncthing: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="M12.012 0C7.884.012 4.044 2.304 1.68 5.628L6.42 8.7a6.22 6.22 0 0 1 5.604-5.22V0zm7.128 5.088a12 12 0 0 0-4.044-3.564v4.068a6.2 6.2 0 0 1 2.76 2.664zm2.184 5.376h4.08A12.01 12.01 0 0 0 21.9 6.78l-3.324 2.82a6.2 6.2 0 0 1 .744 3.864zM4.704 6.78a12.01 12.01 0 0 0-2.592 3.684H6.24a6.2 6.2 0 0 1 .792-3.864zM0 12c.012 4.128 2.304 7.968 5.628 10.332l3.084-4.74a6.22 6.22 0 0 1-5.232-5.592H0zm13.464 2.868l4.188 6.552A11.95 11.95 0 0 0 24 12h-4.068a6.2 6.2 0 0 1-6.468 2.868zM8.376 14.88l-6.552 4.188A11.95 11.95 0 0 0 12 24v-4.068a6.2 6.2 0 0 1-3.624-5.052z"/></svg>,
  btop: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor"><path d="M0 0v24h24V0H0zm2.25 2.25h19.5v19.5H2.25V2.25zm2.25 2.25v2.25h15V4.5H4.5zm0 4.5v2.25h15V9H4.5zm0 4.5v2.25h15v-2.25H4.5zm0 4.5v2.25h15v-2.25H4.5z"/></svg>,
  lumina: <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" /></svg>,
  agent_support: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 10a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  agent_accounting: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M12 21a9 9 0 110-18 9 9 0 010 18z" /></svg>,
  agent_recruiting: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h4a2 2 0 012 2v1m-4 0h4m-9 4h2m-2 4h2m2-4h2m-2 4h2" /></svg>,
  agent_social: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  agent_monitoring: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  agent_website: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h5M5 12a7 7 0 117 7" /></svg>,
  agent_innovation: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
};

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

export const APPLICATION_MATRIX = [
    {
        title: 'Productivity & Collaboration',
        apps: [
            { name: 'LibreOffice', icon: ICONS.libreoffice, synergy: 'Automate data extraction from spreadsheets, generate reports, or auto-populate presentation slides based on data streams.' },
            { name: 'Jitsi Meet', icon: ICONS.jitsi, synergy: 'Schedule meetings, auto-join calls, transcribe conversations via AISTUDIO-trained models, and summarize discussion points.' },
            { name: 'Nextcloud', icon: ICONS.nextcloud, synergy: 'Automate file organization, generate sharing links, manage user permissions, and trigger workflows based on file modifications.' },
        ],
    },
    {
        title: 'Creative & Design',
        apps: [
            { name: 'GIMP', icon: ICONS.gimp, synergy: 'Automate image batch processing, repetitive editing tasks, or generate assets based on AI-driven design prompts.' },
            { name: 'Inkscape', icon: ICONS.inkscape, synergy: 'Automate the creation of icons, logos, or UI elements based on specifications, or extract design components for other apps.' },
            { name: 'Krita', icon: ICONS.krita, synergy: 'Automate artwork exporting in various formats, manage brush presets, or integrate with other creative tools in a workflow.' },
            { name: 'Blender', icon: ICONS.blender, synergy: 'Automate rendering queues, asset management, or trigger specific operations within Blender based on external data or schedules.' },
        ],
    },
    {
        title: 'Development & Engineering',
        apps: [
            { name: 'VS Code (OSS)', icon: ICONS.vscode, synergy: 'Automate code linting, run specific build commands, trigger tests, or interact with version control systems automatically.' },
            { name: 'GitLab', icon: ICONS.gitlab, synergy: 'Automate deployment pipelines, monitor repository changes, and trigger issue creation based on external inputs.' },
            { name: 'Jupyter', icon: ICONS.jupyter, synergy: 'Automate the execution of notebooks, extract results, generate reports, and visually interact with web-based data dashboards.' },
        ],
    },
    {
        title: 'Media & Entertainment',
        apps: [
            { name: 'VLC Player', icon: ICONS.vlc, synergy: 'Automate media playback based on schedules, manage playlists, or extract metadata from media files for organization.' },
            { name: 'Audacity', icon: ICONS.audacity, synergy: 'Automate audio batch processing like normalization and format conversion, or prepare audio files for video projects.' },
            { name: 'Kdenlive', icon: ICONS.kdenlive, synergy: 'Automate video rendering, asset management, or sequence specific video clips based on a script or external data.' },
        ],
    },
    {
        title: 'System & AI Utilities',
        apps: [
            { name: 'Syncthing', icon: ICONS.syncthing, synergy: 'Automate synchronization profiles, monitor sync status, and trigger actions based on file arrival or modification across devices.' },
            { name: 'Btop', icon: ICONS.btop, synergy: 'Monitor system health and trigger self-healing protocols or resource re-allocation via the AI core if anomalies are detected.' },
            { name: 'Lumina AI', icon: ICONS.lumina, synergy: 'Directly configure, monitor, and train Warmwind AI assistants. Visually design and manage automation workflows and AISTUDIO connections.' },
        ],
    },
];

export const AUTONOMOUS_AGENTS = [
    {
        title: 'Customer Support Assistant',
        icon: ICONS.agent_support,
        description: 'Handles all customer inquiries independently via email, chat, or social media. Finds order information, answers FAQs, and resolves problems autonomously.'
    },
    {
        title: 'Accounting & Invoice Assistant',
        icon: ICONS.agent_accounting,
        description: 'Automatically recognizes invoices, extracts data, reconciles with purchase orders, logs transactions, and prepares monthly financial statements.'
    },
    {
        title: 'Recruiting Assistant',
        icon: ICONS.agent_recruiting,
        description: 'Independently screens applications, checks CVs and social media profiles, conducts initial interviews, and evaluates candidates to provide a top selection.'
    },
    {
        title: 'Social Media Growth Manager',
        icon: ICONS.agent_social,
        description: 'Scans trends, automatically creates and schedules posts, and continuously analyzes performance, allowing marketing teams to focus on strategy.'
    },
    {
        title: 'Competition Monitoring',
        icon: ICONS.agent_monitoring,
        description: 'Monitors competitors\' social media accounts and automatically creates concise reports on their activities, ensuring you stay ahead.'
    },
    {
        title: 'Website & Product Monitoring',
        icon: ICONS.agent_website,
        description: 'Continuously monitors website health, analyzes visitor flows, detects errors and downtimes, and automatically reports anomalies to developers.'
    },
    {
        title: 'Innovation Scout',
        icon: ICONS.agent_innovation,
        description: 'Scours the web daily for innovative technologies, relevant startups, and market trends, generating automated innovation reports.'
    }
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
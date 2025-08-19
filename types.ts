import type { ReactNode } from 'react';

export interface ArchitecturePillar {
  title: string;
  description: string;
  icon: ReactNode;
  keyFeatures: string[];
}

export interface DesktopApp {
  id: string;
  title: string;
  icon: ReactNode;
  component: ReactNode;
  defaultSize?: { width: number | string; height: number | string };
  isWidget?: boolean;
}

export interface WindowState extends DesktopApp {
  position: { x: number; y: number };
  zIndex: number;
  isMinimized: boolean;
}

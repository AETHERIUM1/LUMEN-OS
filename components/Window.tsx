import React, { useState, useRef, useEffect } from 'react';

interface WindowProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  position: { x: number; y: number };
  zIndex: number;
  size?: { width: number | string; height: number | string };
  isMinimized: boolean;
  onClose: () => void;
  onFocus: () => void;
  onMinimize: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
}

export const Window: React.FC<WindowProps> = ({
  id,
  title,
  icon,
  children,
  position,
  zIndex,
  size = { width: 500, height: 400 },
  isMinimized,
  onClose,
  onFocus,
  onMinimize,
  onPositionChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest('.window-control')) return;
    onFocus();
    setIsDragging(true);
    if (nodeRef.current) {
        const rect = nodeRef.current.getBoundingClientRect();
        dragOffset.current = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !nodeRef.current) return;
        const newX = e.clientX - dragOffset.current.x;
        const newY = e.clientY - dragOffset.current.y;
        onPositionChange({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };
    
    if (isDragging) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, onPositionChange]);

  return (
    <div
      ref={nodeRef}
      id={`window-${id}`}
      className={`absolute bg-gray-900/50 backdrop-blur-sm border border-gray-500/30 rounded-lg shadow-2xl flex flex-col transition-all duration-200 ${isDragging ? 'opacity-80' : ''} ${isMinimized ? 'opacity-0 invisible -translate-y-10' : 'opacity-100 visible'}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: size.width,
        height: size.height,
        zIndex: zIndex,
      }}
      onMouseDown={onFocus}
    >
      {/* Header */}
      <div
        className="h-8 flex items-center justify-between px-2 bg-black/30 rounded-t-lg cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center gap-2 text-gray-300 text-xs">
          <span className="h-4 w-4 flex items-center justify-center">{icon}</span>
          <span className="font-semibold select-none">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onMinimize} className="window-control h-5 w-5 rounded-full bg-yellow-500/80 hover:bg-yellow-400 flex items-center justify-center text-black font-bold text-lg leading-none pb-1">_</button>
          <button onClick={onClose} className="window-control h-5 w-5 rounded-full bg-red-500/80 hover:bg-red-400 flex items-center justify-center text-black font-bold text-sm">×</button>
        </div>
      </div>
      {/* Content */}
      <div className="flex-grow p-1 rounded-b-lg overflow-y-auto min-h-0">
        {children}
      </div>
    </div>
  );
};

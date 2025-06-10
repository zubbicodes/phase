import { useState, useEffect } from 'react';

export interface CursorState {
  position: { x: number; y: number };
  isHovering: boolean;
  hoveredElement: string | null;
}

export const useCustomCursor = () => {
  const [cursorState, setCursorState] = useState<CursorState>({
    position: { x: 0, y: 0 },
    isHovering: false,
    hoveredElement: null,
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorState(prev => ({
        ...prev,
        position: { x: e.clientX, y: e.clientY },
      }));
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (elementType: string) => {
    setCursorState(prev => ({
      ...prev,
      isHovering: true,
      hoveredElement: elementType,
    }));
  };

  const handleMouseLeave = () => {
    setCursorState(prev => ({
      ...prev,
      isHovering: false,
      hoveredElement: null,
    }));
  };

  return {
    cursorState,
    handleMouseEnter,
    handleMouseLeave,
  };
}; 
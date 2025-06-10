import React from 'react';
import { CursorState } from '../../hooks/useCustomCursor';

interface CustomCursorProps {
  cursorState: CursorState;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const { position, isHovering } = cursorState;

  return (
    <div 
      className={`fixed pointer-events-none z-[9999] transition-all duration-300 ease-out ${
        isHovering ? 'w-16 h-16' : 'w-4 h-4'
      }`}
      style={{
        left: position.x - (isHovering ? 32 : 8),
        top: position.y - (isHovering ? 32 : 8),
        mixBlendMode: 'difference',
      }}
    >
      <div className={`w-full h-full bg-white rounded-full transition-all duration-300 ${
        isHovering ? 'scale-100' : 'scale-75'
      }`} />
    </div>
  );
};

export default CustomCursor; 
'use client';

import { useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';

type SpotlightProps = {
  className?: string;
  size?: number;
};

export function Spotlight({
  className = '',
  size = 200,
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    let animationFrameId: number;
    let cachedRect: DOMRect | null = null;
    let lastUpdateTime = 0;
    const throttleMs = 16; // ~60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      
      if (now - lastUpdateTime < throttleMs) {
        return;
      }
      
      lastUpdateTime = now;
      
      if (!ref.current) return;

      // Cache bounding rect and only recalculate when needed
      if (!cachedRect) {
        cachedRect = ref.current.getBoundingClientRect();
      }

      const centerX = cachedRect.left + cachedRect.width / 2;
      const centerY = cachedRect.top + cachedRect.height / 2;

      // Use requestAnimationFrame to batch updates
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      
      animationFrameId = requestAnimationFrame(() => {
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
      });
    };

    // Reset cached rect on resize
    const handleResize = () => {
      cachedRect = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [x, y]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 ${className}`}
      style={{
        background: `radial-gradient(circle ${size}px at var(--x, 50%) var(--y, 50%), var(--color) 0%, transparent 100%)`,
      }}
    />
  );
} 
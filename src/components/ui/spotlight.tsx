'use client';

import { useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

type SpotlightProps = {
  className?: string;
  size?: number;
  springOptions?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
};

export function Spotlight({
  className = '',
  size = 200,
  springOptions = {
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2,
  },
}: SpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, springOptions);
  const ySpring = useSpring(y, springOptions);

  const transform = useTransform(
    [xSpring, ySpring],
    ([x, y]) => `translate(${x}px, ${y}px)`
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
'use client';
import { ReactLenis } from 'lenis/react';
import React, { forwardRef, PropsWithChildren } from 'react';

type StickyScrollProps = PropsWithChildren<{}>;

const StickyScroll = forwardRef<HTMLElement, StickyScrollProps>(({ children }, ref) => {
  return (
    <ReactLenis root>
      <main className='bg-black' ref={ref}>
        {children}
      </main>
    </ReactLenis>
  );
});

StickyScroll.displayName = 'StickyScroll';

export default StickyScroll; 
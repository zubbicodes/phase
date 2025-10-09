import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HelmetProvider } from 'react-helmet-async';

// Load non-critical CSS asynchronously
const loadNonCriticalCSS = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/src/styles/globals.css';
  link.media = 'print';
  link.onload = function() {
    this.media = 'all';
  };
  link.onerror = function() {
    // Fallback: try to load CSS synchronously if async fails
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'stylesheet';
    fallbackLink.href = '/src/styles/globals.css';
    document.head.appendChild(fallbackLink);
  };
  document.head.appendChild(link);
};

// Load CSS after initial render
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNonCriticalCSS);
} else {
  loadNonCriticalCSS();
}

// Performance monitoring with optimized observer
if ('performance' in window) {
  // Report Core Web Vitals with throttling
  const observer = new PerformanceObserver((list) => {
    // Use requestAnimationFrame to avoid blocking the main thread
    requestAnimationFrame(() => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.loadEventStart);
        }
      }
    });
  });
  
  observer.observe({ entryTypes: ['navigation', 'paint'] });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

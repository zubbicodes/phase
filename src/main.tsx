import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/globals.css';

// Performance monitoring
if ('performance' in window) {
  // Report Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (entry.entryType === 'navigation') {
        const navEntry = entry as PerformanceNavigationTiming;
        console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.loadEventStart);
      }
    }
  });
  
  observer.observe({ entryTypes: ['navigation', 'paint'] });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { useState, useEffect } from 'react';

interface WebPSupport {
  isSupported: boolean;
  isLoading: boolean;
}

export const useWebPSupport = (): WebPSupport => {
  const [webpSupport, setWebpSupport] = useState<WebPSupport>({
    isSupported: false,
    isLoading: true,
  });

  useEffect(() => {
    const checkWebPSupport = (): Promise<boolean> => {
      return new Promise((resolve) => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          resolve(webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      });
    };

    checkWebPSupport().then((isSupported) => {
      setWebpSupport({
        isSupported,
        isLoading: false,
      });
    });
  }, []);

  return webpSupport;
};

export const useImagePreloader = (imageUrls: string[]) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Set<string>>(new Set());

  const { isSupported: supportsWebP } = useWebPSupport();

  const preloadImages = async () => {
    if (imageUrls.length === 0) return;

    setIsLoading(true);
    setLoadingProgress(0);
    setLoadedImages(new Set());
    setErrors(new Set());

    const loadPromises = imageUrls.map(async (url) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          setLoadedImages(prev => new Set([...prev, url]));
          resolve();
        };
        
        img.onerror = () => {
          setErrors(prev => new Set([...prev, url]));
          resolve();
        };

        // Use WebP if supported, otherwise fallback to original
        const finalUrl = supportsWebP && !url.endsWith('.webp') 
          ? url.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp')
          : url;
        
        img.src = finalUrl;
      });
    });

    // Track progress
    let completed = 0;
    const updateProgress = () => {
      completed++;
      setLoadingProgress((completed / imageUrls.length) * 100);
    };

    // Execute all promises
    await Promise.allSettled(
      loadPromises.map(promise => 
        promise.then(updateProgress).catch(updateProgress)
      )
    );

    setIsLoading(false);
  };

  const getImageUrl = (originalUrl: string): string => {
    if (supportsWebP && !originalUrl.endsWith('.webp')) {
      return originalUrl.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
    }
    return originalUrl;
  };

  return {
    preloadImages,
    loadedImages,
    loadingProgress,
    isLoading,
    errors,
    getImageUrl,
    supportsWebP,
  };
};

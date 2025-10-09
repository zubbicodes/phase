/**
 * Utility functions for WebP image handling
 */

// Check if WebP is supported by the browser
export const checkWebPSupport = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const webP = new Image();
    webP.onload = webP.onerror = () => {
      resolve(webP.height === 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  });
};

// Convert image URL to WebP format
export const convertToWebPUrl = (originalUrl: string): string => {
  if (!originalUrl) return originalUrl;
  
  // Don't convert if already WebP or SVG
  if (originalUrl.endsWith('.webp') || originalUrl.endsWith('.svg')) {
    return originalUrl;
  }
  
  // Convert common image formats to WebP
  return originalUrl.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
};

// Get the best image URL based on WebP support
export const getOptimizedImageUrl = async (originalUrl: string): Promise<string> => {
  if (!originalUrl) return originalUrl;
  
  try {
    const supportsWebP = await checkWebPSupport();
    return supportsWebP ? convertToWebPUrl(originalUrl) : originalUrl;
  } catch (error) {
    // Fallback to original URL if WebP check fails
    return originalUrl;
  }
};

// Batch convert multiple image URLs
export const getOptimizedImageUrls = async (urls: string[]): Promise<string[]> => {
  if (!urls || urls.length === 0) return [];
  
  try {
    const supportsWebP = await checkWebPSupport();
    return urls.map(url => supportsWebP ? convertToWebPUrl(url) : url);
  } catch (error) {
    // Fallback to original URLs if WebP check fails
    return urls;
  }
};

// Create a picture element with WebP and fallback
export const createPictureElement = (webpSrc: string, fallbackSrc: string, alt: string, className?: string) => {
  return {
    webpSrc: convertToWebPUrl(webpSrc),
    fallbackSrc,
    alt,
    className,
  };
};

// Preload images with WebP support
export const preloadImages = async (urls: string[]): Promise<void> => {
  if (!urls || urls.length === 0) return;
  
  const supportsWebP = await checkWebPSupport();
  
  const loadPromises = urls.map(url => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); // Continue even if one image fails
      
      // Use WebP if supported, otherwise use original
      const finalUrl = supportsWebP ? convertToWebPUrl(url) : url;
      img.src = finalUrl;
    });
  });
  
  await Promise.allSettled(loadPromises);
};

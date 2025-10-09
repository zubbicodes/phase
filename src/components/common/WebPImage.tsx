import React, { useState, useEffect } from 'react';

interface WebPImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const WebPImage: React.FC<WebPImageProps> = ({
  src,
  alt,
  className,
  style,
  loading = 'lazy',
  onLoad,
  onError,
}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Convert original src to WebP
    const webpSrc = src.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
    
    // Check WebP support
    const checkWebPSupport = (): Promise<boolean> => {
      return new Promise((resolve) => {
        const webP = new Image();
        webP.onload = webP.onerror = () => {
          resolve(webP.height === 2);
        };
        webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
      });
    };

    const loadImage = async () => {
      try {
        const supportsWebP = await checkWebPSupport();
        
        if (supportsWebP) {
          // Try WebP first
          const webpImg = new Image();
          webpImg.onload = () => {
            setImageSrc(webpSrc);
            onLoad?.();
          };
          webpImg.onerror = () => {
            // Fallback to original format
            setImageSrc(src);
            onLoad?.();
          };
          webpImg.src = webpSrc;
        } else {
          // Use original format for unsupported browsers
          setImageSrc(src);
          onLoad?.();
        }
      } catch (error) {
        // Fallback to original format
        setImageSrc(src);
        onLoad?.();
      }
    };

    loadImage();
  }, [src, onLoad]);

  const handleError = () => {
    if (!hasError && imageSrc.endsWith('.webp')) {
      // If WebP fails, try original format
      setHasError(true);
      setImageSrc(src);
    } else {
      onError?.();
    }
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      onLoad={onLoad}
      onError={handleError}
    />
  );
};

export default WebPImage;

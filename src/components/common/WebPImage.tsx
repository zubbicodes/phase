import React from 'react';

interface WebPImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  decoding?: 'async' | 'sync' | 'auto';
}

const WebPImage: React.FC<WebPImageProps> = ({
  src,
  alt,
  className,
  style,
  loading = 'lazy',
  onLoad,
  onError,
  fetchPriority = 'auto',
  sizes,
  decoding = 'async',
}) => {
  // Determine the WebP source and fallback
  const isAlreadyWebP = src.endsWith('.webp');
  const webpSrc = isAlreadyWebP ? src : src.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp');
  const fallbackSrc = isAlreadyWebP
    ? src.replace('.webp', '.png') // best-guess fallback
    : src;

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        style={style}
        loading={loading}
        onLoad={onLoad}
        onError={onError}
        fetchPriority={fetchPriority}
        sizes={sizes}
        decoding={decoding}
      />
    </picture>
  );
};

export default WebPImage;

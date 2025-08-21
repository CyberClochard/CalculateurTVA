import React from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  sizes = '100vw',
  ...props 
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      sizes={sizes}
      decoding="async"
      {...props}
    />
  );
};

export default OptimizedImage; 
import React from 'react';

const ResourcePreloader = () => {
  return (
    <>
      {/* Preload des polices critiques */}
      <link
        rel="preload"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        as="style"
        onLoad="this.onload=null;this.rel='stylesheet'"
      />
      
      {/* Preload des ressources CSS critiques */}
      <link rel="preload" href="/src/index.css" as="style" />
      
      {/* DNS prefetch pour les domaines externes */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Preconnect pour les domaines critiques */}
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </>
  );
};

export default ResourcePreloader; 
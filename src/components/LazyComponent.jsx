import React, { Suspense, lazy } from 'react';

// Composant de fallback pour le lazy loading
const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
    <span className="ml-3 text-gray-600">Chargement...</span>
  </div>
);

// Composant de lazy loading avec Suspense
const LazyComponent = ({ children, fallback = <LoadingFallback /> }) => (
  <Suspense fallback={fallback}>
    {children}
  </Suspense>
);

// Export des composants lazy
export const LazyMentionsLegales = lazy(() => import('../pages/MentionsLegales.jsx'));
export const LazyPolitiqueConfidentialite = lazy(() => import('../pages/PolitiqueConfidentialite.jsx'));
export const LazyFAQ = lazy(() => import('../pages/FAQ.jsx'));

export default LazyComponent; 
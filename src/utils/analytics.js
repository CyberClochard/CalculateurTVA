// Configuration Google Analytics
export const GA_TRACKING_ID = 'GA_MEASUREMENT_ID'; // Remplacez par votre ID GA

// Initialisation de Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: 'Calculateur HT/TTC',
      page_location: window.location.href,
      custom_map: {
        'custom_dimension1': 'user_type',
        'custom_dimension2': 'calculation_type'
      }
    });
  }
};

// Tracking des événements
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Tracking des calculs
export const trackCalculation = (type, montant, tauxTVA) => {
  trackEvent('calculation', 'tva_calculator', type, montant);
  
  // Tracking personnalisé pour les taux de TVA
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'tva_rate_selection', {
      event_category: 'tva_calculator',
      event_label: `${tauxTVA}%`,
      value: tauxTVA
    });
  }
};

// Tracking des copies
export const trackCopy = (type, valeur) => {
  trackEvent('copy', 'tva_calculator', type, valeur);
};

// Tracking des erreurs
export const trackError = (type, message) => {
  trackEvent('error', 'tva_calculator', type, 1);
  
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: message,
      fatal: false
    });
  }
};

// Tracking des performances
export const trackPerformance = (metric) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'timing_complete', {
      name: metric.name,
      value: metric.value,
      event_category: 'performance'
    });
  }
};

export default {
  initGA,
  trackEvent,
  trackCalculation,
  trackCopy,
  trackError,
  trackPerformance
}; 
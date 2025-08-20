import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

const CalculateurHTTTC = () => {
  const [montantHT, setMontantHT] = useState('');
  const [montantTTC, setMontantTTC] = useState('');
  const [tauxTVA, setTauxTVA] = useState(20);
  const [champActif, setChampActif] = useState('HT'); // 'HT' ou 'TTC'
  const [resultat, setResultat] = useState({
    montantHT: 0,
    montantTVA: 0,
    montantTTC: 0
  });
  const [erreurs, setErreurs] = useState({ HT: '', TTC: '' });
  const [focusStates, setFocusStates] = useState({ HT: false, TTC: false });
  const [copieFeedback, setCopieFeedback] = useState({ HT: false, TTC: false, TVA: false, TTCResult: false });

  const tauxTVADisponibles = [20, 10, 5.5, 2.1];

  // Formatage automatique des montants
  const formaterInput = (valeur) => {
    if (!valeur) return '';
    
    // Supprimer tous les caractères non numériques sauf le point
    let nettoye = valeur.replace(/[^\d.]/g, '');
    
    // S'assurer qu'il n'y a qu'un seul point décimal
    const parties = nettoye.split('.');
    if (parties.length > 2) {
      nettoye = parties[0] + '.' + parties.slice(1).join('');
    }
    
    // Limiter à 2 décimales
    if (parties.length === 2 && parties[1].length > 2) {
      nettoye = parties[0] + '.' + parties[1].substring(0, 2);
    }
    
    return nettoye;
  };

  // Validation des inputs
  const validerInput = (valeur, type) => {
    if (!valeur) {
      setErreurs(prev => ({ ...prev, [type]: '' }));
      return { valide: true, valeur: '' };
    }
    
    const nombre = parseFloat(valeur);
    
    if (isNaN(nombre)) {
      setErreurs(prev => ({ ...prev, [type]: 'Veuillez entrer un nombre valide' }));
      return { valide: false, valeur: '' };
    }
    
    if (nombre < 0) {
      setErreurs(prev => ({ ...prev, [type]: 'Le montant doit être positif' }));
      return { valide: false, valeur: '' };
    }
    
    if (nombre > 999999999.99) {
      setErreurs(prev => ({ ...prev, [type]: 'Montant trop élevé (max: 999 999 999,99 €)' }));
      return { valide: false, valeur: '' };
    }
    
    setErreurs(prev => ({ ...prev, [type]: '' }));
    return { valide: true, valeur: nombre };
  };

  const calculerDepuisHT = useCallback((ht) => {
    if (!ht || isNaN(ht) || ht <= 0) {
      setMontantTTC('');
      setResultat({
        montantHT: 0,
        montantTVA: 0,
        montantTTC: 0
      });
      return;
    }

    const montantHT = parseFloat(ht);
    const montantTVA = montantHT * (tauxTVA / 100);
    const montantTTC = montantHT + montantTVA;

    setMontantTTC(montantTTC.toFixed(2));
    setResultat({
      montantHT,
      montantTVA,
      montantTTC
    });
  }, [tauxTVA]);

  const calculerDepuisTTC = useCallback((ttc) => {
    if (!ttc || isNaN(ttc) || ttc <= 0) {
      setMontantHT('');
      setResultat({
        montantHT: 0,
        montantTVA: 0,
        montantTTC: 0
      });
      return;
    }

    const montantTTC = parseFloat(ttc);
    const montantHT = montantTTC / (1 + tauxTVA / 100);
    const montantTVA = montantTTC - montantHT;

    setMontantHT(montantHT.toFixed(2));
    setResultat({
      montantHT,
      montantTVA,
      montantTTC
    });
  }, [tauxTVA]);

  const handleHTChange = (e) => {
    const valeurBrute = e.target.value;
    const valeurFormatee = formaterInput(valeurBrute);
    setMontantHT(valeurFormatee);
    setChampActif('HT');
    
    if (valeurFormatee) {
      const validation = validerInput(valeurFormatee, 'HT');
      if (validation.valide) {
        calculerDepuisHT(validation.valeur);
      } else {
        setMontantTTC('');
        setResultat({
          montantHT: 0,
          montantTVA: 0,
          montantTTC: 0
        });
      }
    } else {
      setMontantTTC('');
      setResultat({
        montantHT: 0,
        montantTVA: 0,
        montantTTC: 0
      });
    }
  };

  const handleTTCChange = (e) => {
    const valeurBrute = e.target.value;
    const valeurFormatee = formaterInput(valeurBrute);
    setMontantTTC(valeurFormatee);
    setChampActif('TTC');
    
    if (valeurFormatee) {
      const validation = validerInput(valeurFormatee, 'TTC');
      if (validation.valide) {
        calculerDepuisTTC(validation.valeur);
      } else {
        setMontantHT('');
        setResultat({
          montantHT: 0,
          montantTVA: 0,
          montantTTC: 0
        });
      }
    } else {
      setMontantHT('');
      setResultat({
        montantHT: 0,
        montantTVA: 0,
        montantTTC: 0
      });
    }
  };

  const handleTVAChange = (nouveauTaux) => {
    setTauxTVA(nouveauTaux);
    
    // Recalculer basé sur le champ actif
    if (champActif === 'HT' && montantHT) {
      const validation = validerInput(montantHT, 'HT');
      if (validation.valide) {
        calculerDepuisHT(validation.valeur);
      }
    } else if (champActif === 'TTC' && montantTTC) {
      const validation = validerInput(montantTTC, 'TTC');
      if (validation.valide) {
        calculerDepuisTTC(validation.valeur);
      }
    }
  };

  const handleFocus = (type) => {
    setFocusStates(prev => ({ ...prev, [type]: true }));
  };

  const handleBlur = (type) => {
    setFocusStates(prev => ({ ...prev, [type]: false }));
  };

  const formaterMontant = (montant) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(montant);
  };

  const copierValeur = async (valeur, type) => {
    if (!valeur || valeur === 0) return;
    
    try {
      await navigator.clipboard.writeText(formaterMontant(valeur));
      
      // Afficher le feedback
      setCopieFeedback(prev => ({ ...prev, [type]: true }));
      
      // Masquer le feedback après 1 seconde (au lieu de 2)
      setTimeout(() => {
        setCopieFeedback(prev => ({ ...prev, [type]: false }));
      }, 1000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  };

  const getInputClasses = (type) => {
    const baseClasses = "w-full px-5 py-4 border-2 rounded-xl text-xl transition-all duration-300 focus:outline-none focus:shadow-lg focus:-translate-y-1 group-hover:border-gray-300";
    
    if (erreurs[type]) {
      return `${baseClasses} border-red-300 bg-red-50 focus:border-red-500 focus:bg-white`;
    }
    
    if (focusStates[type]) {
      return `${baseClasses} border-indigo-500 bg-white shadow-lg -translate-y-1`;
    }
    
    return `${baseClasses} border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 focus:border-indigo-500 focus:bg-white`;
  };

  const BoutonCopie = ({ valeur, type, position = 'right' }) => (
    <button
      onClick={() => copierValeur(valeur, type)}
      disabled={!valeur || valeur === 0}
      className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all duration-200 hover:bg-indigo-100 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed group`}
      title="Copier la valeur"
      aria-label={`Copier ${formaterMontant(valeur)} dans le presse-papiers`}
      aria-describedby={`copie-${type}`}
    >
      {copieFeedback[type] ? (
        <div id={`copie-${type}`} className="text-green-600 font-medium text-xs animate-scale-in" role="status" aria-live="polite">
          ✓ Copié!
        </div>
      ) : (
        <svg 
          className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" 
          />
        </svg>
      )}
    </button>
  );

  const CardResultat = ({ titre, valeur, type, couleur, sousTitre }) => (
    <div 
      onClick={() => copierValeur(valeur, type)}
      className={`text-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 relative cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105 hover:border-${couleur}-200 group`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          copierValeur(valeur, type);
        }
      }}
      aria-label={`Cliquer pour copier ${formaterMontant(valeur)}`}
    >
      {copieFeedback[type] ? (
        <div className="absolute inset-0 bg-green-50 border-2 border-green-200 rounded-xl flex items-center justify-center z-10 animate-pulse">
          <div className="text-green-600 font-bold text-lg flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copié !
          </div>
        </div>
      ) : (
        <>
          <div className={`text-2xl font-bold text-${couleur}-600 mb-1`}>
            {formaterMontant(valeur)}
          </div>
          <div className="text-sm text-gray-600">{sousTitre}</div>
        </>
      )}
      
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 font-sans relative overflow-hidden" role="main" aria-label="Calculateur HT/TTC">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>
      
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-2xl border border-white/20 animate-fade-in relative z-10" role="region" aria-labelledby="calculateur-title">
        <h1 id="calculateur-title" className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Calculateur HT/TTC
        </h1>
        
        {/* Champs de saisie */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8" aria-labelledby="saisie-title">
          <h2 id="saisie-title" className="sr-only">Saisie des montants</h2>
          
          <div className="space-y-3">
            <label htmlFor="montantHT" className="block text-gray-700 font-semibold text-lg">
              Montant HT
            </label>
            <div className="relative group">
              <input
                type="text"
                id="montantHT"
                value={montantHT}
                onChange={handleHTChange}
                onFocus={() => handleFocus('HT')}
                onBlur={() => handleBlur('HT')}
                placeholder="Ex: 100.00"
                className={getInputClasses('HT')}
                inputMode="decimal"
                aria-describedby="erreur-HT"
                aria-label="Saisir le montant hors taxes"
              />
              <div className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 font-medium" aria-hidden="true">€</div>
              <BoutonCopie valeur={parseFloat(montantHT)} type="HT" />
            </div>
            {erreurs.HT && (
              <div id="erreur-HT" className="text-red-500 text-sm animate-slide-in-left" role="alert" aria-live="polite">
                ⚠️ {erreurs.HT}
              </div>
            )}
          </div>

          <div className="space-y-3">
            <label htmlFor="montantTTC" className="block text-gray-700 font-semibold text-lg">
              Montant TTC
            </label>
            <div className="relative group">
              <input
                type="text"
                id="montantTTC"
                value={montantTTC}
                onChange={handleTTCChange}
                onFocus={() => handleFocus('TTC')}
                onBlur={() => handleBlur('TTC')}
                placeholder="Ex: 120.00"
                className={getInputClasses('TTC')}
                inputMode="decimal"
                aria-describedby="erreur-TTC"
                aria-label="Saisir le montant toutes taxes comprises"
              />
              <div className="absolute right-20 top-1/2 -translate-y-1/2 text-gray-400 font-medium" aria-hidden="true">€</div>
              <BoutonCopie valeur={parseFloat(montantTTC)} type="TTC" />
            </div>
            {erreurs.TTC && (
              <div id="erreur-TTC" className="text-red-500 text-sm animate-slide-in-right" role="alert" aria-live="polite">
                ⚠️ {erreurs.TTC}
              </div>
            )}
          </div>
        </section>

        {/* Boutons TVA */}
        <section className="mb-8" aria-labelledby="tva-title">
          <h2 id="tva-title" className="block text-gray-700 font-semibold mb-4 text-lg">
            Taux de TVA
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3" role="group" aria-label="Sélection du taux de TVA">
            {tauxTVADisponibles.map((taux) => (
              <button
                key={taux}
                onClick={() => handleTVAChange(taux)}
                className={`px-4 py-3 border-2 rounded-xl font-semibold text-base cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  tauxTVA === taux 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-500 shadow-xl scale-105' 
                    : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border-gray-200 hover:border-indigo-300 hover:shadow-md'
                }`}
                aria-checked={tauxTVA === taux}
                aria-label={`Sélectionner le taux de TVA de ${taux}%`}
                role="radio"
              >
                {taux}%
              </button>
            ))}
          </div>
        </section>

        {/* Résultats détaillés */}
        <section className="space-y-6" aria-labelledby="resultats-title">
          <h2 id="resultats-title" className="sr-only">Résultats du calcul</h2>
          
          {/* Résumé principal */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100 shadow-lg" role="region" aria-labelledby="resume-title">
            <h3 id="resume-title" className="text-lg font-semibold text-gray-800 mb-4 text-center">Résumé du calcul</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <CardResultat 
                titre="Montant HT"
                valeur={resultat.montantHT}
                type="HT"
                couleur="indigo"
                sousTitre="Montant HT"
              />
              
              <CardResultat 
                titre="TVA"
                valeur={resultat.montantTVA}
                type="TVA"
                couleur="purple"
                sousTitre={`TVA (${tauxTVA}%)`}
              />
              
              <CardResultat 
                titre="Montant TTC"
                valeur={resultat.montantTTC}
                type="TTCResult"
                couleur="pink"
                sousTitre="Montant TTC"
              />
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="space-y-6" aria-labelledby="faq-title">
          <h2 id="faq-title" className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Questions Fréquentes - Calculateur HT/TTC
          </h2>
          
          <div className="space-y-4">
            {/* Question 1 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Comment calculer la TVA à 20% avec le calculateur HT/TTC ?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p className="mb-3">Pour calculer la TVA à 20% avec notre calculateur HT/TTC :</p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li>Saisissez votre montant HT dans le champ "Montant HT"</li>
                    <li>Sélectionnez le taux de TVA 20% dans les boutons de taux</li>
                    <li>Le calculateur affiche automatiquement le montant TTC et la TVA</li>
                    <li>Utilisez le bouton de copie pour récupérer le résultat</li>
                  </ol>
                  <p className="mt-3 text-sm text-gray-600">💡 <strong>Astuce :</strong> Vous pouvez aussi saisir le montant TTC pour calculer le montant HT correspondant.</p>
                </div>
              </details>
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Quelle est la différence entre HT et TTC dans le calcul de TVA ?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p className="mb-3">La différence entre HT et TTC est fondamentale pour comprendre le calcul de TVA :</p>
                  <ul className="space-y-2 ml-4">
                    <li><strong>HT (Hors Taxes) :</strong> Montant sans la TVA, c'est le prix de base</li>
                    <li><strong>TTC (Toutes Taxes Comprises) :</strong> Montant final incluant la TVA</li>
                    <li><strong>Formule :</strong> TTC = HT + (HT × Taux TVA)</li>
                    <li><strong>Exemple :</strong> 100€ HT + 20% TVA = 120€ TTC</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">🔍 <strong>Notre calculateur HT/TTC</strong> vous permet de passer facilement d'un montant à l'autre.</p>
                </div>
              </details>
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Quels sont les taux de TVA en France et comment les utiliser ?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p className="mb-3">La France applique plusieurs taux de TVA selon le type de produit ou service :</p>
                  <ul className="space-y-2 ml-4">
                    <li><strong>20% (Taux normal) :</strong> La plupart des biens et services</li>
                    <li><strong>10% (Taux réduit) :</strong> Restauration, transports, travaux de rénovation</li>
                    <li><strong>5.5% (Taux réduit) :</strong> Livres, énergies renouvelables, équipements pour handicapés</li>
                    <li><strong>2.1% (Taux particulier) :</strong> Médicaments remboursés, presse</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">✅ <strong>Notre calculateur HT/TTC</strong> supporte tous ces taux pour des calculs précis.</p>
                </div>
              </details>
            </div>

            {/* Question 4 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Comment utiliser le calculateur HT/TTC pour la comptabilité ?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p className="mb-3">Notre calculateur HT/TTC est parfait pour vos besoins comptables :</p>
                  <ul className="space-y-2 ml-4">
                    <li><strong>Calculs rapides :</strong> Obtenez instantanément HT, TTC et TVA</li>
                    <li><strong>Précision :</strong> Résultats arrondis à 2 décimales selon les normes comptables</li>
                    <li><strong>Copie facile :</strong> Boutons de copie pour intégrer dans vos documents</li>
                    <li><strong>Multi-taux :</strong> Support de tous les taux de TVA français</li>
                    <li><strong>Gratuit :</strong> Aucun coût pour un outil professionnel</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">💼 <strong>Idéal pour :</strong> Comptables, entrepreneurs, auto-entrepreneurs, particuliers.</p>
                </div>
              </details>
            </div>

            {/* Question 5 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Le calculateur HT/TTC est-il fiable pour mes déclarations fiscales ?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p className="mb-3">Notre calculateur HT/TTC offre une fiabilité maximale :</p>
                  <ul className="space-y-2 ml-4">
                    <li><strong>Calculs vérifiés :</strong> Algorithmes testés et validés</li>
                    <li><strong>Taux à jour :</strong> Conformité avec la réglementation française</li>
                    <li><strong>Précision :</strong> Résultats conformes aux exigences fiscales</li>
                    <li><strong>Traçabilité :</strong> Historique des calculs dans votre session</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">⚠️ <strong>Note importante :</strong> Ce calculateur est un outil d'aide, mais la responsabilité finale incombe à l'utilisateur.</p>
                </div>
              </details>
            </div>

            {/* Question 6 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                  <h3 className="text-lg font-semibold text-gray-800">
                    Comment calculer la TVA en sens inverse (de TTC vers HT) ?
                  </h3>
                  <svg className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-700">
                  <p className="mb-3">Notre calculateur HT/TTC permet le calcul dans les deux sens :</p>
                  <ul className="space-y-2 ml-4">
                    <li><strong>HT → TTC :</strong> Saisissez le montant HT, obtenez TTC et TVA</li>
                    <li><strong>TTC → HT :</strong> Saisissez le montant TTC, obtenez HT et TVA</li>
                    <li><strong>Formule inverse :</strong> HT = TTC ÷ (1 + Taux TVA)</li>
                    <li><strong>Exemple :</strong> 120€ TTC ÷ 1.20 = 100€ HT</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-600">🔄 <strong>Flexibilité totale :</strong> Travaillez avec vos données disponibles, peu importe le format.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
      </div>

        {/* Footer avec mentions légales */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Calculateur HT/TTC</h3>
                <p className="text-gray-300 text-sm">
                  Outil gratuit et professionnel pour vos calculs de TVA. 
                  Simple, rapide et précis.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Informations légales</h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li><Link to="/mentions-legales" className="hover:text-indigo-400 transition-colors">Mentions légales</Link></li>
                  <li><Link to="/politique-confidentialite" className="hover:text-indigo-400 transition-colors">Politique de confidentialité</Link></li>
                  <li><a href="mailto:contact@calculateur-tva.skylogistics.fr" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-300 text-sm">
                  Questions ou suggestions ?<br/>
                  <a href="mailto:contact@calculateur-tva.skylogistics.fr" className="text-indigo-400 hover:text-indigo-300">
                    contact@calculateur-tva.skylogistics.fr
                  </a>
                </p>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 Calculateur-TVA. Tous droits réservés. 
                Ce calculateur est fourni à titre informatif et ne constitue pas un conseil fiscal.
              </p>
            </div>
          </div>
        </footer>
    </main>
  );
};

export default CalculateurHTTTC; 
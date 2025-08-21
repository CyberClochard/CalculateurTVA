import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  // Données structurées FAQ Schema.org
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Comment calculer la TVA à 20% avec le calculateur HT/TTC ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pour calculer la TVA à 20% : saisissez votre montant HT, sélectionnez le taux 20%, le calculateur affiche automatiquement le montant TTC et la TVA. Vous pouvez aussi saisir le montant TTC pour calculer le montant HT correspondant."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la différence entre HT et TTC dans le calcul de TVA ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HT (Hors Taxes) : montant sans la TVA, c'est le prix de base. TTC (Toutes Taxes Comprises) : montant final incluant la TVA. Formule : TTC = HT + (HT × Taux TVA). Exemple : 100€ HT + 20% TVA = 120€ TTC."
        }
      },
      {
        "@type": "Question",
        "name": "Quels sont les taux de TVA en France et comment les utiliser ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "20% (Taux normal) : la plupart des biens et services. 10% (Taux réduit) : restauration, transports, travaux de rénovation. 5.5% (Taux réduit) : livres, énergies renouvelables. 2.1% (Taux particulier) : médicaments remboursés, presse."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>
      
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-5xl border border-white/20 animate-fade-in relative z-10">
        {/* Données structurées JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Questions Fréquentes
          </h1>
          <p className="text-gray-600 text-lg">
            Tout ce que vous devez savoir sur notre calculateur HT/TTC
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Calculateur de TVA gratuit et professionnel
          </p>
        </div>

        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl shadow-sm border border-indigo-100 overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-indigo-100/50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Comment calculer la TVA à 20% avec le calculateur HT/TTC ?
                </h3>
                <svg className="w-5 h-5 text-indigo-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Icône de déroulement">
                  <title>Cliquer pour développer la réponse</title>
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
                <p className="mt-3 text-sm text-indigo-600">💡 <strong>Astuce :</strong> Vous pouvez aussi saisir le montant TTC pour calculer le montant HT correspondant.</p>
              </div>
            </details>
          </div>

          {/* Question 2 */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-sm border border-purple-100 overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-purple-100/50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Quelle est la différence entre HT et TTC dans le calcul de TVA ?
                </h3>
                <svg className="w-5 h-5 text-purple-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" role="img" aria-label="Icône de déroulement">
                  <title>Cliquer pour développer la réponse</title>
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
                <p className="mt-3 text-sm text-purple-600">🔍 <strong>Notre calculateur HT/TTC</strong> vous permet de passer facilement d'un montant à l'autre.</p>
              </div>
            </details>
          </div>

          {/* Question 3 */}
          <div className="bg-gradient-to-r from-pink-50 to-indigo-50 rounded-xl shadow-sm border border-pink-100 overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-pink-100/50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Quels sont les taux de TVA en France et comment les utiliser ?
                </h3>
                <svg className="w-5 h-5 text-pink-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <p className="mt-3 text-sm text-pink-600">✅ <strong>Notre calculateur HT/TTC</strong> supporte tous ces taux pour des calculs précis.</p>
              </div>
            </details>
          </div>

          {/* Question 4 */}
          <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl shadow-sm border border-indigo-100 overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-indigo-100/50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Comment utiliser le calculateur HT/TTC pour la comptabilité ?
                </h3>
                <svg className="w-5 h-5 text-indigo-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <p className="mt-3 text-sm text-indigo-600">💼 <strong>Idéal pour :</strong> Comptables, entrepreneurs, auto-entrepreneurs, particuliers.</p>
              </div>
            </details>
          </div>

          {/* Question 5 */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-sm border border-green-100 overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-green-100/50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Le calculateur HT/TTC est-il fiable pour mes déclarations fiscales ?
                </h3>
                <svg className="w-5 h-5 text-green-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <p className="mt-3 text-sm text-green-600">⚠️ <strong>Note importante :</strong> Ce calculateur est un outil d'aide, mais la responsabilité finale incombe à l'utilisateur.</p>
              </div>
            </details>
          </div>

          {/* Question 6 */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-sm border border-amber-100 overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-amber-100/50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Comment calculer la TVA en sens inverse (de TTC vers HT) ?
                </h3>
                <svg className="w-5 h-5 text-amber-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <p className="mt-3 text-sm text-amber-600">🔄 <strong>Flexibilité totale :</strong> Travaillez avec vos données disponibles, peu importe le format.</p>
              </div>
            </details>
          </div>

          {/* Question 7 - Nouvelle question SEO */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl shadow-sm border border-cyan-100 overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-cyan-100/50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Quels sont les avantages d'un calculateur HT/TTC en ligne ?
                </h3>
                <svg className="w-5 h-5 text-cyan-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p className="mb-3">Un calculateur HT/TTC en ligne offre de nombreux avantages :</p>
                <ul className="space-y-2 ml-4">
                  <li><strong>Accessibilité :</strong> Disponible 24h/24 depuis n'importe quel appareil</li>
                  <li><strong>Gratuité :</strong> Aucun coût d'installation ou d'abonnement</li>
                  <li><strong>Mise à jour automatique :</strong> Taux de TVA toujours à jour</li>
                  <li><strong>Précision :</strong> Calculs automatisés sans risque d'erreur humaine</li>
                  <li><strong>Multi-plateforme :</strong> Fonctionne sur ordinateur, tablette et mobile</li>
                  <li><strong>Pas d'installation :</strong> Utilisation immédiate sans téléchargement</li>
                </ul>
                <p className="mt-3 text-sm text-cyan-600">🚀 <strong>Notre calculateur</strong> combine tous ces avantages avec une interface moderne et intuitive.</p>
              </div>
            </details>
          </div>

          {/* Question 8 - Nouvelle question SEO */}
          <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl shadow-sm border border-violet-100 overflow-hidden">
            <details className="group">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-violet-100/50 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Comment utiliser le calculateur HT/TTC sur mobile ?
                </h3>
                <svg className="w-5 h-5 text-violet-500 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-gray-700">
                <p className="mb-3">Notre calculateur HT/TTC est parfaitement optimisé pour mobile :</p>
                <ul className="space-y-2 ml-4">
                  <li><strong>Interface responsive :</strong> S'adapte automatiquement à tous les écrans</li>
                  <li><strong>Navigation tactile :</strong> Boutons et champs optimisés pour le toucher</li>
                  <li><strong>Clavier numérique :</strong> Affichage automatique du clavier numérique</li>
                  <li><strong>Copie simplifiée :</strong> Boutons de copie faciles à utiliser sur mobile</li>
                  <li><strong>Chargement rapide :</strong> Optimisé pour les connexions mobiles</li>
                  <li><strong>Pas d'app :</strong> Utilisez directement dans votre navigateur</li>
                </ul>
                <p className="mt-3 text-sm text-violet-600">📱 <strong>Idéal pour :</strong> Calculs rapides en déplacement, sur chantier, en réunion.</p>
              </div>
            </details>
          </div>
        </div>

        {/* Actions */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 font-semibold">
              ← Retour au calculateur HT/TTC
            </Link>
            <a href="mailto:contact@calculateur-tva.skylogistics.fr" className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200 font-semibold">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FAQ; 
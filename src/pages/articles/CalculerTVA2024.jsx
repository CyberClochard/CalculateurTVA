import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CalculerTVA2024 = () => {
  // Données structurées Article Schema.org
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Comment calculer la TVA en 2024 : Guide complet",
    "description": "Guide complet pour calculer la TVA en 2024 avec les taux en vigueur et des exemples pratiques. Découvrez comment utiliser notre calculateur HT/TTC efficacement.",
    "image": "https://calculateur-tva.skylogistics.fr/api/placeholder/800/400",
    "author": {
      "@type": "Organization",
      "name": "Calculateur-TVA",
      "url": "https://calculateur-tva.skylogistics.fr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Calculateur-TVA",
      "url": "https://calculateur-tva.skylogistics.fr"
    },
    "datePublished": "2024-12-19",
    "dateModified": "2024-12-19",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://calculateur-tva.skylogistics.fr/articles/calculer-tva-2024"
    },
    "articleSection": "Guide",
    "keywords": "calculer TVA 2024, taux TVA France, calculateur HT TTC, TVA 20%, TVA 10%, TVA 5.5%",
    "wordCount": 2500
  };

  return (
    <>
      <Helmet>
        <title>Comment calculer la TVA en 2024 : Guide complet | Calculateur HT/TTC</title>
        <meta name="description" content="Guide complet pour calculer la TVA en 2024 avec les taux en vigueur et des exemples pratiques. Découvrez comment utiliser notre calculateur HT/TTC efficacement." />
        <meta name="keywords" content="calculer TVA 2024, taux TVA France, calculateur HT TTC, TVA 20%, TVA 10%, TVA 5.5%, guide TVA" />
        <meta name="author" content="Calculateur-TVA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://calculateur-tva.skylogistics.fr/articles/calculer-tva-2024" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Comment calculer la TVA en 2024 : Guide complet" />
        <meta property="og:description" content="Guide complet pour calculer la TVA en 2024 avec les taux en vigueur et des exemples pratiques." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://calculateur-tva.skylogistics.fr/articles/calculer-tva-2024" />
        <meta property="og:image" content="https://calculateur-tva.skylogistics.fr/api/placeholder/800/400" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Comment calculer la TVA en 2024 : Guide complet" />
        <meta name="twitter:description" content="Guide complet pour calculer la TVA en 2024 avec les taux en vigueur." />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 font-sans relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" aria-hidden="true"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>
        
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-4xl border border-white/20 animate-fade-in relative z-10">
          {/* Données structurées JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          
          {/* En-tête de l'article */}
          <header className="text-center mb-12">
            <div className="mb-4">
              <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-4 py-2 rounded-full">
                Guide
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Comment calculer la TVA en 2024 : Guide complet
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Guide complet pour calculer la TVA en 2024 avec les taux en vigueur et des exemples pratiques
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>📅 19 décembre 2024</span>
              <span>📖 8 min de lecture</span>
              <span>👁️ 2.5k vues</span>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-8 border border-indigo-100">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">🚀 Utilisez notre calculateur HT/TTC</h2>
              <p className="text-gray-700 mb-4">
                Besoin de calculer la TVA rapidement ? Notre <strong>calculateur HT/TTC gratuit</strong> vous donne instantanément les résultats avec tous les taux de TVA français.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200"
              >
                🧮 Calculer la TVA maintenant
              </Link>
            </div>

            <h2>📊 Les taux de TVA en vigueur en 2024</h2>
            <p>
              En France, plusieurs taux de TVA s'appliquent selon le type de produit ou service. Voici les taux en vigueur pour 2024 :
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-2">✅ Taux normal : 20%</h3>
                <p className="text-green-700">La plupart des biens et services (vêtements, électronique, services professionnels...)</p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-bold text-blue-800 mb-2">🔵 Taux réduit : 10%</h3>
                <p className="text-blue-700">Restauration, transports, travaux de rénovation, hébergement touristique</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-xl font-bold text-purple-800 mb-2">🟣 Taux réduit : 5.5%</h3>
                <p className="text-purple-700">Livres, énergies renouvelables, équipements pour handicapés, cantines scolaires</p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                <h3 className="text-xl font-bold text-pink-800 mb-2">🩷 Taux particulier : 2.1%</h3>
                <p className="text-pink-700">Médicaments remboursés, presse, spectacles vivants</p>
              </div>
            </div>

            <h2>🧮 Formules de calcul de la TVA</h2>
            <p>
              Pour calculer la TVA, vous devez maîtriser ces formules essentielles :
            </p>

            <div className="bg-gray-50 p-6 rounded-xl my-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Formules principales :</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>TVA = HT × (Taux TVA ÷ 100)</strong></li>
                <li><strong>TTC = HT + TVA</strong></li>
                <li><strong>TTC = HT × (1 + Taux TVA ÷ 100)</strong></li>
                <li><strong>HT = TTC ÷ (1 + Taux TVA ÷ 100)</strong></li>
              </ul>
            </div>

            <h2>💡 Exemples pratiques de calcul</h2>
            
            <h3>Exemple 1 : Calcul de HT vers TTC</h3>
            <p>
              Vous vendez un produit à <strong>100€ HT</strong> avec un taux de TVA de <strong>20%</strong> :
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg my-4">
              <p className="text-indigo-800">
                <strong>TVA = 100 × (20 ÷ 100) = 100 × 0.20 = 20€</strong><br/>
                <strong>TTC = 100 + 20 = 120€</strong>
              </p>
            </div>

            <h3>Exemple 2 : Calcul de TTC vers HT</h3>
            <p>
              Vous achetez un service à <strong>110€ TTC</strong> avec un taux de TVA de <strong>10%</strong> :
            </p>
            <div className="bg-purple-50 p-4 rounded-lg my-4">
              <p className="text-purple-800">
                <strong>HT = 110 ÷ (1 + 10 ÷ 100) = 110 ÷ 1.10 = 100€</strong><br/>
                <strong>TVA = 110 - 100 = 10€</strong>
              </p>
            </div>

            <h2>🛠️ Comment utiliser notre calculateur HT/TTC</h2>
            <p>
              Notre calculateur en ligne simplifie grandement ces calculs. Voici comment l'utiliser :
            </p>
            
            <ol className="list-decimal list-inside space-y-3 my-6">
              <li><strong>Saisissez votre montant</strong> dans le champ HT ou TTC selon ce que vous connaissez</li>
              <li><strong>Sélectionnez le taux de TVA</strong> approprié (20%, 10%, 5.5% ou 2.1%)</li>
              <li><strong>Le calculateur affiche automatiquement</strong> tous les montants (HT, TVA, TTC)</li>
              <li><strong>Utilisez le bouton de copie</strong> pour récupérer le résultat dans votre presse-papiers</li>
            </ol>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">💡 Astuce pratique</h3>
              <p className="text-yellow-700">
                Vous pouvez saisir soit le montant HT, soit le montant TTC. Notre calculateur calcule automatiquement l'autre montant et la TVA correspondante !
              </p>
            </div>

            <h2>📱 Cas d'usage courants</h2>
            
            <h3>Pour les commerçants et artisans</h3>
            <p>
              Si vous vendez des produits à 50€ HT avec une TVA de 20% :
            </p>
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p className="text-green-800">
                <strong>Prix de vente TTC = 50 + (50 × 0.20) = 60€</strong><br/>
                <strong>Montant de TVA à collecter = 10€</strong>
              </p>
            </div>

            <h3>Pour les restaurateurs</h3>
            <p>
              Si vous servez un repas à 25€ TTC avec une TVA de 10% :
            </p>
            <div className="bg-blue-50 p-4 rounded-lg my-4">
              <p className="text-blue-800">
                <strong>Prix HT = 25 ÷ 1.10 = 22.73€</strong><br/>
                <strong>Montant de TVA = 25 - 22.73 = 2.27€</strong>
              </p>
            </div>

            <h2>⚠️ Points d'attention importants</h2>
            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Arrondis :</strong> La TVA est toujours arrondie au centime le plus proche</li>
              <li><strong>Exonérations :</strong> Certains secteurs sont exonérés de TVA (médical, éducation...)</li>
              <li><strong>Réversibilité :</strong> La TVA est réversible pour les entreprises assujetties</li>
              <li><strong>Déclaration :</strong> La TVA collectée doit être déclarée et reversée à l'État</li>
            </ul>

            <h2>🔗 Ressources utiles</h2>
            <p>
              Pour approfondir vos connaissances sur la TVA :
            </p>
            <ul className="list-disc list-inside space-y-2 my-6">
              <li><Link to="/faq" className="text-indigo-600 hover:text-indigo-800">Consultez notre FAQ</Link> pour des questions fréquentes</li>
              <li><Link to="/articles/tva-20-taux-normal" className="text-indigo-600 hover:text-indigo-800">Tout savoir sur la TVA 20%</Link></li>
              <li><Link to="/articles/ht-vs-ttc-comptabilite" className="text-indigo-600 hover:text-indigo-800">Comprendre la différence HT vs TTC</Link></li>
              <li><Link to="/articles/declaration-tva-2024" className="text-indigo-600 hover:text-indigo-800">Calendrier des déclarations TVA 2024</Link></li>
            </ul>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100 my-8 text-center">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4">Prêt à calculer la TVA ?</h2>
              <p className="text-gray-700 mb-6">
                Maintenant que vous maîtrisez les formules, utilisez notre calculateur HT/TTC pour des calculs rapides et précis !
              </p>
              <Link 
                to="/"
                className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                🧮 Commencer le calcul
              </Link>
            </div>
          </article>

          {/* Navigation et liens connexes */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Navigation</h3>
                <div className="space-y-2">
                  <Link to="/" className="block text-indigo-600 hover:text-indigo-800">← Retour au calculateur</Link>
                  <Link to="/articles" className="block text-indigo-600 hover:text-indigo-800">← Tous les articles</Link>
                  <Link to="/faq" className="block text-indigo-600 hover:text-indigo-800">← Questions fréquentes</Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Articles connexes</h3>
                <div className="space-y-2">
                  <Link to="/articles/tva-20-taux-normal" className="block text-indigo-600 hover:text-indigo-800">→ TVA 20% : Tout savoir sur le taux normal</Link>
                  <Link to="/articles/ht-vs-ttc-comptabilite" className="block text-indigo-600 hover:text-indigo-800">→ HT vs TTC : Comprendre la différence</Link>
                  <Link to="/articles/declaration-tva-2024" className="block text-indigo-600 hover:text-indigo-800">→ Déclaration TVA : Calendrier 2024</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default CalculerTVA2024; 
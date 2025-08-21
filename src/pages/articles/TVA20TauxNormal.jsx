import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const TVA20TauxNormal = () => {
  // Données structurées Article Schema.org
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "TVA 20% : Tout savoir sur le taux normal",
    "description": "Découvrez tout sur la TVA à 20%, le taux normal appliqué à la plupart des biens et services. Exemples concrets et cas d'usage.",
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
    "datePublished": "2024-12-18",
    "dateModified": "2024-12-18",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://calculateur-tva.skylogistics.fr/articles/tva-20-taux-normal"
    },
    "articleSection": "Taux TVA",
    "keywords": "TVA 20%, taux normal TVA, TVA France, calcul TVA 20%, biens services, taux standard",
    "wordCount": 2000
  };

  return (
    <>
      <Helmet>
        <title>TVA 20% : Tout savoir sur le taux normal | Calculateur HT/TTC</title>
        <meta name="description" content="Découvrez tout sur la TVA à 20%, le taux normal appliqué à la plupart des biens et services. Exemples concrets et cas d'usage." />
        <meta name="keywords" content="TVA 20%, taux normal TVA, TVA France, calcul TVA 20%, biens services, taux standard" />
        <meta name="author" content="Calculateur-TVA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://calculateur-tva.skylogistics.fr/articles/tva-20-taux-normal" />
        
        {/* Open Graph */}
        <meta property="og:title" content="TVA 20% : Tout savoir sur le taux normal" />
        <meta property="og:description" content="Découvrez tout sur la TVA à 20%, le taux normal appliqué à la plupart des biens et services." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://calculateur-tva.skylogistics.fr/articles/tva-20-taux-normal" />
        <meta property="og:image" content="https://calculateur-tva.skylogistics.fr/api/placeholder/800/400" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TVA 20% : Tout savoir sur le taux normal" />
        <meta name="twitter:description" content="Découvrez tout sur la TVA à 20%, le taux normal appliqué à la plupart des biens et services." />
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
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
                Taux TVA
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              TVA 20% : Tout savoir sur le taux normal
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Découvrez tout sur la TVA à 20%, le taux normal appliqué à la plupart des biens et services
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>📅 18 décembre 2024</span>
              <span>📖 6 min de lecture</span>
              <span>👁️ 1.8k vues</span>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 mb-8 border border-green-100">
              <h2 className="text-2xl font-bold text-green-800 mb-4">🧮 Calculez la TVA 20% facilement</h2>
              <p className="text-gray-700 mb-4">
                Utilisez notre <strong>calculateur HT/TTC gratuit</strong> pour calculer instantanément la TVA à 20% et convertir vos montants HT en TTC.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200"
              >
                🧮 Calculer TVA 20%
              </Link>
            </div>

            <h2>📊 Qu'est-ce que la TVA à 20% ?</h2>
            <p>
              La TVA à <strong>20%</strong> est le <strong>taux normal</strong> de la Taxe sur la Valeur Ajoutée en France. C'est le taux le plus élevé et le plus couramment appliqué. Il s'applique par défaut à la plupart des biens et services, sauf ceux qui bénéficient d'un taux réduit ou particulier.
            </p>

            <h2>🏪 Secteurs et produits concernés par la TVA 20%</h2>
            <p>
              La TVA à 20% s'applique à une très large gamme de produits et services :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">🛍️ Biens de consommation</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• Vêtements et chaussures</li>
                  <li>• Électronique et informatique</li>
                  <li>• Mobilier et décoration</li>
                  <li>• Cosmétiques et parfums</li>
                  <li>• Jouets et loisirs</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-lg font-bold text-purple-800 mb-3">💼 Services professionnels</h3>
                <ul className="text-purple-700 space-y-1">
                  <li>• Conseils et consulting</li>
                  <li>• Services informatiques</li>
                  <li>• Services juridiques</li>
                  <li>• Services de marketing</li>
                  <li>• Services de formation</li>
                </ul>
              </div>
            </div>

            <h2>🧮 Calcul de la TVA à 20% : Formules</h2>
            <p>
              Voici les formules essentielles pour calculer la TVA à 20% :
            </p>

            <div className="bg-gray-50 p-6 rounded-xl my-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Formules principales :</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>TVA = HT × 0.20</strong> (ou HT × 20%)</li>
                <li><strong>TTC = HT × 1.20</strong> (ou HT + TVA)</li>
                <li><strong>HT = TTC ÷ 1.20</strong></li>
                <li><strong>HT = TTC - TVA</strong></li>
              </ul>
            </div>

            <h2>💡 Exemples concrets de calcul</h2>
            
            <h3>Exemple 1 : Vente d'un produit</h3>
            <p>
              Vous vendez un smartphone à <strong>500€ HT</strong> :
            </p>
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p className="text-green-800">
                <strong>TVA = 500 × 0.20 = 100€</strong><br/>
                <strong>Prix TTC = 500 + 100 = 600€</strong><br/>
                <strong>Ou directement : 500 × 1.20 = 600€</strong>
              </p>
            </div>

            <h3>Exemple 2 : Achat d'un service</h3>
            <p>
              Vous achetez un service de consulting à <strong>1200€ TTC</strong> :
            </p>
            <div className="bg-blue-50 p-4 rounded-lg my-4">
              <p className="text-blue-800">
                <strong>Prix HT = 1200 ÷ 1.20 = 1000€</strong><br/>
                <strong>Montant TVA = 1200 - 1000 = 200€</strong>
              </p>
            </div>

            <h3>Exemple 3 : Calcul pour un panier d'achats</h3>
            <p>
              Votre panier contient : Vêtements (150€ HT) + Livres (30€ HT) + Services (80€ HT)
            </p>
            <div className="bg-purple-50 p-4 rounded-lg my-4">
              <p className="text-purple-800">
                <strong>Total HT = 150 + 30 + 80 = 260€</strong><br/>
                <strong>TVA vêtements (20%) = 150 × 0.20 = 30€</strong><br/>
                <strong>TVA livres (5.5%) = 30 × 0.055 = 1.65€</strong><br/>
                <strong>TVA services (20%) = 80 × 0.20 = 16€</strong><br/>
                <strong>Total TVA = 30 + 1.65 + 16 = 47.65€</strong><br/>
                <strong>Total TTC = 260 + 47.65 = 307.65€</strong>
              </p>
            </div>

            <h2>🛠️ Utilisation pratique avec notre calculateur</h2>
            <p>
              Notre calculateur HT/TTC simplifie grandement ces calculs. Voici comment procéder :
            </p>
            
            <ol className="list-decimal list-inside space-y-3 my-6">
              <li><strong>Saisissez votre montant</strong> dans le champ approprié (HT ou TTC)</li>
              <li><strong>Sélectionnez le taux 20%</strong> dans les boutons de taux de TVA</li>
              <li><strong>Le calculateur affiche automatiquement</strong> tous les montants</li>
              <li><strong>Utilisez les boutons de copie</strong> pour récupérer les résultats</li>
            </ol>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">💡 Astuce pratique</h3>
              <p className="text-yellow-700">
                Pour un calcul rapide mental, multipliez par 1.20 pour passer de HT à TTC, et divisez par 1.20 pour passer de TTC à HT !
              </p>
            </div>

            <h2>📱 Cas d'usage spécifiques</h2>
            
            <h3>Pour les e-commerçants</h3>
            <p>
              Si vous vendez en ligne des produits à 75€ HT :
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg my-4">
              <p className="text-indigo-800">
                <strong>Prix affiché TTC = 75 × 1.20 = 90€</strong><br/>
                <strong>TVA à collecter = 15€</strong><br/>
                <strong>Montant à reverser à l'État = 15€</strong>
              </p>
            </div>

            <h3>Pour les prestataires de services</h3>
            <p>
              Si vous facturez 200€ HT pour un service :
            </p>
            <div className="bg-pink-50 p-4 rounded-lg my-4">
              <p className="text-pink-800">
                <strong>Montant TTC à facturer = 200 × 1.20 = 240€</strong><br/>
                <strong>TVA collectée = 40€</strong><br/>
                <strong>Revenu net HT = 200€</strong>
              </p>
            </div>

            <h2>⚠️ Points d'attention importants</h2>
            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Arrondis :</strong> La TVA est toujours arrondie au centime le plus proche</li>
              <li><strong>Facturation :</strong> Toutes les factures doivent mentionner le montant HT, la TVA et le montant TTC</li>
              <li><strong>Déclaration :</strong> La TVA collectée doit être déclarée et reversée à l'État</li>
              <li><strong>Récupération :</strong> Les entreprises peuvent récupérer la TVA payée sur leurs achats</li>
              <li><strong>Exonérations :</strong> Certains secteurs sont exonérés de TVA (médical, éducation...)</li>
            </ul>

            <h2>🔗 Ressources utiles</h2>
            <p>
              Pour approfondir vos connaissances sur la TVA :
            </p>
            <ul className="list-disc list-inside space-y-2 my-6">
              <li><Link to="/articles/calculer-tva-2024" className="text-indigo-600 hover:text-indigo-800">Guide complet : Comment calculer la TVA en 2024</Link></li>
              <li><Link to="/articles/tva-reduite-10-5-5" className="text-indigo-600 hover:text-indigo-800">TVA réduite 10% et 5.5% : Secteurs concernés</Link></li>
              <li><Link to="/articles/ht-vs-ttc-comptabilite" className="text-indigo-600 hover:text-indigo-800">HT vs TTC : Comprendre la différence</Link></li>
              <li><Link to="/faq" className="text-indigo-600 hover:text-indigo-800">Consultez notre FAQ</Link> pour des questions fréquentes</li>
            </ul>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100 my-8 text-center">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Prêt à calculer la TVA 20% ?</h2>
              <p className="text-gray-700 mb-6">
                Maintenant que vous maîtrisez la TVA à 20%, utilisez notre calculateur HT/TTC pour des calculs rapides et précis !
              </p>
              <Link 
                to="/"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                🧮 Calculer maintenant
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
                  <Link to="/articles/calculer-tva-2024" className="block text-indigo-600 hover:text-indigo-800">→ Comment calculer la TVA en 2024 : Guide complet</Link>
                  <Link to="/articles/tva-reduite-10-5-5" className="block text-indigo-600 hover:text-indigo-800">→ TVA réduite 10% et 5.5% : Secteurs concernés</Link>
                  <Link to="/articles/ht-vs-ttc-comptabilite" className="block text-indigo-600 hover:text-indigo-800">→ HT vs TTC : Comprendre la différence</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default TVA20TauxNormal; 
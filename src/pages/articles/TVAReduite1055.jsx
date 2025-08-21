import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const TVAReduite1055 = () => {
  // Données structurées Article Schema.org
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "TVA réduite 10% et 5.5% : Secteurs concernés",
    "description": "Guide complet sur les taux de TVA réduits 10% et 5.5% : secteurs d'activité, produits concernés et cas d'application.",
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
    "datePublished": "2024-12-17",
    "dateModified": "2024-12-17",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://calculateur-tva.skylogistics.fr/articles/tva-reduite-10-5-5"
    },
    "articleSection": "Taux TVA",
    "keywords": "TVA réduite 10%, TVA 5.5%, taux réduit TVA, secteurs TVA réduite, restauration, transport, logement",
    "wordCount": 2200
  };

  return (
    <>
      <Helmet>
        <title>TVA réduite 10% et 5.5% : Secteurs concernés | Calculateur HT/TTC</title>
        <meta name="description" content="Guide complet sur les taux de TVA réduits 10% et 5.5% : secteurs d'activité, produits concernés et cas d'application." />
        <meta name="keywords" content="TVA réduite 10%, TVA 5.5%, taux réduit TVA, secteurs TVA réduite, restauration, transport, logement" />
        <meta name="author" content="Calculateur-TVA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://calculateur-tva.skylogistics.fr/articles/tva-reduite-10-5-5" />
        
        {/* Open Graph */}
        <meta property="og:title" content="TVA réduite 10% et 5.5% : Secteurs concernés" />
        <meta property="og:description" content="Guide complet sur les taux de TVA réduits 10% et 5.5% : secteurs d'activité, produits concernés et cas d'application." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://calculateur-tva.skylogistics.fr/articles/tva-reduite-10-5-5" />
        <meta property="og:image" content="https://calculateur-tva.skylogistics.fr/api/placeholder/800/400" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TVA réduite 10% et 5.5% : Secteurs concernés" />
        <meta name="twitter:description" content="Guide complet sur les taux de TVA réduits 10% et 5.5% : secteurs d'activité, produits concernés et cas d'application." />
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
              <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full">
                Taux TVA
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              TVA réduite 10% et 5.5% : Secteurs concernés
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Guide complet sur les taux de TVA réduits et leurs secteurs d'application
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>📅 17 décembre 2024</span>
              <span>📖 7 min de lecture</span>
              <span>👁️ 2.1k vues</span>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-6 mb-8 border border-orange-100">
              <h2 className="text-2xl font-bold text-orange-800 mb-4">🧮 Calculez la TVA réduite facilement</h2>
              <p className="text-gray-700 mb-4">
                Utilisez notre <strong>calculateur HT/TTC gratuit</strong> pour calculer instantanément la TVA à 10% et 5.5% et convertir vos montants.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-700 hover:to-yellow-700 transition-all duration-200"
              >
                🧮 Calculer TVA réduite
              </Link>
            </div>

            <h2>📊 Comprendre les taux de TVA réduits</h2>
            <p>
              En France, il existe <strong>trois taux de TVA</strong> principaux : le taux normal à 20%, et deux taux réduits à <strong>10%</strong> et <strong>5.5%</strong>. Ces taux réduits sont appliqués à des secteurs spécifiques pour soutenir certaines activités économiques et réduire la charge fiscale sur des biens et services essentiels.
            </p>

            <h2>🏪 TVA à 10% : Secteurs et produits concernés</h2>
            <p>
              La TVA à 10% s'applique à plusieurs secteurs importants de l'économie française :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-3">🍽️ Restauration et alimentation</h3>
                <ul className="text-orange-700 space-y-1">
                  <li>• Restauration sur place</li>
                  <li>• Restauration à emporter</li>
                  <li>• Vente de boissons alcoolisées</li>
                  <li>• Services de traiteur</li>
                  <li>• Cantines d'entreprise</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <h3 className="text-lg font-bold text-yellow-800 mb-3">🏠 Logement et immobilier</h3>
                <ul className="text-yellow-700 space-y-1">
                  <li>• Travaux de rénovation</li>
                  <li>• Services d'hébergement</li>
                  <li>• Locations de vacances</li>
                  <li>• Services de nettoyage</li>
                  <li>• Gardiennage</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">🚗 Transport et mobilité</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• Transports en commun</li>
                  <li>• Services de taxi</li>
                  <li>• Location de véhicules</li>
                  <li>• Services de livraison</li>
                  <li>• Parking et stationnement</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-3">🎭 Culture et loisirs</h3>
                <ul className="text-green-700 space-y-1">
                  <li>• Cinémas et spectacles</li>
                  <li>• Musées et expositions</li>
                  <li>• Parcs d'attractions</li>
                  <li>• Services sportifs</li>
                  <li>• Événements culturels</li>
                </ul>
              </div>
            </div>

            <h2>📚 TVA à 5.5% : Secteurs et produits concernés</h2>
            <p>
              La TVA à 5.5% est le taux le plus bas et s'applique aux biens et services considérés comme essentiels :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-3">🥖 Produits alimentaires de base</h3>
                <ul className="text-green-700 space-y-1">
                  <li>• Pain et viennoiseries</li>
                  <li>• Lait et produits laitiers</li>
                  <li>• Viandes et poissons</li>
                  <li>• Fruits et légumes</li>
                  <li>• Céréales et féculents</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">🏥 Santé et bien-être</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• Médicaments remboursés</li>
                  <li>• Produits d'hygiène</li>
                  <li>• Services de soins</li>
                  <li>• Équipements médicaux</li>
                  <li>• Services de prévention</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-lg font-bold text-purple-800 mb-3">📚 Éducation et formation</h3>
                <ul className="text-purple-700 space-y-1">
                  <li>• Livres et publications</li>
                  <li>• Fournitures scolaires</li>
                  <li>• Services de formation</li>
                  <li>• Soutien scolaire</li>
                  <li>• Cours particuliers</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-xl border border-pink-200">
                <h3 className="text-lg font-bold text-pink-800 mb-3">🏠 Logement social et énergie</h3>
                <ul className="text-pink-700 space-y-1">
                  <li>• Logements sociaux</li>
                  <li>• Énergies renouvelables</li>
                  <li>• Travaux d'économie d'énergie</li>
                  <li>• Services d'assainissement</li>
                  <li>• Collecte des déchets</li>
                </ul>
              </div>
            </div>

            <h2>🧮 Calcul de la TVA réduite : Formules</h2>
            <p>
              Voici les formules pour calculer la TVA aux taux réduits :
            </p>

            <div className="bg-gray-50 p-6 rounded-xl my-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Formules pour TVA 10% :</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>TVA = HT × 0.10</strong> (ou HT × 10%)</li>
                <li><strong>TTC = HT × 1.10</strong> (ou HT + TVA)</li>
                <li><strong>HT = TTC ÷ 1.10</strong></li>
              </ul>
              
              <h3 className="text-lg font-bold text-gray-800 mb-3 mt-4">Formules pour TVA 5.5% :</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>TVA = HT × 0.055</strong> (ou HT × 5.5%)</li>
                <li><strong>TTC = HT × 1.055</strong> (ou HT + TVA)</li>
                <li><strong>HT = TTC ÷ 1.055</strong></li>
              </ul>
            </div>

            <h2>💡 Exemples concrets de calcul</h2>
            
            <h3>Exemple 1 : Restaurant (TVA 10%)</h3>
            <p>
              Votre facture de restaurant s'élève à <strong>45€ HT</strong> :
            </p>
            <div className="bg-orange-50 p-4 rounded-lg my-4">
              <p className="text-orange-800">
                <strong>TVA = 45 × 0.10 = 4.50€</strong><br/>
                <strong>Montant TTC = 45 + 4.50 = 49.50€</strong><br/>
                <strong>Ou directement : 45 × 1.10 = 49.50€</strong>
              </p>
            </div>

            <h3>Exemple 2 : Livre (TVA 5.5%)</h3>
            <p>
              Vous achetez un livre à <strong>22€ HT</strong> :
            </p>
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p className="text-green-800">
                <strong>TVA = 22 × 0.055 = 1.21€</strong><br/>
                <strong>Prix TTC = 22 + 1.21 = 23.21€</strong><br/>
                <strong>Ou directement : 22 × 1.055 = 23.21€</strong>
              </p>
            </div>

            <h3>Exemple 3 : Panier mixte avec différents taux</h3>
            <p>
              Votre panier contient : Livre (15€ HT, TVA 5.5%) + Restaurant (35€ HT, TVA 10%) + Vêtement (80€ HT, TVA 20%)
            </p>
            <div className="bg-purple-50 p-4 rounded-lg my-4">
              <p className="text-purple-800">
                <strong>Total HT = 15 + 35 + 80 = 130€</strong><br/>
                <strong>TVA livre (5.5%) = 15 × 0.055 = 0.83€</strong><br/>
                <strong>TVA restaurant (10%) = 35 × 0.10 = 3.50€</strong><br/>
                <strong>TVA vêtement (20%) = 80 × 0.20 = 16€</strong><br/>
                <strong>Total TVA = 0.83 + 3.50 + 16 = 20.33€</strong><br/>
                <strong>Total TTC = 130 + 20.33 = 150.33€</strong>
              </p>
            </div>

            <h2>🛠️ Utilisation pratique avec notre calculateur</h2>
            <p>
              Notre calculateur HT/TTC gère automatiquement tous les taux de TVA. Voici comment procéder :
            </p>
            
            <ol className="list-decimal list-inside space-y-3 my-6">
              <li><strong>Saisissez votre montant</strong> dans le champ approprié (HT ou TTC)</li>
              <li><strong>Sélectionnez le bon taux</strong> : 20%, 10% ou 5.5% selon votre secteur</li>
              <li><strong>Le calculateur affiche automatiquement</strong> tous les montants</li>
              <li><strong>Vérifiez que le taux est correct</strong> pour votre activité</li>
            </ol>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">💡 Astuce importante</h3>
              <p className="text-yellow-700">
                Attention ! Le taux de TVA applicable dépend de votre secteur d'activité et du type de produit/service. En cas de doute, consultez la réglementation ou un expert-comptable.
              </p>
            </div>

            <h2>📱 Cas d'usage spécifiques par secteur</h2>
            
            <h3>Pour les restaurateurs</h3>
            <p>
              Si vous facturez 120€ HT pour un repas :
            </p>
            <div className="bg-orange-50 p-4 rounded-lg my-4">
              <p className="text-orange-800">
                <strong>Montant TTC à facturer = 120 × 1.10 = 132€</strong><br/>
                <strong>TVA collectée (10%) = 12€</strong><br/>
                <strong>Revenu net HT = 120€</strong>
              </p>
            </div>

            <h3>Pour les libraires</h3>
            <p>
              Si vous vendez un livre à 25€ HT :
            </p>
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p className="text-green-800">
                <strong>Prix TTC affiché = 25 × 1.055 = 26.38€</strong><br/>
                <strong>TVA collectée (5.5%) = 1.38€</strong><br/>
                <strong>Revenu net HT = 25€</strong>
              </p>
            </div>

            <h3>Pour les transporteurs</h3>
            <p>
              Si vous facturez 80€ HT pour un transport :
            </p>
            <div className="bg-blue-50 p-4 rounded-lg my-4">
              <p className="text-blue-800">
                <strong>Montant TTC à facturer = 80 × 1.10 = 88€</strong><br/>
                <strong>TVA collectée (10%) = 8€</strong><br/>
                <strong>Revenu net HT = 80€</strong>
              </p>
            </div>

            <h2>⚠️ Points d'attention et règles importantes</h2>
            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Vérification du taux :</strong> Le taux applicable dépend de votre secteur et du type de produit</li>
              <li><strong>Facturation :</strong> Toutes les factures doivent mentionner clairement le taux de TVA appliqué</li>
              <li><strong>Déclaration :</strong> La TVA collectée doit être déclarée selon le taux utilisé</li>
              <li><strong>Changement de taux :</strong> Certains produits peuvent changer de taux selon les réformes</li>
              <li><strong>Exonérations :</strong> Certains secteurs sont exonérés de TVA (médical, éducation...)</li>
              <li><strong>Arrondis :</strong> La TVA est toujours arrondie au centime le plus proche</li>
            </ul>

            <h2>🔗 Ressources utiles</h2>
            <p>
              Pour approfondir vos connaissances sur les taux de TVA réduits :
            </p>
            <ul className="list-disc list-inside space-y-2 my-6">
              <li><Link to="/articles/calculer-tva-2024" className="text-indigo-600 hover:text-indigo-800">Guide complet : Comment calculer la TVA en 2024</Link></li>
              <li><Link to="/articles/tva-20-taux-normal" className="text-indigo-600 hover:text-indigo-800">TVA 20% : Tout savoir sur le taux normal</Link></li>
              <li><Link to="/articles/ht-vs-ttc-comptabilite" className="text-indigo-600 hover:text-indigo-800">HT vs TTC : Comprendre la différence</Link></li>
              <li><Link to="/faq" className="text-indigo-600 hover:text-indigo-800">Consultez notre FAQ</Link> pour des questions fréquentes</li>
            </ul>

            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-100 my-8 text-center">
              <h2 className="text-2xl font-bold text-orange-800 mb-4">Prêt à calculer la TVA réduite ?</h2>
              <p className="text-gray-700 mb-6">
                Maintenant que vous maîtrisez les taux de TVA réduits, utilisez notre calculateur HT/TTC pour des calculs rapides et précis !
              </p>
              <Link 
                to="/"
                className="inline-flex items-center bg-gradient-to-r from-orange-600 to-yellow-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-700 hover:to-yellow-700 transition-all duration-200 transform hover:scale-105"
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
                  <Link to="/articles/tva-20-taux-normal" className="block text-indigo-600 hover:text-indigo-800">→ TVA 20% : Tout savoir sur le taux normal</Link>
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

export default TVAReduite1055; 
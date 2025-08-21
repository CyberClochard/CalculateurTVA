import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HTVsTTCComptabilite = () => {
  // Données structurées Article Schema.org
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "HT vs TTC : Comprendre la différence en comptabilité",
    "description": "Guide complet pour comprendre la différence entre HT et TTC en comptabilité : définitions, calculs, impact sur la trésorerie et obligations légales.",
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
    "datePublished": "2024-12-16",
    "dateModified": "2024-12-16",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://calculateur-tva.skylogistics.fr/articles/ht-vs-ttc-comptabilite"
    },
    "articleSection": "Comptabilité",
    "keywords": "HT TTC différence, comptabilité TVA, montant hors taxes, toutes taxes comprises, facturation, trésorerie",
    "wordCount": 2400
  };

  return (
    <>
      <Helmet>
        <title>HT vs TTC : Comprendre la différence en comptabilité | Calculateur HT/TTC</title>
        <meta name="description" content="Guide complet pour comprendre la différence entre HT et TTC en comptabilité : définitions, calculs, impact sur la trésorerie et obligations légales." />
        <meta name="keywords" content="HT TTC différence, comptabilité TVA, montant hors taxes, toutes taxes comprises, facturation, trésorerie" />
        <meta name="author" content="Calculateur-TVA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://calculateur-tva.skylogistics.fr/articles/ht-vs-ttc-comptabilite" />
        
        {/* Open Graph */}
        <meta property="og:title" content="HT vs TTC : Comprendre la différence en comptabilité" />
        <meta property="og:description" content="Guide complet pour comprendre la différence entre HT et TTC en comptabilité : définitions, calculs, impact sur la trésorerie et obligations légales." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://calculateur-tva.skylogistics.fr/articles/ht-vs-ttc-comptabilite" />
        <meta property="og:image" content="https://calculateur-tva.skylogistics.fr/api/placeholder/800/400" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HT vs TTC : Comprendre la différence en comptabilité" />
        <meta name="twitter:description" content="Guide complet pour comprendre la différence entre HT et TTC en comptabilité : définitions, calculs, impact sur la trésorerie et obligations légales." />
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
              <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-2 rounded-full">
                Comptabilité
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              HT vs TTC : Comprendre la différence en comptabilité
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Guide complet pour maîtriser les concepts HT et TTC en comptabilité
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>📅 16 décembre 2024</span>
              <span>📖 8 min de lecture</span>
              <span>👁️ 2.5k vues</span>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-purple-100">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">🧮 Calculez HT et TTC facilement</h2>
              <p className="text-gray-700 mb-4">
                Utilisez notre <strong>calculateur HT/TTC gratuit</strong> pour convertir instantanément vos montants et comprendre la différence entre HT et TTC.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200"
              >
                🧮 Calculer HT/TTC
              </Link>
            </div>

            <h2>📊 Définitions fondamentales : HT et TTC</h2>
            <p>
              En comptabilité et en gestion d'entreprise, comprendre la différence entre <strong>HT</strong> et <strong>TTC</strong> est essentiel. Ces deux concepts sont au cœur de la facturation et de la gestion de la trésorerie.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">💰 HT : Hors Taxes</h3>
                <p className="text-blue-700">
                  Le montant <strong>HT</strong> représente le prix de vente ou d'achat <strong>sans la TVA</strong>. C'est le montant net qui reste à l'entreprise après déduction de la TVA collectée.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-3">💳 TTC : Toutes Taxes Comprises</h3>
                <p className="text-green-700">
                  Le montant <strong>TTC</strong> représente le prix <strong>avec la TVA incluse</strong>. C'est le montant total que paie le client final ou que l'entreprise débourse lors d'un achat.
                </p>
              </div>
            </div>

            <h2>🧮 Formules de calcul et relations mathématiques</h2>
            <p>
              La relation entre HT et TTC est mathématiquement simple mais cruciale pour la comptabilité :
            </p>

            <div className="bg-gray-50 p-6 rounded-xl my-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Formules de base :</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>TTC = HT + TVA</strong></li>
                <li><strong>TTC = HT × (1 + taux_TVA)</strong></li>
                <li><strong>HT = TTC ÷ (1 + taux_TVA)</strong></li>
                <li><strong>TVA = TTC - HT</strong></li>
                <li><strong>TVA = HT × taux_TVA</strong></li>
              </ul>
            </div>

            <h3>Exemples avec différents taux de TVA :</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">TVA 20% (taux normal)</h4>
                <p className="text-red-700 text-sm">
                  <strong>TTC = HT × 1.20</strong><br/>
                  <strong>HT = TTC ÷ 1.20</strong>
                </p>
              </div>
              
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">TVA 10% (taux réduit)</h4>
                <p className="text-orange-700 text-sm">
                  <strong>TTC = HT × 1.10</strong><br/>
                  <strong>HT = TTC ÷ 1.10</strong>
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">TVA 5.5% (taux réduit)</h4>
                <p className="text-green-700 text-sm">
                  <strong>TTC = HT × 1.055</strong><br/>
                  <strong>HT = TTC ÷ 1.055</strong>
                </p>
              </div>
            </div>

            <h2>💡 Exemples concrets de calcul</h2>
            
            <h3>Exemple 1 : Vente d'un produit (TVA 20%)</h3>
            <p>
              Vous vendez un ordinateur à <strong>800€ HT</strong> :
            </p>
            <div className="bg-blue-50 p-4 rounded-lg my-4">
              <p className="text-blue-800">
                <strong>Prix HT = 800€</strong><br/>
                <strong>TVA (20%) = 800 × 0.20 = 160€</strong><br/>
                <strong>Prix TTC = 800 + 160 = 960€</strong><br/>
                <strong>Ou directement : 800 × 1.20 = 960€</strong>
              </p>
            </div>

            <h3>Exemple 2 : Achat d'un service (TVA 10%)</h3>
            <p>
              Vous achetez un service de formation à <strong>550€ TTC</strong> :
            </p>
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p className="text-green-800">
                <strong>Prix TTC = 550€</strong><br/>
                <strong>Prix HT = 550 ÷ 1.10 = 500€</strong><br/>
                <strong>Montant TVA = 550 - 500 = 50€</strong>
              </p>
            </div>

            <h3>Exemple 3 : Calcul pour un panier d'achats</h3>
            <p>
              Votre panier contient : Vêtements (120€ HT, TVA 20%) + Livres (45€ HT, TVA 5.5%) + Services (90€ HT, TVA 10%)
            </p>
            <div className="bg-purple-50 p-4 rounded-lg my-4">
              <p className="text-purple-800">
                <strong>Total HT = 120 + 45 + 90 = 255€</strong><br/>
                <strong>TVA vêtements (20%) = 120 × 0.20 = 24€</strong><br/>
                <strong>TVA livres (5.5%) = 45 × 0.055 = 2.48€</strong><br/>
                <strong>TVA services (10%) = 90 × 0.10 = 9€</strong><br/>
                <strong>Total TVA = 24 + 2.48 + 9 = 35.48€</strong><br/>
                <strong>Total TTC = 255 + 35.48 = 290.48€</strong>
              </p>
            </div>

            <h2>🏢 Impact sur la comptabilité et la trésorerie</h2>
            
            <h3>Pour les entreprises qui vendent (TVA collectée)</h3>
            <p>
              Quand une entreprise vend un produit ou un service :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Le client paie le montant TTC</strong> (HT + TVA)</li>
              <li><strong>L'entreprise encaisse le montant TTC</strong> mais ne garde que le montant HT</li>
              <li><strong>La TVA collectée doit être reversée à l'État</strong> selon un calendrier défini</li>
              <li><strong>Le montant HT constitue le revenu réel</strong> de l'entreprise</li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg my-4">
              <p className="text-blue-800">
                <strong>Exemple :</strong> Vente d'un produit à 100€ HT (TVA 20%)<br/>
                <strong>Client paie : 120€ TTC</strong><br/>
                <strong>Entreprise encaisse : 120€</strong><br/>
                <strong>Revenu net : 100€ HT</strong><br/>
                <strong>TVA à reverser : 20€</strong>
              </p>
            </div>

            <h3>Pour les entreprises qui achètent (TVA déductible)</h3>
            <p>
              Quand une entreprise achète des biens ou services :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>L'entreprise paie le montant TTC</strong> (HT + TVA)</li>
              <li><strong>Le coût réel est le montant HT</strong></li>
              <li><strong>La TVA payée peut être récupérée</strong> sur la TVA collectée</li>
              <li><strong>La TVA déductible réduit la TVA à reverser</strong> à l'État</li>
            </ul>

            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p className="text-green-800">
                <strong>Exemple :</strong> Achat d'un service à 200€ HT (TVA 10%)<br/>
                <strong>Entreprise paie : 220€ TTC</strong><br/>
                <strong>Coût réel : 200€ HT</strong><br/>
                <strong>TVA récupérable : 20€</strong><br/>
                <strong>Impact trésorerie : -220€</strong>
              </p>
            </div>

            <h2>📋 Obligations légales et facturation</h2>
            
            <h3>Règles de facturation obligatoires</h3>
            <p>
              Toute facture doit obligatoirement mentionner :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Le montant HT</strong> de chaque ligne</li>
              <li><strong>Le taux de TVA applicable</strong> à chaque ligne</li>
              <li><strong>Le montant de TVA</strong> pour chaque ligne</li>
              <li><strong>Le total HT</strong> de la facture</li>
              <li><strong>Le total TVA</strong> de la facture</li>
              <li><strong>Le total TTC</strong> de la facture</li>
            </ul>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">⚠️ Point important</h3>
              <p className="text-yellow-700">
                L'absence de mention du montant HT sur une facture peut entraîner des sanctions fiscales. La facturation doit être claire et transparente pour le client et l'administration fiscale.
              </p>
            </div>

            <h3>Déclaration et reversement de la TVA</h3>
            <p>
              Les entreprises assujetties à la TVA doivent :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Déclarer la TVA collectée</strong> sur les ventes (montants TTC - HT)</li>
              <li><strong>Déclarer la TVA déductible</strong> sur les achats</li>
              <li><strong>Calculer la TVA à reverser</strong> (collectée - déductible)</li>
              <li><strong>Reverser la TVA</strong> selon le calendrier imposé</li>
            </ul>

            <h2>🛠️ Utilisation pratique avec notre calculateur</h2>
            <p>
              Notre calculateur HT/TTC simplifie grandement ces calculs comptables :
            </p>
            
            <ol className="list-decimal list-inside space-y-3 my-6">
              <li><strong>Saisissez votre montant</strong> dans le champ approprié (HT ou TTC)</li>
              <li><strong>Sélectionnez le taux de TVA</strong> applicable à votre transaction</li>
              <li><strong>Le calculateur affiche automatiquement</strong> tous les montants</li>
              <li><strong>Utilisez les boutons de copie</strong> pour récupérer les résultats</li>
              <li><strong>Vérifiez la cohérence</strong> entre HT, TVA et TTC</li>
            </ol>

            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 my-6">
              <h3 className="text-lg font-bold text-purple-800 mb-2">💡 Astuce comptable</h3>
              <p className="text-purple-700">
                Pour vérifier rapidement vos calculs : le montant TTC doit toujours être supérieur au montant HT, et la différence doit correspondre exactement à la TVA calculée selon le taux applicable.
              </p>
            </div>

            <h2>📱 Cas d'usage spécifiques par secteur</h2>
            
            <h3>Pour les e-commerçants</h3>
            <p>
              Dans le e-commerce, la gestion HT/TTC est cruciale :
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg my-4">
              <p className="text-indigo-800">
                <strong>Affichage des prix :</strong> Les prix peuvent être affichés HT ou TTC selon la cible<br/>
                <strong>Calcul des marges :</strong> Les marges se calculent sur le montant HT<br/>
                <strong>Gestion des paniers :</strong> Chaque produit peut avoir un taux de TVA différent<br/>
                <strong>Facturation :</strong> Toutes les factures doivent respecter les règles légales
              </p>
            </div>

            <h3>Pour les prestataires de services</h3>
            <p>
              Les prestataires de services doivent maîtriser la facturation HT/TTC :
            </p>
            <div className="bg-pink-50 p-4 rounded-lg my-4">
              <p className="text-pink-800">
                <strong>Devis et factures :</strong> Toujours mentionner HT et TTC<br/>
                <strong>Récupération de TVA :</strong> Sur les achats professionnels<br/>
                <strong>Gestion de trésorerie :</strong> Anticiper le reversement de TVA<br/>
                <strong>Comptabilité :</strong> Séparer clairement HT et TVA dans les écritures
              </p>
            </div>

            <h3>Pour les commerçants physiques</h3>
            <p>
              Les commerçants doivent gérer la TVA au quotidien :
            </p>
            <div className="bg-orange-50 p-4 rounded-lg my-4">
              <p className="text-orange-800">
                <strong>Affichage des prix :</strong> Les prix TTC sont affichés en magasin<br/>
                <strong>Gestion des stocks :</strong> Les stocks sont valorisés HT<br/>
                <strong>Calcul des marges :</strong> Les marges se calculent sur le montant HT<br/>
                <strong>Comptabilité :</strong> Enregistrement des ventes et achats avec TVA
              </p>
            </div>

            <h2>⚠️ Points d'attention et erreurs courantes</h2>
            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Confusion HT/TTC :</strong> Ne pas confondre le montant HT et TTC dans les calculs</li>
              <li><strong>Mauvais taux de TVA :</strong> Appliquer le bon taux selon le secteur d'activité</li>
              <li><strong>Oubli de la TVA :</strong> Ne pas oublier d'inclure la TVA dans les devis</li>
              <li><strong>Arrondis incorrects :</strong> Respecter les règles d'arrondi de la TVA</li>
              <li><strong>Facturation incomplète :</strong> Mentionner tous les montants obligatoires</li>
              <li><strong>Gestion de trésorerie :</strong> Anticiper le reversement de TVA collectée</li>
            </ul>

            <h2>🔗 Ressources utiles</h2>
            <p>
              Pour approfondir vos connaissances sur HT/TTC et la comptabilité :
            </p>
            <ul className="list-disc list-inside space-y-2 my-6">
              <li><Link to="/articles/calculer-tva-2024" className="text-indigo-600 hover:text-indigo-800">Guide complet : Comment calculer la TVA en 2024</Link></li>
              <li><Link to="/articles/tva-20-taux-normal" className="text-indigo-600 hover:text-indigo-800">TVA 20% : Tout savoir sur le taux normal</Link></li>
              <li><Link to="/articles/tva-reduite-10-5-5" className="text-indigo-600 hover:text-indigo-800">TVA réduite 10% et 5.5% : Secteurs concernés</Link></li>
              <li><Link to="/faq" className="text-indigo-600 hover:text-indigo-800">Consultez notre FAQ</Link> pour des questions fréquentes</li>
            </ul>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border border-purple-100 my-8 text-center">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">Prêt à maîtriser HT et TTC ?</h2>
              <p className="text-gray-700 mb-6">
                Maintenant que vous comprenez la différence entre HT et TTC, utilisez notre calculateur HT/TTC pour des calculs comptables précis !
              </p>
              <Link 
                to="/"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-105"
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
                  <Link to="/articles/tva-reduite-10-5-5" className="block text-indigo-600 hover:text-indigo-800">→ TVA réduite 10% et 5.5% : Secteurs concernés</Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default HTVsTTCComptabilite; 
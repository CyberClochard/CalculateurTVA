import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Articles = () => {
  // Données structurées ArticleList Schema.org
  const articleListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Articles sur la TVA et la comptabilité",
    "description": "Articles informatifs sur la TVA, la comptabilité et l'utilisation du calculateur HT/TTC",
    "numberOfItems": 5,
            "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Article",
              "name": "Comment calculer la TVA en 2024 : Guide complet",
              "url": "https://calculateur-tva.skylogistics.fr/articles/calculer-tva-2024",
              "description": "Guide complet pour calculer la TVA en 2024 avec les taux en vigueur et des exemples pratiques."
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Article",
              "name": "TVA 20% : Tout savoir sur le taux normal",
              "url": "https://calculateur-tva.skylogistics.fr/articles/tva-20-taux-normal",
              "description": "Découvrez tout sur la TVA à 20%, le taux normal appliqué à la plupart des biens et services."
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Article",
              "name": "TVA réduite 10% et 5.5% : Secteurs concernés",
              "url": "https://calculateur-tva.skylogistics.fr/articles/tva-reduite-10-5-5",
              "description": "Guide complet sur les taux de TVA réduits 10% et 5.5% : secteurs d'activité, produits concernés et cas d'application."
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Article",
              "name": "HT vs TTC : Comprendre la différence en comptabilité",
              "url": "https://calculateur-tva.skylogistics.fr/articles/ht-vs-ttc-comptabilite",
              "description": "Guide complet pour comprendre la différence entre HT et TTC en comptabilité : définitions, calculs, impact sur la trésorerie et obligations légales."
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Article",
              "name": "Déclaration TVA 2024 : Guide complet et obligations",
              "url": "https://calculateur-tva.skylogistics.fr/articles/declaration-tva-2024",
              "description": "Guide complet sur la déclaration TVA 2024 : calendrier, obligations, calculs, formulaires et bonnes pratiques pour les entreprises."
            }
          }
        ]
  };

  const articles = [
    {
      id: 'calculer-tva-2024',
      title: 'Comment calculer la TVA en 2024 : Guide complet',
      excerpt: 'Guide complet pour calculer la TVA en 2024 avec les taux en vigueur et des exemples pratiques. Découvrez comment utiliser notre calculateur HT/TTC efficacement.',
      category: 'Guide',
      readTime: '8 min',
      image: '/api/placeholder/400/250',
      date: '2024-12-19',
      slug: 'calculer-tva-2024'
    },
    {
      id: 'tva-20-taux-normal',
      title: 'TVA 20% : Tout savoir sur le taux normal',
      excerpt: 'Découvrez tout sur la TVA à 20%, le taux normal appliqué à la plupart des biens et services. Exemples concrets et cas d\'usage.',
      category: 'Taux TVA',
      readTime: '6 min',
      image: '/api/placeholder/400/250',
      date: '2024-12-18',
      slug: 'tva-20-taux-normal'
    },
          {
        id: 'tva-reduite-10-5-5',
        title: 'TVA réduite 10% et 5.5% : Secteurs concernés',
        excerpt: 'Guide complet sur les taux de TVA réduits 10% et 5.5% : secteurs d\'activité, produits concernés et cas d\'application.',
        category: 'Taux TVA',
        readTime: '7 min',
        image: '/api/placeholder/400/250',
        date: '2024-12-17',
        slug: 'tva-reduite-10-5-5'
      },
      {
        id: 'ht-vs-ttc-comptabilite',
        title: 'HT vs TTC : Comprendre la différence en comptabilité',
        excerpt: 'Guide complet pour comprendre la différence entre HT et TTC en comptabilité : définitions, calculs, impact sur la trésorerie et obligations légales.',
        category: 'Comptabilité',
        readTime: '8 min',
        image: '/api/placeholder/400/250',
        date: '2024-12-16',
        slug: 'ht-vs-ttc-comptabilite'
      },
      {
        id: 'declaration-tva-2024',
        title: 'Déclaration TVA 2024 : Guide complet et obligations',
        excerpt: 'Guide complet sur la déclaration TVA 2024 : calendrier, obligations, calculs, formulaires et bonnes pratiques pour les entreprises.',
        category: 'Obligations',
        readTime: '9 min',
        image: '/api/placeholder/400/250',
        date: '2024-12-15',
        slug: 'declaration-tva-2024'
      }
  ];

  return (
    <>
      <Helmet>
        <title>Articles sur la TVA et la comptabilité | Calculateur HT/TTC</title>
        <meta name="description" content="Articles informatifs sur la TVA, la comptabilité et l'utilisation du calculateur HT/TTC. Guides pratiques et conseils d'experts." />
        <meta name="keywords" content="articles TVA, blog comptabilité, guide TVA 2024, taux TVA France, calcul TVA, comptabilité" />
        <meta name="author" content="Calculateur-TVA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://calculateur-tva.skylogistics.fr/articles" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Articles sur la TVA et la comptabilité" />
        <meta property="og:description" content="Articles informatifs sur la TVA, la comptabilité et l'utilisation du calculateur HT/TTC." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calculateur-tva.skylogistics.fr/articles" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Articles sur la TVA et la comptabilité" />
        <meta name="twitter:description" content="Articles informatifs sur la TVA et la comptabilité." />
      </Helmet>

      <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 font-sans relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" aria-hidden="true"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>
        
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-6xl border border-white/20 animate-fade-in relative z-10">
          {/* Données structurées JSON-LD */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListSchema) }}
          />
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Articles & Conseils TVA
            </h1>
            <p className="text-gray-600 text-xl mb-4">
              Votre source d'information sur la TVA et la comptabilité
            </p>
            <p className="text-gray-500 text-lg">
              Guides pratiques, conseils d'experts et actualités fiscales
            </p>
          </div>

          {/* Grille des articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                {/* Image de l'article */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                  <div className="text-4xl text-indigo-400">📊</div>
                  <div className="absolute top-3 left-3">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-1 rounded-full">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Contenu de l'article */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 hover:text-indigo-600 transition-colors duration-200">
                    <Link to={`/articles/${article.slug}`} className="hover:text-indigo-600">
                      {article.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Métadonnées */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                    <span>📖 {article.readTime}</span>
                  </div>

                  {/* Bouton Lire plus */}
                  <Link 
                    to={`/articles/${article.slug}`}
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Lire l'article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Call-to-action */}
          <div className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Besoin de calculer la TVA maintenant ?
            </h2>
            <p className="text-gray-600 mb-6">
              Utilisez notre calculateur HT/TTC gratuit pour vos calculs de TVA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                🧮 Utiliser le calculateur
              </Link>
              <Link 
                to="/faq"
                className="inline-flex items-center justify-center bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
              >
                ❓ Voir la FAQ
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <Link 
              to="/"
              className="inline-flex items-center bg-gradient-to-r from-gray-600 to-gray-700 text-white px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour au calculateur HT/TTC
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Articles; 
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const DeclarationTVA2024 = () => {
  // Données structurées Article Schema.org
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Déclaration TVA 2024 : Guide complet et obligations",
    "description": "Guide complet sur la déclaration TVA 2024 : calendrier, obligations, calculs, formulaires et bonnes pratiques pour les entreprises.",
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
    "datePublished": "2024-12-15",
    "dateModified": "2024-12-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://calculateur-tva.skylogistics.fr/articles/declaration-tva-2024"
    },
    "articleSection": "Obligations",
    "keywords": "déclaration TVA 2024, obligations TVA, calendrier TVA, CA3, CA12, reversement TVA, comptabilité",
    "wordCount": 2600
  };

  return (
    <>
      <Helmet>
        <title>Déclaration TVA 2024 : Guide complet et obligations | Calculateur HT/TTC</title>
        <meta name="description" content="Guide complet sur la déclaration TVA 2024 : calendrier, obligations, calculs, formulaires et bonnes pratiques pour les entreprises." />
        <meta name="keywords" content="déclaration TVA 2024, obligations TVA, calendrier TVA, CA3, CA12, reversement TVA, comptabilité" />
        <meta name="author" content="Calculateur-TVA" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://calculateur-tva.skylogistics.fr/articles/declaration-tva-2024" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Déclaration TVA 2024 : Guide complet et obligations" />
        <meta property="og:description" content="Guide complet sur la déclaration TVA 2024 : calendrier, obligations, calculs, formulaires et bonnes pratiques pour les entreprises." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://calculateur-tva.skylogistics.fr/articles/declaration-tva-2024" />
        <meta property="og:image" content="https://calculateur-tva.skylogistics.fr/api/placeholder/800/400" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Déclaration TVA 2024 : Guide complet et obligations" />
        <meta name="twitter:description" content="Guide complet sur la déclaration TVA 2024 : calendrier, obligations, calculs, formulaires et bonnes pratiques pour les entreprises." />
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
              <span className="bg-red-100 text-red-800 text-sm font-semibold px-4 py-2 rounded-full">
                Obligations
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Déclaration TVA 2024 : Guide complet et obligations
            </h1>
            <p className="text-gray-600 text-lg mb-4">
              Guide complet sur la déclaration TVA 2024 et les obligations des entreprises
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
              <span>📅 15 décembre 2024</span>
              <span>📖 9 min de lecture</span>
              <span>👁️ 3.2k vues</span>
            </div>
          </header>

          {/* Contenu de l'article */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-6 mb-8 border border-red-100">
              <h2 className="text-2xl font-bold text-red-800 mb-4">🧮 Calculez votre TVA facilement</h2>
              <p className="text-gray-700 mb-4">
                Utilisez notre <strong>calculateur HT/TTC gratuit</strong> pour calculer vos montants de TVA et préparer vos déclarations en toute sérénité.
              </p>
              <Link 
                to="/"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-200"
              >
                🧮 Calculer TVA
              </Link>
            </div>

            <h2>📋 Déclaration TVA 2024 : Obligations fondamentales</h2>
            <p>
              La déclaration TVA est une <strong>obligation légale</strong> pour toutes les entreprises assujetties à la TVA. Elle consiste à déclarer périodiquement à l'administration fiscale les montants de TVA collectée et déductible, puis à reverser la différence à l'État.
            </p>

            <div className="bg-red-50 p-6 rounded-xl border border-red-200 my-6">
              <h3 className="text-lg font-bold text-red-800 mb-2">⚠️ Obligation légale</h3>
              <p className="text-red-700">
                La déclaration TVA est obligatoire pour toutes les entreprises assujetties à la TVA. Le non-respect de cette obligation peut entraîner des sanctions fiscales importantes, voire des poursuites.
              </p>
            </div>

            <h2>📅 Calendrier des déclarations TVA 2024</h2>
            <p>
              Le calendrier des déclarations TVA dépend du régime d'imposition de votre entreprise :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-3">📊 Régime normal (CA &gt; 4M€)</h3>
                <ul className="text-blue-700 space-y-1">
                  <li>• Déclaration mensuelle (CA3)</li>
                  <li>• Échéance : 24 du mois suivant</li>
                  <li>• Paiement : 25 du mois suivant</li>
                  <li>• Récapitulatif annuel (CA12)</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-3">📊 Régime simplifié (CA &lt; 4M€)</h3>
                <ul className="text-green-700 space-y-1">
                  <li>• Déclaration trimestrielle (CA3)</li>
                  <li>• Échéance : 24 du mois suivant</li>
                  <li>• Paiement : 25 du mois suivant</li>
                  <li>• Récapitulatif annuel (CA12)</li>
                </ul>
              </div>
            </div>

            <h3>Dates clés 2024 :</h3>
            <div className="bg-gray-50 p-6 rounded-xl my-6">
              <h4 className="font-bold text-gray-800 mb-3">Déclarations trimestrielles :</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>1er trimestre (janvier-mars) :</strong> Déclaration avant le 24 avril 2024</li>
                <li><strong>2ème trimestre (avril-juin) :</strong> Déclaration avant le 24 juillet 2024</li>
                <li><strong>3ème trimestre (juillet-septembre) :</strong> Déclaration avant le 24 octobre 2024</li>
                <li><strong>4ème trimestre (octobre-décembre) :</strong> Déclaration avant le 24 janvier 2025</li>
              </ul>
              
              <h4 className="font-bold text-gray-800 mb-3 mt-4">Récapitulatif annuel :</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>CA12 2024 :</strong> Déclaration avant le 24 février 2025</li>
              </ul>
            </div>

            <h2>🧮 Calcul de la TVA à reverser</h2>
            <p>
              Le calcul de la TVA à reverser est basé sur la différence entre la TVA collectée et la TVA déductible :
            </p>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-6">
              <h3 className="text-lg font-bold text-yellow-800 mb-2">Formule de calcul :</h3>
              <p className="text-yellow-700">
                <strong>TVA à reverser = TVA collectée - TVA déductible</strong><br/>
                <strong>Si le résultat est positif :</strong> Vous devez de l'argent à l'État<br/>
                <strong>Si le résultat est négatif :</strong> L'État vous doit de l'argent (crédit de TVA)
              </p>
            </div>

            <h3>Exemples de calcul :</h3>
            
            <h4>Exemple 1 : TVA à reverser</h4>
            <p>
              Votre entreprise a collecté <strong>5000€ de TVA</strong> et payé <strong>3000€ de TVA déductible</strong> :
            </p>
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p className="text-green-800">
                <strong>TVA collectée = 5000€</strong><br/>
                <strong>TVA déductible = 3000€</strong><br/>
                <strong>TVA à reverser = 5000 - 3000 = 2000€</strong><br/>
                <strong>Vous devez 2000€ à l'État</strong>
              </p>
            </div>

            <h4>Exemple 2 : Crédit de TVA</h4>
            <p>
              Votre entreprise a collecté <strong>2000€ de TVA</strong> et payé <strong>3500€ de TVA déductible</strong> :
            </p>
            <div className="bg-blue-50 p-4 rounded-lg my-4">
              <p className="text-blue-800">
                <strong>TVA collectée = 2000€</strong><br/>
                <strong>TVA déductible = 3500€</strong><br/>
                <strong>TVA à reverser = 2000 - 3500 = -1500€</strong><br/>
                <strong>L'État vous doit 1500€ (crédit de TVA)</strong>
              </p>
            </div>

            <h2>📝 Formulaires de déclaration TVA</h2>
            
            <h3>CA3 : Déclaration périodique</h3>
            <p>
              Le formulaire <strong>CA3</strong> est la déclaration périodique de TVA. Il doit être rempli et transmis selon la fréquence de votre régime :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Régime normal :</strong> Déclaration mensuelle</li>
              <li><strong>Régime simplifié :</strong> Déclaration trimestrielle</li>
              <li><strong>Régime spécial :</strong> Déclaration selon les règles spécifiques</li>
            </ul>

            <h3>CA12 : Récapitulatif annuel</h3>
            <p>
              Le formulaire <strong>CA12</strong> est le récapitulatif annuel de TVA. Il permet de :
            </p>
            <ul className="list-disc list-inside space-y-2 my-4">
              <li><strong>Récapituler</strong> toutes les déclarations de l'année</li>
              <li><strong>Corriger</strong> d'éventuelles erreurs</li>
              <li><strong>Justifier</strong> les différences de TVA</li>
              <li><strong>Clôturer</strong> l'exercice fiscal</li>
            </ul>

            <h2>💼 Obligations par type d'entreprise</h2>
            
            <h3>Entreprises individuelles</h3>
            <p>
              Les entreprises individuelles doivent respecter les mêmes obligations que les sociétés :
            </p>
            <div className="bg-orange-50 p-4 rounded-lg my-4">
              <p className="text-orange-800">
                <strong>Déclaration périodique :</strong> Selon le régime applicable<br/>
                <strong>Récapitulatif annuel :</strong> Obligatoire<br/>
                <strong>Conservation des documents :</strong> 6 ans minimum<br/>
                <strong>Paiement de la TVA :</strong> Selon le calendrier imposé
              </p>
            </div>

            <h3>Sociétés (SARL, SAS, SA...)</h3>
            <p>
              Les sociétés ont des obligations renforcées :
            </p>
            <div className="bg-purple-50 p-4 rounded-lg my-4">
              <p className="text-purple-800">
                <strong>Déclaration périodique :</strong> Selon le régime applicable<br/>
                <strong>Récapitulatif annuel :</strong> Obligatoire<br/>
                <strong>Comptabilité :</strong> Obligatoire avec expert-comptable<br/>
                <strong>Audit :</strong> Selon la taille de l'entreprise<br/>
                <strong>Conservation :</strong> 10 ans minimum
              </p>
            </div>

            <h3>Auto-entrepreneurs</h3>
            <p>
              Les auto-entrepreneurs bénéficient d'un régime simplifié :
            </p>
            <div className="bg-green-50 p-4 rounded-lg my-4">
              <p className="text-green-800">
                <strong>Déclaration :</strong> Mensuelle ou trimestrielle selon l'option<br/>
                <strong>Paiement :</strong> TVA incluse dans les cotisations<br/>
                <strong>Simplification :</strong> Pas de comptabilité obligatoire<br/>
                <strong>Limite :</strong> CA annuel limité selon l'activité
              </p>
            </div>

            <h2>🛠️ Utilisation pratique avec notre calculateur</h2>
            <p>
              Notre calculateur HT/TTC vous aide à préparer vos déclarations TVA :
            </p>
            
            <ol className="list-decimal list-inside space-y-3 my-6">
              <li><strong>Calculez la TVA</strong> sur vos ventes et achats</li>
              <li><strong>Vérifiez vos montants</strong> avant déclaration</li>
              <li><strong>Préparez vos calculs</strong> pour le formulaire CA3</li>
              <li><strong>Utilisez les boutons de copie</strong> pour récupérer les résultats</li>
              <li><strong>Vérifiez la cohérence</strong> entre HT, TVA et TTC</li>
            </ol>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 my-6">
              <h3 className="text-lg font-bold text-blue-800 mb-2">💡 Astuce déclaration</h3>
              <p className="text-blue-700">
                Utilisez notre calculateur pour vérifier rapidement vos calculs de TVA avant de remplir vos déclarations. Cela vous évitera des erreurs et des redressements fiscaux.
              </p>
            </div>

            <h2>📱 Cas d'usage spécifiques par secteur</h2>
            
            <h3>Pour les e-commerçants</h3>
            <p>
              Les e-commerçants ont des obligations spécifiques :
            </p>
            <div className="bg-indigo-50 p-4 rounded-lg my-4">
              <p className="text-indigo-800">
                <strong>Gestion des taux :</strong> Différents taux selon les produits<br/>
                <strong>Facturation :</strong> Obligation de factures conformes<br/>
                <strong>Déclaration :</strong> Selon le régime applicable<br/>
                <strong>Conservation :</strong> 6 ans minimum des documents
              </p>
            </div>

            <h3>Pour les prestataires de services</h3>
            <p>
              Les prestataires de services doivent maîtriser la TVA :
            </p>
            <div className="bg-pink-50 p-4 rounded-lg my-4">
              <p className="text-pink-800">
                <strong>Identification des taux :</strong> 20%, 10% ou 5.5% selon le service<br/>
                <strong>Facturation :</strong> Mention obligatoire HT et TTC<br/>
                <strong>Déclaration :</strong> Périodique selon le régime<br/>
                <strong>Récupération :</strong> TVA sur les achats professionnels
              </p>
            </div>

            <h3>Pour les commerçants physiques</h3>
            <p>
              Les commerçants ont des obligations quotidiennes :
            </p>
            <div className="bg-orange-50 p-4 rounded-lg my-4">
              <p className="text-orange-800">
                <strong>Affichage des prix :</strong> Prix TTC obligatoires<br/>
                <strong>Gestion des stocks :</strong> Valorisation HT<br/>
                <strong>Calcul des marges :</strong> Sur montants HT<br/>
                <strong>Déclaration :</strong> Selon le régime applicable
              </p>
            </div>

            <h2>⚠️ Points d'attention et erreurs courantes</h2>
            <ul className="list-disc list-inside space-y-2 my-6">
              <li><strong>Retard de déclaration :</strong> Peut entraîner des pénalités</li>
              <li><strong>Erreur de calcul :</strong> Vérifiez toujours vos montants</li>
              <li><strong>Oubli de documents :</strong> Conservez tous les justificatifs</li>
              <li><strong>Mauvais taux de TVA :</strong> Appliquez le bon taux selon le secteur</li>
              <li><strong>Oubli de la CA12 :</strong> Obligatoire même si pas de TVA à reverser</li>
              <li><strong>Gestion de trésorerie :</strong> Anticipez le paiement de la TVA</li>
            </ul>

            <h2>🔗 Ressources utiles</h2>
            <p>
              Pour approfondir vos connaissances sur la déclaration TVA :
            </p>
            <ul className="list-disc list-inside space-y-2 my-6">
              <li><Link to="/articles/calculer-tva-2024" className="text-indigo-600 hover:text-indigo-800">Guide complet : Comment calculer la TVA en 2024</Link></li>
              <li><Link to="/articles/tva-20-taux-normal" className="text-indigo-600 hover:text-indigo-800">TVA 20% : Tout savoir sur le taux normal</Link></li>
              <li><Link to="/articles/tva-reduite-10-5-5" className="text-indigo-600 hover:text-indigo-800">TVA réduite 10% et 5.5% : Secteurs concernés</Link></li>
              <li><Link to="/articles/ht-vs-ttc-comptabilite" className="text-indigo-600 hover:text-indigo-800">HT vs TTC : Comprendre la différence</Link></li>
              <li><Link to="/faq" className="text-indigo-600 hover:text-indigo-800">Consultez notre FAQ</Link> pour des questions fréquentes</li>
            </ul>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100 my-8 text-center">
              <h2 className="text-2xl font-bold text-red-800 mb-4">Prêt à déclarer votre TVA ?</h2>
              <p className="text-gray-700 mb-6">
                Maintenant que vous maîtrisez la déclaration TVA 2024, utilisez notre calculateur HT/TTC pour préparer vos déclarations en toute sérénité !
              </p>
              <Link 
                to="/"
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
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

export default DeclarationTVA2024; 
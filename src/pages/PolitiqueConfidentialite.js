import React from 'react';

const PolitiqueConfidentialite = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>
      
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-4xl border border-white/20 animate-fade-in relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-600 text-lg">
            Calculateur HT/TTC - Protection de vos données personnelles
          </p>
          <p className="text-sm text-gray-500 mt-2">Dernière mise à jour : 19 décembre 2024</p>
        </div>

        <div className="space-y-8 text-gray-700">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introduction</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Calculateur-TVA, éditeur du site <strong>calculateur-tva.skylogistics.fr</strong>, s'engage à protéger la vie privée de ses utilisateurs. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles lors de l'utilisation de notre calculateur HT/TTC en ligne.</p>
              <p>En utilisant notre calculateur de TVA, vous acceptez les pratiques décrites dans cette politique de confidentialité. Si vous avez des questions concernant cette politique, n'hésitez pas à nous contacter.</p>
            </div>
          </section>

          {/* Responsable du traitement */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsable du traitement</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-2"><strong>Responsable :</strong> Calculateur-TVA</p>
              <p className="mb-2"><strong>Site web :</strong> <a href="https://calculateur-tva.skylogistics.fr" className="text-indigo-600 hover:text-indigo-800">https://calculateur-tva.skylogistics.fr</a></p>
              <p className="mb-2"><strong>Email :</strong> <a href="mailto:contact@calculateur-tva.skylogistics.fr" className="text-indigo-600 hover:text-indigo-800">contact@calculateur-tva.skylogistics.fr</a></p>
              <p><strong>Service :</strong> Calculateur HT/TTC gratuit pour le calcul de TVA</p>
            </div>
          </section>

          {/* Données collectées */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Données collectées</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Données techniques</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Adresse IP :</strong> Collectée automatiquement pour la sécurité et les statistiques</li>
                <li><strong>User-Agent :</strong> Informations sur votre navigateur et système d'exploitation</li>
                <li><strong>Pages visitées :</strong> Suivi de navigation pour améliorer l'expérience utilisateur</li>
                <li><strong>Données de session :</strong> Stockage temporaire des calculs effectués</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Données de calcul</h3>
              <p className="mb-4">Notre calculateur HT/TTC ne stocke <strong>aucune donnée personnelle</strong> liée à vos calculs de TVA. Tous les montants saisis sont traités localement dans votre navigateur et ne sont jamais transmis à nos serveurs.</p>
              
              <p className="text-sm text-gray-600">⚠️ <strong>Important :</strong> Vos calculs de TVA restent privés et ne sont jamais enregistrés ou partagés.</p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cookies et technologies de suivi</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Cookies essentiels</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Cookies de session :</strong> Nécessaires au fonctionnement du calculateur HT/TTC</li>
                <li><strong>Cookies de sécurité :</strong> Protection contre les attaques et la fraude</li>
                <li><strong>Cookies de performance :</strong> Amélioration de la vitesse et de l'expérience utilisateur</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Google Tag Manager</h3>
              <p className="mb-4">Nous utilisons Google Tag Manager pour gérer nos outils d'analyse et de marketing. Ces services peuvent déposer des cookies tiers pour analyser l'utilisation de notre calculateur de TVA et améliorer nos services.</p>
              
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Gestion des cookies</h3>
              <p>Vous pouvez configurer votre navigateur pour refuser les cookies non essentiels. Cependant, cela peut affecter le fonctionnement optimal de notre calculateur HT/TTC.</p>
            </div>
          </section>

          {/* Utilisation des données */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Utilisation des données</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Les données que nous collectons sont utilisées exclusivement pour :</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Fournir le service :</strong> Assurer le bon fonctionnement du calculateur HT/TTC</li>
                <li><strong>Améliorer l'expérience :</strong> Optimiser l'interface et les performances</li>
                <li><strong>Sécurité :</strong> Détecter et prévenir les abus et attaques</li>
                <li><strong>Support technique :</strong> Résoudre les problèmes et assister les utilisateurs</li>
                <li><strong>Statistiques anonymes :</strong> Comprendre l'utilisation de notre outil de calcul de TVA</li>
              </ul>
              <p className="text-sm text-gray-600">🔒 <strong>Nous ne vendons jamais vos données personnelles à des tiers.</strong></p>
            </div>
          </section>

          {/* Partage des données */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Partage des données</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Calculateur-TVA ne partage vos données personnelles qu'avec :</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Prestataires techniques :</strong> Hébergeur, services d'analyse (Google Analytics via GTM)</li>
                <li><strong>Autorités légales :</strong> Seulement si requis par la loi</li>
                <li><strong>Protection des droits :</strong> Pour défendre nos droits ou ceux de nos utilisateurs</li>
              </ul>
              <p>Tous nos prestataires sont soumis à des obligations strictes de confidentialité et de sécurité des données.</p>
            </div>
          </section>

          {/* Sécurité */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sécurité des données</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Nous mettons en place des mesures de sécurité appropriées pour protéger vos données :</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Chiffrement SSL :</strong> Toutes les communications sont sécurisées</li>
                <li><strong>Accès restreint :</strong> Seul le personnel autorisé peut accéder aux données</li>
                <li><strong>Surveillance continue :</strong> Détection et prévention des intrusions</li>
                <li><strong>Sauvegardes sécurisées :</strong> Protection contre la perte de données</li>
              </ul>
              <p>Malgré nos efforts, aucune méthode de transmission sur Internet n'est 100% sécurisée. Nous nous efforçons d'utiliser des moyens commercialement acceptables pour protéger vos informations personnelles.</p>
            </div>
          </section>

          {/* Vos droits RGPD */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vos droits RGPD</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Droit d'accès :</strong> Connaître les données que nous détenons sur vous</li>
                <li><strong>Droit de rectification :</strong> Corriger des données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                <li><strong>Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                <li><strong>Droit d'opposition :</strong> S'opposer au traitement de vos données</li>
                <li><strong>Droit de limitation :</strong> Limiter le traitement de vos données</li>
              </ul>
              <p>Pour exercer ces droits, contactez-nous à <a href="mailto:contact@calculateur-tva.skylogistics.fr" className="text-indigo-600 hover:text-indigo-800">contact@calculateur-tva.skylogistics.fr</a></p>
            </div>
          </section>

          {/* Conservation des données */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Conservation des données</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Nous conservons vos données personnelles uniquement le temps nécessaire aux finalités pour lesquelles elles ont été collectées :</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Données de session :</strong> Supprimées à la fermeture du navigateur</li>
                <li><strong>Logs techniques :</strong> Conservés 12 mois maximum</li>
                <li><strong>Données analytiques :</strong> Conservées 26 mois maximum</li>
                <li><strong>Données de contact :</strong> Conservées tant que nécessaire au support</li>
              </ul>
              <p>Passé ces délais, vos données sont automatiquement supprimées ou anonymisées.</p>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Modifications de cette politique</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour révisée.</p>
              <p>Nous vous encourageons à consulter régulièrement cette politique pour rester informé de nos pratiques de protection de vos données personnelles.</p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact et questions</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Si vous avez des questions concernant cette politique de confidentialité ou la protection de vos données personnelles, n'hésitez pas à nous contacter :</p>
              <div className="text-center">
                <a href="mailto:contact@calculateur-tva.skylogistics.fr" className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200">
                  Nous contacter
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Retour au calculateur */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <a href="/" className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200">
            ← Retour au calculateur HT/TTC
          </a>
        </div>
      </div>
    </main>
  );
};

export default PolitiqueConfidentialite; 
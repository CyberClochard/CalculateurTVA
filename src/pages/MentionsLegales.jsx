import React from 'react';

const MentionsLegales = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" aria-hidden="true"></div>
      
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 w-full max-w-4xl border border-white/20 animate-fade-in relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Mentions Légales
          </h1>
          <p className="text-gray-600 text-lg">
            Calculateur HT/TTC - Outil de calcul de TVA en ligne
          </p>
        </div>

        <div className="space-y-8 text-gray-700">
          {/* Éditeur */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Éditeur du site</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-2"><strong>Raison sociale :</strong> Calculateur-TVA</p>
              <p className="mb-2"><strong>Site web :</strong> <a href="https://calculateur-tva.skylogistics.fr" className="text-indigo-600 hover:text-indigo-800">https://calculateur-tva.skylogistics.fr</a></p>
              <p className="mb-2"><strong>Email de contact :</strong> <a href="mailto:contact@calculateur-tva.skylogistics.fr" className="text-indigo-600 hover:text-indigo-800">contact@calculateur-tva.skylogistics.fr</a></p>
              <p><strong>Nature du service :</strong> Calculateur HT/TTC gratuit en ligne pour le calcul de TVA</p>
            </div>
          </section>

          {/* Hébergeur */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hébergement</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-2"><strong>Hébergeur :</strong> Skylogistics</p>
              <p className="mb-2"><strong>Adresse :</strong> Domaine skylogistics.fr</p>
              <p><strong>Infrastructure :</strong> Serveurs sécurisés avec certificats SSL</p>
            </div>
          </section>

          {/* Propriété intellectuelle */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Propriété intellectuelle</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.</p>
              <p className="mb-4">Le calculateur HT/TTC et son interface sont protégés par les droits de propriété intellectuelle. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable.</p>
              <p>Les marques et logos utilisés sur ce site sont la propriété de leurs détenteurs respectifs.</p>
            </div>
          </section>

          {/* Responsabilité */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsabilité</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Le calculateur HT/TTC est fourni à titre informatif et gratuit. Les calculs effectués sont basés sur les taux de TVA en vigueur en France. Nous nous efforçons de maintenir ces informations à jour, mais nous ne pouvons garantir leur exactitude absolue.</p>
              <p className="mb-4">L'utilisateur reste seul responsable de l'utilisation des résultats obtenus. Ce calculateur ne constitue pas un conseil fiscal et ne remplace pas l'expertise d'un professionnel de la comptabilité ou de la fiscalité.</p>
              <p>Calculateur-TVA ne pourra être tenu responsable des dommages directs ou indirects résultant de l'utilisation de cet outil de calcul de TVA.</p>
            </div>
          </section>

          {/* Liens hypertextes */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Liens hypertextes</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Les liens hypertextes mis en place dans le cadre du site web en direction d'autres ressources présentes sur le réseau Internet ne sauraient engager la responsabilité de Calculateur-TVA.</p>
              <p>Les utilisateurs et visiteurs du site web ne peuvent pas mettre en place un lien hypertexte en direction de ce site sans l'autorisation expresse et préalable de Calculateur-TVA.</p>
            </div>
          </section>

          {/* Droit applicable */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Droit applicable</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Tout litige en relation avec l'utilisation du site web <strong>calculateur-tva.skylogistics.fr</strong> est soumis au droit français. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de France.</p>
              <p>Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux français conformément aux règles de droit en vigueur.</p>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="mb-4">Pour toute question concernant ces mentions légales ou le calculateur HT/TTC, vous pouvez nous contacter :</p>
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

export default MentionsLegales; 
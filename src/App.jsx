import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalculateurHTTTC from './components/CalculateurHTTTC.jsx';
import Articles from './pages/Articles.jsx';
import CalculerTVA2024 from './pages/articles/CalculerTVA2024.jsx';
import TVA20TauxNormal from './pages/articles/TVA20TauxNormal.jsx';
import TVAReduite1055 from './pages/articles/TVAReduite1055.jsx';
import HTVsTTCComptabilite from './pages/articles/HTVsTTCComptabilite.jsx';
import DeclarationTVA2024 from './pages/articles/DeclarationTVA2024.jsx';
import { LazyMentionsLegales, LazyPolitiqueConfidentialite, LazyFAQ } from './components/LazyComponent.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalculateurHTTTC />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/calculer-tva-2024" element={<CalculerTVA2024 />} />
        <Route path="/articles/tva-20-taux-normal" element={<TVA20TauxNormal />} />
        <Route path="/articles/tva-reduite-10-5-5" element={<TVAReduite1055 />} />
        <Route path="/articles/ht-vs-ttc-comptabilite" element={<HTVsTTCComptabilite />} />
        <Route path="/articles/declaration-tva-2024" element={<DeclarationTVA2024 />} />
        <Route path="/mentions-legales" element={<LazyMentionsLegales />} />
        <Route path="/politique-confidentialite" element={<LazyPolitiqueConfidentialite />} />
        <Route path="/faq" element={<LazyFAQ />} />
      </Routes>
    </Router>
  );
}

export default App;

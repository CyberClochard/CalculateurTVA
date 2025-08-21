import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalculateurHTTTC from './components/CalculateurHTTTC.jsx';
import { LazyMentionsLegales, LazyPolitiqueConfidentialite, LazyFAQ } from './components/LazyComponent.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalculateurHTTTC />} />
        <Route path="/mentions-legales" element={<LazyMentionsLegales />} />
        <Route path="/politique-confidentialite" element={<LazyPolitiqueConfidentialite />} />
        <Route path="/faq" element={<LazyFAQ />} />
      </Routes>
    </Router>
  );
}

export default App;

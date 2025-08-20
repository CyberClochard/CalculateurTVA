import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CalculateurHTTTC from './components/CalculateurHTTTC';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CalculateurHTTTC />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
      </Routes>
    </Router>
  );
}

export default App;

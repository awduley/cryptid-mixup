import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';

import Home from './pages/home'; 
import CryptidMixup from './games/cryptid-mixup';
import OrbCatcher from './games/orb-catcher';


export default function App() {

  return (
    <div id="page" className="content">
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games/cryptid-mixup" element={<CryptidMixup />} />
          <Route path="/games/orb-catcher" element={<OrbCatcher />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
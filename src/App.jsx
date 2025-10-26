import { useState } from 'react';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';

import Home from './pages/index.jsx'; 
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';

import CryptidMixup from './games/cryptid-mixup';
import OrbCatcher from './games/orb-catcher';


export default function App() {

  return (
    <div id="page" className="content">
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/games/cryptid-mixup" element={<CryptidMixup />} />
          <Route path="/games/orb-catcher" element={<OrbCatcher />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
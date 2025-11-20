import { useState } from 'react';
import { Routes, Route, NavLink, Outlet } from 'react-router-dom';

import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';

import Home from './pages/index.jsx'; 
import About from './pages/About.jsx';
import Blog from './pages/Blog.jsx';
import NotFound from './pages/NotFound.jsx';

import Mascots from './pages/Mascots.jsx';
import MascotsDetailsPage from './pages/MascotsDetailPage.jsx';

import CryptidMixup from './games/cryptid-mixup/CryptidMixup.jsx';
import CryptacToe from './games/cryptac-toe/CryptacToe.jsx';
import OrbCatcher from './games/orb-catcher';


export default function App() {

  return (
    <div id="page" className="content">
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Mascots />} />
          <Route path="/team/:slug" element={<MascotsDetailsPage />} />
          <Route path="/games/cryptid-mixup" element={<CryptidMixup />} />
          <Route path="/games/cryptac-toe" element={<CryptacToe />} />
          <Route path="/games/orb-catcher" element={<OrbCatcher />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
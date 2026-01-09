import React from 'react';
import { Link } from 'react-router-dom';
import { GAMES } from '../data/games';
import GameCard from '../components/GameCard.jsx';

export default function TheCrypt() {

  // the two featured games I choose from time to time
  const featuredGames = GAMES.filter(game => game.featured);

  return(
    <main className="page page--bg-dark the-crypt" aria-labelledby="the-crypt-title">
      <div className="container">
        <header id="top" className="section">
          <h1 id="the-crypt-title" className="section__title">The Crypt</h1>
          <p className="section__subheading">Join the fun and try your hand at some of the various games the crew have been tirelessly working on! </p>
        </header>

        <section className="section the-crypt__featured" aria-labelledby="featured-title">
          <h2 id="featured-title" className="section__heading">Featured Cryptid Quest Games</h2>
          <p className="section__subheading">Hand selected games from the crew</p>
          <div className="the-crypt__grid--featured">
            {featuredGames.map(game => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>

        <section className="section the-crypt__all" aria-labelledby="all-title">
          <h2 id="all-title" className="section__heading">All Cryptid Quest Games</h2>
          <p className="section__subheading">Here you can find our full library of games. From playable, to prototype, to coming soon, they're all here.</p>
          <div className="the-crypt__grid--all">
            {GAMES.map(game => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </section>
        
        <footer className="section">
          <a href="#top">&uarr; Back to top</a>
          <span aria-hidden="true"> | </span>
          <Link to="/">&larr; Back to home</Link>
        </footer>
      </div>
    </main>
  );
}
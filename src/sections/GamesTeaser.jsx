import React from 'react';

import GameCard from '../components/GameCard';
import { GAMES } from '../data/games';

export default function GamesTeaser() {
  return(
    <section className="section section--bg-light games-teaser" aria-labelledby="games-heading">
      <div className="container">
        <h2 id="games-heading" className="section__title">Games from the Woods</h2>
        <p className="section__subtitle">Playable prototypes and polished minis—pick a trail and jump in</p>
        <p className="section__dev-note">
          <small><strong>Build note:</strong> Responsive card grid + image srcset pipeline; routing to game detail pages next</small>
        </p>
        <div className="games-teaser__grid">
          {GAMES.map(game => (
            <GameCard key={game.id || game.slug} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
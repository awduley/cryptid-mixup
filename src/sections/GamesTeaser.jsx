import React from 'react';

import GameCard from '../components/GameCard';
import { GAMES } from '../data/games';

function GamesTeaser() {
  return(
    <section className="games-teaser" aria-labelledby="games-heading">
      <h2 id="games-heading" className="games-teaser__title">Games from the Woods</h2>
      <div className="games-teaser__grid">
        {GAMES.map(game => (
          <GameCard key={game.id || game.slug} game={game} />
        ))}
      </div>
    </section>
  );
}

export default GamesTeaser;
import GameCard from '../components/GameCard';
import { GAMES } from '../data/games';

function GamesTeaser() {
  return(
    <section id="GamesTeaser" className="games">
      {GAMES.map(g => <GameCard key={g.id} game={g} />)}
    </section>
  );
}

export default GamesTeaser;
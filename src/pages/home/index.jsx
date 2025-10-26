import React from 'react';

import GamesTeaser from '../../sections/GamesTeaser';
import NewestPosts from '../../sections/NewestPosts';

import OrbCatcher from '../../games/orb-catcher';

export default function Home() {
  return(
    <>
      <GamesTeaser />
      <NewestPosts />
      <section className="games-dev">
        <h2>Orb Catcher</h2>
        <OrbCatcher />
      </section>
    </>
  );
}
import React from 'react';

import NewestPosts from '../sections/NewestPosts';
import GamesTeaser from '../sections/GamesTeaser';
import CraftTeaser from '../sections/CraftTeaser';

// import OrbCatcher from '../the-crypt/orb-catcher';

export default function Home() {
  return(
    <main>
      <NewestPosts />
      <GamesTeaser />  
      <CraftTeaser />  
    </main>
  );
}
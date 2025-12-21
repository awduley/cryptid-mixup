import React from 'react';

import GamesTeaser from '../sections/GamesTeaser';
import NewestPosts from '../sections/NewestPosts';

// import OrbCatcher from '../the-crypt/orb-catcher';

export default function Home() {
  return(
    <>
      <NewestPosts />
      <GamesTeaser />
    </>
  );
}
import React from 'react';

import GamesTeaser from '../sections/GamesTeaser';
import NewestPosts from '../sections/NewestPosts';

import OrbCatcher from '../games/orb-catcher';

export default function Home() {
  return(
    <>
      <GamesTeaser />
      <NewestPosts />
    </>
  );
}
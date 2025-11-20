import React, { useEffect } from 'react';

import '../games/shared/styles/index.scss'; 
import '../scss/pages/_blog.scss';    

export default function Blog() {
  // Set the <title> for this route
  useEffect(() => {
    document.title = 'Blog — Coming Soon | Cryptid Quest';
  }, []);

  return(
    <main id="blog" className="blog" aria-labelledby="blog-title">
      <header className="blog__hero">
        <h1 id="blog-title" className="blog__title">Blog — Coming soon</h1>
        <p className="blog__blurb">
          Dev logs, cryptid lore, and behind-the-scenes art & code are on the way.
        </p>
      </header>

      <section className="blog__cta" aria-labelledby="blog-cta-title">
        <h2 id="blog-cta-title" className="blog__subtitle">Want an update when we launch?</h2>
        <p className="blog__text">
          Shoot us an email:&nbsp;
          <a href="mailto:you@example.com?subject=Blog%20updates" className="blog__link">you@example.com</a>
        </p>
      </section>

      <section className="blog__teasers" aria-labelledby="blog-teasers-title">
        <h2 id="blog-teaser-title" className="blog__subtitle">Planned posts</h2>
        <ul className="blog__list">
          <li className="blog__card">Mascots: sketch → token → in-game (process)</li>
          <li className="blog__card">Tic-Tac-Toe AI ideas: from random to minimax</li>
          <li className="blog__card">Image pipeline: AVIF/WebPJPG, sizes, and crispness</li>
        </ul>
      </section>
    </main>
  );
}
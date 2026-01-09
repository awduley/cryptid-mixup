import { Link } from 'react-router-dom';

export default function About() {
  return(
    <main className="page page--bg-dark about" aria-labelledby="about-title">
      <div className="container prose">
        <header id="top" className="section">
          <h1 id="about-title" className="section__title">About Cryptid Quest</h1>

          <p>Cryptid Quest is my playground for building polished, modern web experiences. It's also home to the Cryptid Quest Woods—the foggy treeline where my ragtag crew of anti-heroes—equal parts game-addicted troublemakers and the masterminds behind the would-be Viking band, {/*something Fjell*/}, roam.</p>

          <p>You can jump into their world by playing quick web games in The Crypt (link to nudge them to the crypt page), following their antics through blog updates, and (soon) listening to the band's first full album, <em>And the Earth Trembles</em>, currently in production.</p>

          <p>Behind the lore, this site is my living portfolio: I build and refine everything here to push my JavaScript and front-end skills further. If you're looking for a developer who ships, iterates, and obsesses over polish, I'm available.</p>
        </header>

        <section className="section" aria-labelledby="about-explore">
          <h2 id="about-explore" className="section__heading">How to Explore</h2>
          <ul>
            <li><strong>Meet:</strong> Our outrageous band and team members, AKA <Link to="/the-crew">The Crew</Link>.</li>
            <li><strong>Play:</strong> Mini-games live in <Link to="/the-crypt">The Crypt</Link>.</li>
            <li><strong>Follow:</strong> Updates and lore drop on the <Link to="/blog">Blog</Link>.</li>
            <li><strong>Listen:</strong> The band's music will live on <Link to="/music">Music</Link> (soon).</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="about-build">
          <h2 id="about-build" className="section__heading">How it's built</h2>
          <p>Cryptid Quest is a hands-on project where I practice clean UI, responsive layout, accessibility basics, and solid game logic—then iterate until it feels finished.</p>

          <ul className="about__tags" aria-label="Core tools and focus areas">
            <li>JavaScript</li>
            <li>React</li>
            <li>SCSS</li>
            <li>UI polish</li>
            <li>Accessibility</li>
          </ul>

          <p>As the site grows, I'll be expanding into more full-stack features (blog tooling, content workflows, and backend experimentation) while keeping performance and clarity front and center.</p>
        </section>

        <section className="section" aria-labelledby="about-me">
          <h2 id="about-me" className="section__heading">About Me</h2>
          <p>I'm Andrew—web dev, game tinkerer, crypted enjoyer, and music lover. If you want a developer who keeps shipping and improving, you can reach me here:</p>

          <div className="about__cta">
            {/* <a className="about__button" href="/about-me">Learn more</a> */}
            {/* <a className="about__button about__button--secondary" href="/contact">Contact</a> */}
            {/* Optional later: GitHub / Resume */}
            {/* <a className="about__button about__button--secondary" href="https://github.com/yourname">GitHub</a> */}
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
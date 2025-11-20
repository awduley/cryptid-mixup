export default function About() {
  return(
    <main className="about">
      <header>
        <h1 id="top">About Cryptid Quest</h1>
        <p>Cryptid Quest is my growing collection of small, fast, web-based games themed around legendary creatures. The goal: quick-to-play fun that doubles as a portfolio of polished, modern front-end work.</p>
      </header>

      <section id="games" className="about__games">
        <h2>About the Games</h2>
        <p>Each game panel below expands with a quick overview, how to play, and what’s next.</p>
      </section>

      <details>
        <summary><strong>Cryptid Mix-up</strong> — memory match</summary>
        <div>
          <p>A snappy memory game where you flip cards to find pairs of classic cryptids. Built with React + SCSS. Great for testing logic, animations, and accessibility patterns.</p>
          <ul>
            <li><strong>How to play:</strong> Flip two, match pairs, clear the board fast.</li>
            <li><strong>What’s next:</strong> Hard mode, keyboard navigation, sound polish.</li>
            <li><strong>Tech:</strong> Vite, React, SCSS, SFX.</li>
          </ul>
        </div>
      </details>

      <details>
        <summary><strong>Cryptac-Toe</strong> — cryptid tic-tac-toe</summary>
        <div>
          <p>Fast, neon-styled tic-tac-toe starring Sasquatch vs. Dogman. Built with React + SCSS, with win/draw logic, colored win highlights, and click SFX.</p>
          <ul>
            <li><strong>How to play:</strong> Pick a square to place your token; first to 3-in-a-row wins. If the board fills with no line, it’s a draw.</li>
            <li><strong>What’s next:</strong> Scoreboard, keyboard play (arrow keys + Enter), improved tokens, tiny win modal.</li>
            <li><strong>Tech:</strong> Vite, React, SCSS, responsive images (WebP/AVIF), SFX with <code>Audio</code> + refs.</li>
          </ul>
        </div>
      </details>

      {/* Add more games here as you build them */}
      <details>
        <summary><strong>Future Game Slot</strong> — coming soon</summary>
        <div style={{ padding: '0.75rem 1rem' }}>
          <p>Placeholder for the next cryptid mini-game. Watch this space!</p>
        </div>
      </details>

      <section id="me" className="about__me">
        <h2>About Me</h2>
        <p>I’m Andrew—web dev, game tinkerer, and cryptid enjoyer. Cryptid Quest is my playground for building fun experiences while sharpening my React, SCSS, and UI polish. 
        <a href="/about-me"> Learn more →</a></p>
      </section> 
      <footer className="footer">
        <a href="#top" aria-label="Back to top">↑ Back to top</a>
      </footer>
    </main>
  );
}
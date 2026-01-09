import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return(
    <main className="page page--bg-dark contact" aria-labelledby="contact-title">
      <header id="top" className="section">
        <h1 id="contact-title" className="section__title">Contact</h1>
        <p>Want to report a bug, share feedback, or talk dev work? Send a message anytime.</p>
      </header>

      <section className="section prose" aria-labelledby="contact-email">
        <h2 id="contact-email" className="section__heading">Email</h2>
        <p><a href="mailto:feedback@cryptid.quest">feedback@cryptid.quest</a></p>
        <p style={{'font-size': '.9rem'}}contact__note>Get it? It's like feedback from a guitar amplifier!</p>
        <p>Helpful details (optional): the page URL, what you expected to happen, what happened, and your browser/device.</p>
      </section>

      <footer className="section">
        <a href="#top">&uarr; Back to top</a>
        <span aria-hidden="true"> | </span>
        <Link to="/">&larr; Back to home</Link>
      </footer>
    </main>
  );
}
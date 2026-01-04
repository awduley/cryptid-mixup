import React from 'react';
import { Link } from 'react-router-dom';

export default function Accessibility() {
  return(
    <main className="page page--bg-dark accessibility" aria-labelledby="accessibility-heading">
      <div className="container prose">
        <section className="section" aria-labelledby="accessibility-title">
          <h1 id="accessibility-title" className="section__title">Accessibility</h1>
          <p>Cryptid Quest is built to be usable for as many people as possible, including people who use screen readers, keyboard-only navigation, or other assistive technologies.</p>
        </section>

        <section className="section" aria-labelledby="approach-heading">
          <h2 id="approach-heading" className="section__heading">The Crew's Approach</h2>
          <ul>
            <li>Keyboard navigation and visible focus states</li>
            <li>Semantic HTML and accessible names/labels</li>
            <li>Color contrast and readable typography</li>
            <li>Responsive layouts for different devices and zoom levels</li>
            <li>Alt text for meaningful images</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="limitations-heading">
          <h2 id="limitations-heading" className="section__heading">Known limitations</h2>
          <p>We're actively improving. If you run into something that doesn't work for you, please tell us and we'll fix it.</p>
        </section>
      
        <section className="section" aria-labelledby="report-heading">
          <h2 id="report-heading" className="section__heading">Report an issue</h2>
          <p>
            When possible, include: the page URL, what you were trying to do, what device/browser you're using, and what assistive technologies (if any).
          </p>
        </section>

        <section className="section" aria-labelledby="contact-heading">
          <h2 id="contact-heading" className="section__heading">Contact</h2>
          <p>Email: <a href="mailto:feedback@cryptid.quest">feedback@cryptid.quest</a></p>
        </section>

        <p><Link to="/">← Back to home</Link></p>
      </div>
    </main>
  );
}
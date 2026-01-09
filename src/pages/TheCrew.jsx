import React from 'react';
import { Link } from 'react-router-dom';
import { CREW_MEMBERS } from '../data/crew-members';
import CrewMemberImage from '../components/CrewMemberImage.jsx';

export default function TheCrew() {
  return (
    <main className="page page--bg-dark the-crew" aria-labelledby="crew-title">
      <div className="container">
        <header id="top" className="section">
          <h1 id="crew-title" className="section__title">The Cryptid Quest Crew</h1>

          <p className="section__subheading">
            Meet the faces of Cryptid Quest — guardians, legends, and… oddities of the wild.
          </p>

          <p>
            Click a crew member to learn their story, role, and lore.
          </p>
        </header>

        <section className="section" aria-labelledby="crew-grid-title">
          {/* visually hidden heading keeps the section semantic without adding redundancy */}
          <h2 id="crew-grid-title" className="sr-only">Crew members</h2>

          <div className="the-crew__grid">
            {CREW_MEMBERS.map(crewMember => (
              <Link
                key={crewMember.slug}
                to={`/the-crew/${crewMember.slug}`}
                className="crew-card"
              >
                <div className="crew-card__header">
                  <h3 className="crew-card__name">{crewMember.name}</h3>
                  <p className="crew-card__tagline">{crewMember.tagline}</p>
                </div>

                <div className="crew-card__media">
                  <CrewMemberImage
                    slug={crewMember.slug}
                    size={400}
                    alt={crewMember.name}
                    className="crew-card__image"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="section">
          <a href="#top" aria-label="Back to top">↑ Back to top</a>
          <span aria-hidden="true"> | </span>
          <Link to="/">← Back to home</Link>
        </footer>
      </div>
    </main>
  );
}
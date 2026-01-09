import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CREW_MEMBERS } from '../data/crew-members';
import CrewMemberImage from '../components/CrewMemberImage.jsx';

export default function CrewMember() {
  const { slug } = useParams();
  const crewMember = CREW_MEMBERS.find(m => m.slug === slug);

  if (!crewMember) {
    return (
      <main className="page page--bg-dark crew-member" aria-labelledby="crew-not-found">
        <div className="container prose">
          <header className="section" id="top">
            <h1 id="crew-not-found" className="section__title">Crew member not found</h1>
            <p className="section__subheading">That trail goes cold. Let's get you back to the crew.</p>
            <Link to="/the-crew">← Back to the crew</Link>
          </header>

          <footer className="section">
            <a href="#top" aria-label="Back to top">↑ Back to top</a>
            <span aria-hidden="true"> | </span>
            <Link to="/">← Back to home</Link>
          </footer>
        </div>
      </main>
    );
  }

  const hasFunFacts = Array.isArray(crewMember.funFacts) && crewMember.funFacts.length > 0;

  return (
    <main className="page page--bg-dark crew-member" aria-labelledby="crew-member-title">
      <div className="container prose">
        <header className="section" id="top">
          <Link to="/the-crew" className="crew-member__back">
            ← Back to the crew
          </Link>
        </header>

        <article className="section crew-member__hero">
          <div className="crew-member__media">
            <CrewMemberImage
              slug={crewMember.slug}
              size={800}
              alt={crewMember.name}
              className="crew-member__image"
              loading="eager"
            />
          </div>

          <div className="crew-member__hero-text">
            <h1 id="crew-member-title" className="section__title">{crewMember.name}</h1>
            <p className="section__subheading crew-member__tagline">{crewMember.tagline}</p>
            <p className="crew-member__summary">{crewMember.summary}</p>
          </div>
        </article>

        <section className="section" aria-labelledby="crew-legend-title">
          <h2 id="crew-legend-title" className="section__heading">Legend</h2>
          {crewMember.lore?.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        {hasFunFacts && (
          <section className="section" aria-labelledby="crew-fun-facts-title">
            <h2 id="crew-fun-facts-title" className="section__heading">Fun Facts</h2>
            <ul>
              {crewMember.funFacts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>
          </section>
        )}

        <footer className="section">
          <a href="#top" aria-label="Back to top">↑ Back to top</a>
          <span aria-hidden="true"> | </span>
          <Link to="/the-crew">← Back to the crew</Link>
        </footer>
      </div>
    </main>
  );
}

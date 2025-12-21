import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mascots } from '../data/mascots';

import MascotImage from '../components/MascotImage'

export default function TheCrewDetailsPage() {
  const { slug } = useParams();
  const mascot = mascots.find(m => m.slug === slug);

  if (!mascot) {
    return (
      <main className="mascot-detail">
        <p>Crew member not found.</p>
        <Link to="/the-crew">← Back to the crew</Link>
      </main>
    );
  }

  return (
    <main className="mascot-detail">
      <Link to="/the-crew" className="mascot-detail__back">
        ← Back to the crew
      </Link>

      <article className="mascot-detail__content">
        <div className="mascot-detail__hero">
          <MascotImage 
            slug={mascot.slug}
            size={800}
            alt={mascot.name}
            className="mascot-detail__image"
            loading="eager"
          />
          <div className="mascot-detail__hero-text">
            <h1>{mascot.name}</h1>
            <p className="mascot-detail__tagline">{mascot.tagline}</p>
            <p className="mascot-detail__summary">{mascot.summary}</p>
          </div>
        </div>

        <section className="mascot-detail__section">
          <h2>Legend</h2>
          {mascot.lore.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </section>

        {mascot.funFacts.length > 0 && (
          <section className="mascot-detail__section">
            <h2>Fun Facts</h2>
            <ul>
              {mascot.funFacts.map((fact, i) => (
                <li key={i}>{fact}</li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </main>
  )
}
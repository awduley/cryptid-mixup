import React from 'react';
import { Link } from 'react-router-dom'
import { mascots } from '../data/mascots';

import MascotImage from '../components/MascotImage';

export default function Mascots() {
  return(
    <main className="mascots">
      <header className="mascots__header">
        <h1>The Cryptid Quest Team</h1>
        <p>Meet the faces of Cryptid Quest — guardians, legends, and well, let's just say...oddities of the wild.</p>
      </header>

      <section className="mascots__grid">
        {mascots.map(mascot => (
          <Link 
            key={mascot.slug}
            to={`/team/${mascot.slug}`}
            className="mascots__card"
          >
            <div className="mascots__card-header">
              <h2 className="mascots__card-name">{mascot.name}</h2>
              <p className="mascots__card-tagline">{mascot.tagline}</p>
            </div>
            
            <div className="mascots__card-image-wrapper">
              <MascotImage 
                slug={mascot.slug} 
                size={400}
                alt={mascot.name}
                className="mascots__card-image"
              />
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
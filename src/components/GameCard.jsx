import React from 'react';
import { Link } from 'react-router-dom';

const STATUS_LABEL = {
  playable: 'Playable',
  prototype: 'Prototype',
  comingSoon: 'Coming soon',
}

function GameCard({ game }) {

  const {
    slug,
    title,
    blurb,
    status = 'comingSoon',
    difficulty = 1,
    cover,      // single image path (fallback)
    coverBase,  // optional base path for 9-image set
  } = game;

  const sizes = '(max-width: 700px) 92vw, 26rem';

  const isPlayable = status === 'playable';
  const stars = '★'.repeat(Math.max(1, Math.min(3, difficulty))) +
                '☆'.repeat(3 - Math.max(1, Math.min(3, difficulty)));

  // If playable, the whole card is a link; otherwise it's a non-clickable block

  const Wrapper = isPlayable ? Link : 'div';
  const wrapperProps = isPlayable
    ? {
      to: `/games/${slug}`,
      className: 'game-card__link',
      'aria-label': `${title} — Play now`,
    }
    : {
      className: 'game-card__link game-card__link--disabled',
      'aria-disabled' : 'true', tabIndex: -1
    }

  return(
    <article className="game-card">
      <Wrapper {...wrapperProps}>

        <span className={`game-card__badge game-card__badge--${status}`}>{STATUS_LABEL[status] || 'Coming soon'}</span>

        <div className="game-card__body">
          <div className="game-card__meta">
            <span className="game-card__difficulty" aria-label={`Difficulty ${difficulty} of 3`}>
              {stars}
            </span>
          </div>

          <h3 className="game-card__title">{title}</h3>
          <p className="game-card__blurb">{blurb}</p>

          <span className="game-card__cta">
            {isPlayable ? 'Play →' : 'Coming soon'}
          </span>
        </div>
        
        <div className="game-card__media">
          {coverBase ? (
            <picture>
              <source 
                type="image/avif"
                srcSet={`
                  ${coverBase}-640.avif 640w,
                  ${coverBase}-960.avif 960w,
                  ${coverBase}-1200.avif 1200w
                `}
                sizes={sizes}
              />
              <source 
                type="image/webp"
                srcSet={`
                  ${coverBase}-640.webp 640w,
                  ${coverBase}-960.webp 960w,
                  ${coverBase}-1200.webp 1200w
                `}
                sizes={sizes}
              />
              <img src={`${coverBase}-640.jpg`}
                srcSet={`
                  ${coverBase}-640.jpg 640w,
                  ${coverBase}-960.jpg 960w,
                  ${coverBase}-1200.jpg 1200w
                `}
                sizes={sizes} 
                alt={`${title} — cover art`}
                width="1200"
                height="675"
                loading="lazy"
                decoding="async"
              />
            </picture>
          ) : (
            <img  
              src={cover} 
              alt={`${title} — cover art`}
              width="800"
              height="450"
              loading="lazy"
              decoding="async"
            />
          )}
        </div>
      </Wrapper>
    </article>
  );
}

export default GameCard;
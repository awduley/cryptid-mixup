import React from 'react';

const STATUS_LABEL = {
  playable: 'Playable',
  prototype: 'Prototype',
  comingSoon: 'Coming soon',
}

function GameCard({ game }) {

  const {
    slug,
    title,
    cover,
    blurb,
    status = 'comingSoon',
    difficulty = 1
  } = game;

  const isPlayable = status === 'playable';
  const stars = '★'.repeat(Math.max(1, Math.min(3, difficulty))) +
                '☆'.repeat(3 - Math.max(1, Math.min(3, difficulty)));

  // If playable, the whole card is a link; otherwise it's a non-clickable block

  const Wrapper = isPlayable ? 'a' : 'div';
  const wrapperProps = isPlayable
    ? {
      href: `/games/${slug}`,
      className: 'game-card__link',
      'aria-label': `${title} — Play now`,
    }
    : {
      className: 'game-card__link game-card__link--disabled',
      'aria-disabled' : 'true'
    }

  return(
    <article className="game-card">
      <Wrapper {...wrapperProps}>
        <div className="game-card__media">
          <img src={cover}
            alt=""
            width="800" height="450" 
            loading="lazy" decoding="async"
          />
          <span className={`game-card__badge game-card__badge--${status}`}>
            {STATUS_LABEL[status] || 'Coming soon'}
          </span>
        </div>

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
      </Wrapper>
    </article>
  );
}

export default GameCard;
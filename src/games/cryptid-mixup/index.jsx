import React, { useState, useEffect, useRef } from 'react';

import { sfx } from './logic/sfx';

import '../shared/styles/index.scss';
import './styles/index.scss';

const cryptidList = [
    {
      id: "sasquatch",
      label: "Sasquatch"
    },
    {
      id: "mothman",
      label: "Mothman"
    },
    {
      id: "jersey-devil",
      label: "Jersey Devil"
    },
    {
      id: "chupacabra",
      label: "Chupacabra"
    },
    {
      id: "dogman",
      label: "Dogman"
    },
    {
      id: "loch-ness-monster",
      label: "Loch Ness Monster"
    },
    {
      id: "yeti",
      label: "Yeti"
    },
    {
      id: "mokele-mbembe",
      label: "Mokele-mbembe"
    },
    // {
    //   id: "minotaur",
    //   label: "Minotaur"
    // },
    // {
    //   id: "thunderbird",
    //   label: "Thunderbird"
    // },
  ];

// Function that performs a Fisher Yates shuffle and then returns the shuffled deck
function shuffleCards(array) {
  // Make a shallow copy (new array, same element references)
  const deck = array.slice();

  // Shuffle the copy in place
  let i = deck.length;

  while (i > 0) {
    const j = Math.floor(Math.random() * i);
    i --;
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
 
  // Return the shuffled copy
  return deck
}

function buildDeck(baseList, pairs = 8) {
  // 1) pick the first N cryptids (N = pairs)
  const chosen = baseList.slice(0, pairs);

  // 2) duplicate each cryptid into two card instances
  const duplicated = chosen.flatMap(({ id, label }) => ([
    { pairId: id, instanceId: `${id}#1`, label, state: 'faceDown' },
    { pairId: id, instanceId: `${id}#2`, label, state: 'faceDown' },
  ]));

  // 3) shuffle the 16-card array
  return shuffleCards(duplicated)
}

const BASE = import.meta.env.BASE_URL;
const SIZES_W = [128, 192, 256, 384, 512];

const SIZES_ATTR =
  "(min-width:1400px) and (min-aspect-ratio:16/10) 12vw, " +
  "(max-width:768px) 40vw, " +
  "(max-height:768px) 20vh, " +
  "22vw"; // default 4x4 card width

function buildSrcSet(id, ext) {
    // e.g. /games/cryptid-mixup/cryptids/sasquatch/sasquatch-256.avif 256w
    return SIZES_W.map(w => `${BASE}games/cryptid-mixup/cryptids/${id}/${id}-${w}.${ext} ${w}w`).join(", ");
}

function fallbackUrl(id, w = 256, ext = "jpg") {
  return `${BASE}games/cryptid-mixup/cryptids/${id}/${id}-${w}.${ext}`;
}

export default function CryptidMixup() {

  const audioStartedRef = useRef(false);

  const [deck, setDeck] = useState(() => buildDeck(cryptidList));
  const [moves, setMoves] = useState(0);
  const [isResolving, setIsResolving] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  function handleReset() {
    setDeck(() => buildDeck(cryptidList)); // fresh shuffled deck
    setMoves(0);
    setIsResolving(false);
    setTimerOn(false);
    setSeconds(0);
    sfx.ambient.stop();
    audioStartedRef.current = false;
  }

  const fmtTime = s => `${String(Math.floor(s/60)).padStart(2, '0')}:${String(s%60).padStart(2, '0')}`;
  const isWin = deck.length > 0 && deck.every(c => c.state === 'matched');

  useEffect(() => {
    if (!timerOn) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [timerOn]);

  useEffect(() => {
    const anyFlipped = deck.some(c => c.state !== 'faceDown');

    // start when the first card flips
    if (anyFlipped && !isWin && !timerOn) setTimerOn(true);

    // stop when you win or when everything returns faceDown (reset)
    if ((isWin || !anyFlipped) && timerOn) setTimerOn(false);
  }, [deck, isWin, timerOn]);

  useEffect(() => {
    if (isResolving) return;

    const up = deck.filter(c => c.state === 'faceUp');
    if (up.length !== 2) return; // wait until exactly two are up

    setIsResolving(true);
    setMoves(m => m + 1);

    const [a, b] = up;
    const isMatch = a.pairId === b.pairId;
    isMatch ? sfx.match() : sfx.miss();

    const t = setTimeout(() => {
      setDeck(prev =>
        prev.map(card => {
          const isOneOfTwo = card.instanceId === a.instanceId || card.instanceId === b.instanceId;
          if (!isOneOfTwo) return card;
          return isMatch 
            ? { ...card, state: 'matched' }
            : { ...card, state: 'faceDown' }
        })
      );
      setIsResolving(false);
    }, 800);

    return () => clearTimeout(t);
  }, [deck]);

  useEffect(() => {
    if (!audioStartedRef.current && deck.some(c => c.state !== 'faceDown')) {
    sfx.ambient.start();          // no-op if already playing (see sfx.js tweak below)
    audioStartedRef.current = true;
  }
  }, [deck]);

  useEffect(() => {
    if (isWin) {
      sfx.ambient.stop();
      audioStartedRef.current = false;     // so a new game can start it again
      sfx.win();
    } 
  }, [isWin]);

  function handleFlip(instanceId) {
    if (isResolving) return;

    setDeck(prev => {
      // how many are up right now (from the same "prev" we're about to update)
      const openCount = prev.filter(c => c.state === 'faceUp').length;
      if (openCount >= 2) return prev; // wait until resolve

      const willFlip = prev.some(c => 
        c.instanceId === instanceId && c.state === 'faceDown'
      );

      if (willFlip) sfx.flip();

      return prev.map(card =>
        card.instanceId === instanceId && card.state === 'faceDown' ? { ...card, state: 'faceUp' } : card
      );
    });
  }

  return (
    <section id="cmx" className="cmx" aria-labelledby="cmx-title">
      <header className="cmx__header">
        <h1 id="cmx-title" className="cmx__title">
          Cryptid Mix-up
        </h1>
      </header>

      <main className="cmx__main">

        {isWin && (
          <div className="cmx__win" role="status">
            You win! 🎉
            <button className="cmx__btn"
            onClick={handleReset}>
            Play again
            </button>
          </div>
        )}
        
        {/* Board placeholder */}
        <div className="cmx__board" role="group" aria-labelledby="cmx__board--title">
          <h2 id="cmx__board--title" className="sr-only">Memory board, 4 by 4</h2>
          {deck.map(card => (
            <button
              key={card.instanceId}
              type="button"
              className={`cmx__card ${card.state}`} // faceDown | faceUp | matched
              onClick={() => handleFlip(card.instanceId)}
              disabled={isResolving || card.state !== 'faceDown'}
              aria-pressed={card.state !== 'faceDown'}
              aria-label={card.state === 'faceDown' ? 'face-down card' : card.label}
            >
              <span className="cmx__card-inner" aria-hidden="true">
                <span className="cmx__card-face cmx__card-face--back"></span>
              <span className="cmx__card-face cmx__card-face--front">
                <picture>
                  <source
                    type="image/avif"
                    srcSet={buildSrcSet(card.pairId, "avif")}
                    sizes={SIZES_ATTR}
                  />
                  <source
                    type="image/webp"
                    srcSet={buildSrcSet(card.pairId, "webp")}
                    sizes={SIZES_ATTR}
                  />
                  <img
                    src={fallbackUrl(card.pairId, 256, "jpg")} // final fallback
                    width="500" height="700"                  // preserve 5:7; avoid CLS
                    alt=""                                    // decorative (label handles a11y)
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </picture>
                            </span>
              </span>
            </button>
          ))}
        </div>

        {/* Controls placeholder */}
        <div className="cmx__controls">
          <button 
            className="cmx__btn" 
            type="button"
            onClick={handleReset}>
            Reset Deck
          </button>
          <div className="cmx__hud" aria-live="polite">
            <span className="cmx__moves">Moves: {moves}</span>
            <span className="cmx__time">Time: {fmtTime(seconds)}</span>
          </div>
        </div>
      </main>
    </section>
  );
}
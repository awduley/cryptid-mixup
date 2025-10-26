import React, { useEffect, useRef } from 'react';
import useRaf from './logic/useRaf';

import '../shared/styles/_game-base.scss';
import './styles/_orb-catcher.scss';

function OrbCatcher() {

  const fieldRef = useRef(null);   // the play area
  const orbRef   = useRef(null);   // the orb element

  // Persisted data that won't trigger re-renders
  const sizeRef = useRef({ w: 0, h: 0, r: 16 });           // r = radius (px)
  const posRef  = useRef({ x: 0, y: 0, vx: 120, vy: 0 });  // vx in px/sec

  // Measure the field size (on mount + resize)
  useEffect(() => {
    const measure = () => {
      const el = fieldRef.current;
      if (!el) return;
      const { clientWidth: w, clientHeight: h } = el;
      sizeRef.current.w = w;
      sizeRef.current.h = h;

      // Center the orb the first time we measure
      if (orbRef.current && posRef.current.x === 0 && posRef.current.y === 0) {
        posRef.current.x = w / 2;
        posRef.current.y = h / 2;
        const { r } = sizeRef.current;
        orbRef.current.style.transform =
          `translate(${posRef.current.x - r}px, ${posRef.current.y - r}px)`;
      }
    };

    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Animation loop: move horizontally and bounce on walls
  useRaf((dt) => {
    const { w, h, r } = sizeRef.current;
    if (!w || !h || !orbRef.current) return;

    const p = posRef.current;

    // advance position by velocity * time
    p.x += p.vx * dt;

    // bounce left/right
    if (p.x < r)           { p.x = r;       p.vx = Math.abs(p.vx); }
    if (p.x > w - r)       { p.x = w - r;   p.vx = -Math.abs(p.vx); }

    // draw (no React re-render; update DOM directly for 60fps)
    orbRef.current.style.transform = `translate(${p.x - r}px, ${p.y - r}px)`;
  }, true);

  return (
    <div className="game game--orb-catcher">
      <div ref={fieldRef} className="oc__field">
        <div ref={orbRef} className="oc__orb" />
      </div>
    </div>
  );
}

export default OrbCatcher;
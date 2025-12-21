import { useEffect, useRef } from 'react';


/**
 * Calls `callback(dt, now)` on every animation frame while `active` is true.
 * (This v1 uses a placeholder dt; we’ll add real delta time next.)
 */

function useRaf(callback, active = true) {

  const cbRef = useRef(callback);         // always call the latest logic
  cbRef.current = callback;

  const frameRef = useRef(null);          // id of the next scheduled frame
  const lastRef = useRef(null);           // timestamp of the previous frame

  useEffect(() => {
    if (!active) return;

    const loop = (now) => {
      // 1) compute dt (seconds) since last frame; cap to avoid huge jumps
      const last = lastRef.current ?? now;
      const dt = Math.min((now - last) / 1000, 0.05); // max ~50ms
      lastRef.current = now;

      // 2) run your per-frame logic
      cbRef.current?.(dt, now);

      // 3) schedule the NEXT frame (pass the function reference, not calling it)
      frameRef.current = requestAnimationFrame(loop);
    };

    // schedule the FIRST frame; loop will schedule subsequent ones
    frameRef.current = requestAnimationFrame(loop);

    // cleanup cancels the "next" scheduled call
    return() => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
      lastRef.current = null;
    };
  }, [active]); // note: NOT depending on 'callback' anymore
  return frameRef; // optional, rarely needed
}

export default useRaf;
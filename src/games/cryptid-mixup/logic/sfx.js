const BASE = import.meta.env.BASE_URL;

// Make a play function that supports overlap by cloning the node
const make =(path, {volume = 1, rate =1 } = {}) => {
  const a = new Audio(`${BASE}${path}`);
  a.preload = 'auto';
  a.volume = volume;
  a.playbackRate = rate;
  return () => {
    const node = a.cloneNode();
    node.volume = a.volume;
    node.playbackRate = a.playbackRate;
    node.play().catch(() => {});
  }
}

// Looping ambience (single shared node)
const makeLoop = (path, { volume = 0.05 } = {}) => {
  const loop = new Audio(`${BASE}${path}`);
  loop.preload = 'auto';
  loop.loop = true;
  loop.volume = volume;
  return {
    start: () => {
      if (loop.paused) loop.play().catch(() => {}); // only play if actually paused
    },
    stop:  () => { loop.pause(); loop.currentTime = 0; }
  };
};

export const sfx = {
  flip: make('games/cryptid-mixup/sounds/flip.mp3', { volume: 0.45 }),
  match: make('games/cryptid-mixup/sounds/match.mp3', { volume: 0.5 }),
  miss: make('games/cryptid-mixup/sounds/miss.mp3', { volume: 0.1 }),
  win: make('games/cryptid-mixup/sounds/win.mp3', { volume: 0.35 }),
  ambient: makeLoop('games/cryptid-mixup/sounds/ambient.mp3', { volume: 0.05 }),
}
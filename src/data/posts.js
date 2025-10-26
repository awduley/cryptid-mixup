import thumb from '../assets/images/logo-2.png';

export const POSTS = [
  {
    id: 'mothman-101',
    title: 'Mothman 101',
    slug: 'mothman-101',
    date: '2025-02-15',
    excerpt: 'A quick primer on Point Pleasant’s famous winged visitor.',
    cover: thumb,           // 800×450 WebP is perfect to start
    minutes: 5,
    category: 'Creature Spotlight',
  },
  {
    id: 'field-audio-basics',
    title: 'Fieldcraft: Capturing Clean Night Audio',
    slug: 'fieldcraft-audio-basics',
    date: '2025-02-10',
    excerpt: 'Simple tricks to avoid wind rumble and handling noise.',
    cover: thumb,
    minutes: 4,
    category: 'Fieldcraft',
  },
  {
    id: 'devlog-hero-fog',
    title: 'Devlog: Building the Foggy Hero',
    slug: 'devlog-hero-fog',
    date: '2025-02-05',
    excerpt: 'How the layered gradients + clamp() came together.',
    cover: thumb,
    minutes: 6,
    category: 'Devlog',
  },
];
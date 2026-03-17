export interface Project {
  id: string;
  title: string;
  description: string;
  details: string;
  thumbnail: string;
  category: 'Residential' | 'Commercial' | 'Retail' | 'Bespoke';
  tags: string[];
  year: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  iframeUrl: string;
  appImageUrl: string;
  thumbnail: string;
  category: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'elysian-residence',
    title: 'Elysian Residence',
    description: 'A minimalist urban sanctuary defined by raw concrete textures and expansive natural light.',
    details: 'Located in the heart of the city, this residence utilizes industrial materiality to create a sense of profound silence and retreat from the urban chaos.',
    thumbnail: '/src/assets/elysian.png',
    category: 'Residential',
    tags: ['Minimalism', 'Concrete', 'Urban'],
    year: '2024'
  },
  {
    id: 'obsidian-lounge',
    title: 'Obsidian Lounge',
    description: 'An atmospheric commercial space exploring the boundaries of darkness and dramatic focal lighting.',
    details: 'Defined by deep charcoal palettes and velvet textures, the Obsidian Lounge provides an intimate social experience for the avant-garde.',
    thumbnail: '/src/assets/obsidian.png',
    category: 'Commercial',
    tags: ['Atmospheric', 'Luxury', 'Retail'],
    year: '2023'
  },
  {
    id: 'ivory-atelier',
    title: 'Ivory Atelier',
    description: 'A bright, multi-functional studio space designed for creative precision and modular flexibility.',
    details: 'Clean lines and a neutral palette define this fashion atelier, where architectural mezzanine levels create distinct zones for conceptual work.',
    thumbnail: '/src/assets/ivory.png',
    category: 'Commercial',
    tags: ['Bright', 'Modular', 'Studio'],
    year: '2023'
  },
  {
    id: 'verdant-villa',
    title: 'Verdant Villa',
    description: 'Sustainable tropical architecture that blurs the line between interior sanctuary and nature.',
    details: 'Utilizing local volcanic stone and bamboo, this villa integrates the surrounding landscape directly into the living experience through open-air transitions.',
    thumbnail: '/src/assets/verdant.png',
    category: 'Residential',
    tags: ['Tropical', 'Sustainable', 'Architecture'],
    year: '2024'
  }
];

export const GAMES: Game[] = [
  {
    id: "pacman",
    title: "Pac-Man",
    description: "The classic arcade game where you eat dots and avoid ghosts.",
    iframeUrl: "https://macek.github.io/google_pacman/",
    appImageUrl: "https://github.com/mamedev/mame/releases",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600",
    category: "Arcade"
  },
  {
    id: "2048",
    title: "2048",
    description: "Join the numbers and get to the 2048 tile!",
    iframeUrl: "https://gabrielecirulli.github.io/2048/",
    appImageUrl: "https://github.com/gabrielecirulli/2048/releases",
    thumbnail: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=600",
    category: "Puzzle"
  },
  {
    id: "hextris",
    title: "Hextris",
    description: "Fast-paced puzzle game inspired by Tetris but on a hexagon.",
    iframeUrl: "https://hextris.github.io/hextris/",
    appImageUrl: "https://github.com/Hextris/hextris/releases",
    thumbnail: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=600",
    category: "Puzzle"
  },
  {
    id: "sinuous",
    title: "Sinuous",
    description: "Avoid the red dots and stay alive as long as possible.",
    iframeUrl: "https://sinuousgame.com/",
    appImageUrl: "https://github.com/hakimel/sinuous/releases",
    thumbnail: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=600",
    category: "Action"
  }
];

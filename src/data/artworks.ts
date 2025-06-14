import { Artwork } from '../types';

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Ethereal Sunset',
    artist: 'Marina Rodriguez',
    price: 1250,
    originalPrice: 1500,
    description: 'A captivating abstract interpretation of a sunset over the ocean, painted with bold strokes and vibrant colors that evoke emotion and movement. This piece captures the fleeting beauty of twilight with masterful use of warm oranges, deep purples, and golden yellows.',
    category: 'abstract',
    medium: 'Oil on Canvas',
    dimensions: '24" x 36"',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg',
    images: [
      'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg',
      'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg'
    ],
    featured: true,
    inStock: true,
    tags: ['abstract', 'sunset', 'ocean', 'vibrant']
  },
  {
    id: '2',
    title: 'Mountain Serenity',
    artist: 'David Chen',
    price: 950,
    description: 'A peaceful landscape depicting the majestic beauty of snow-capped mountains reflected in a crystal-clear alpine lake. The painting showcases incredible detail and a masterful understanding of light and shadow.',
    category: 'landscape',
    medium: 'Acrylic on Canvas',
    dimensions: '20" x 30"',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
    images: [
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
      'https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg'
    ],
    featured: true,
    inStock: true,
    tags: ['landscape', 'mountains', 'nature', 'serene']
  },
  {
    id: '3',
    title: 'Urban Dreams',
    artist: 'Sofia Petrov',
    price: 1800,
    description: 'A contemporary piece that captures the energy and complexity of modern city life through bold geometric shapes and a striking color palette. This artwork speaks to the urban experience and the dreams we chase.',
    category: 'contemporary',
    medium: 'Mixed Media on Canvas',
    dimensions: '30" x 40"',
    year: 2024,
    imageUrl: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg',
    images: [
      'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg',
      'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg'
    ],
    featured: true,
    inStock: true,
    tags: ['contemporary', 'urban', 'geometric', 'modern']
  },
  {
    id: '4',
    title: 'Garden Bloom',
    artist: 'Emma Thompson',
    price: 750,
    description: 'A delicate still life featuring a vibrant bouquet of spring flowers, painted with exquisite attention to detail and a soft, romantic palette that brings the beauty of nature indoors.',
    category: 'still-life',
    medium: 'Watercolor on Paper',
    dimensions: '16" x 20"',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
    images: [
      'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg',
      'https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg'
    ],
    featured: false,
    inStock: true,
    tags: ['still-life', 'flowers', 'spring', 'delicate']
  },
  {
    id: '5',
    title: 'Contemplation',
    artist: 'Marcus Johnson',
    price: 1400,
    description: 'A powerful portrait that captures the depth of human emotion and introspection. The artist\'s skillful use of light and shadow creates an intimate and moving piece that speaks to the soul.',
    category: 'portrait',
    medium: 'Oil on Canvas',
    dimensions: '18" x 24"',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
    images: [
      'https://images.pexels.com/photos/1183099/pexels-photo-1183099.jpeg',
      'https://images.pexels.com/photos/1183077/pexels-photo-1183077.jpeg'
    ],
    featured: false,
    inStock: true,
    tags: ['portrait', 'emotion', 'introspective', 'human']
  },
  {
    id: '6',
    title: 'Ocean Waves',
    artist: 'Isabella Martinez',
    price: 1100,
    description: 'Dynamic seascape capturing the raw power and beauty of ocean waves crashing against rocky cliffs. The painting conveys movement and energy through bold brushstrokes and a dramatic color palette.',
    category: 'landscape',
    medium: 'Oil on Canvas',
    dimensions: '22" x 32"',
    year: 2024,
    imageUrl: 'https://images.pexels.com/photos/1438379/pexels-photo-1438379.jpeg',
    images: [
      'https://images.pexels.com/photos/1438379/pexels-photo-1438379.jpeg',
      'https://images.pexels.com/photos/1438408/pexels-photo-1438408.jpeg'
    ],
    featured: false,
    inStock: true,
    tags: ['landscape', 'ocean', 'waves', 'dynamic']
  },
  {
    id: '7',
    title: 'Abstract Harmony',
    artist: 'Alexander Kim',
    price: 2200,
    description: 'A large-scale abstract work that explores the relationship between color, form, and emotion. The painting features flowing compositions that create a sense of harmony and balance.',
    category: 'abstract',
    medium: 'Acrylic on Canvas',
    dimensions: '36" x 48"',
    year: 2024,
    imageUrl: 'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg',
    images: [
      'https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg',
      'https://images.pexels.com/photos/1194421/pexels-photo-1194421.jpeg'
    ],
    featured: false,
    inStock: true,
    tags: ['abstract', 'harmony', 'large-scale', 'flowing']
  },
  {
    id: '8',
    title: 'Vintage Elegance',
    artist: 'Catherine Williams',
    price: 875,
    description: 'A classic still life arrangement featuring antique objects and rich textures, painted in the traditional style with meticulous attention to detail and sophisticated color harmonies.',
    category: 'still-life',
    medium: 'Oil on Canvas',
    dimensions: '20" x 24"',
    year: 2023,
    imageUrl: 'https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg',
    images: [
      'https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg',
      'https://images.pexels.com/photos/1183027/pexels-photo-1183027.jpeg'
    ],
    featured: false,
    inStock: true,
    tags: ['still-life', 'vintage', 'elegant', 'classic']
  }
];
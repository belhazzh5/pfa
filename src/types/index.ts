export interface Artwork {
  id: string;
  title: string;
  artist: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  medium: string;
  dimensions: string;
  year: number;
  imageUrl: string;
  images: string[];
  featured: boolean;
  inStock: boolean;
  tags: string[];
}

export interface CartItem {
  artwork: Artwork;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export type Category = 'all' | 'abstract' | 'landscape' | 'portrait' | 'still-life' | 'contemporary';
import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { Artwork } from '../types';

interface GalleryProps {
  artworks: Artwork[];
  onViewDetails: (artwork: Artwork) => void;
}

const Gallery: React.FC<GalleryProps> = ({ artworks, onViewDetails }) => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Art Gallery</h1>
          <p className="text-lg text-gray-600">
            Browse our complete collection of exceptional painted artworks from talented artists worldwide.
          </p>
        </div>
        
        <ProductGrid artworks={artworks} onViewDetails={onViewDetails} />
      </div>
    </div>
  );
};

export default Gallery;
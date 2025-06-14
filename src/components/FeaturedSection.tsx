import React from 'react';
import { ArrowRight, Star, Award, Users } from 'lucide-react';
import { Artwork } from '../types';
import ProductCard from './ProductCard';

interface FeaturedSectionProps {
  featuredArtworks: Artwork[];
  onViewDetails: (artwork: Artwork) => void;
  onViewAll: () => void;
}

const FeaturedSection: React.FC<FeaturedSectionProps> = ({ 
  featuredArtworks, 
  onViewDetails, 
  onViewAll 
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-amber-50 px-4 py-2 rounded-full mb-4">
            <Star className="h-4 w-4 text-amber-600" />
            <span className="text-sm font-medium text-amber-700">Featured Collection</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Exceptional Artworks
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of outstanding paintings that showcase 
            the finest artistic expressions from our talented community of artists.
          </p>
        </div>

        {/* Featured Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
              <Award className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Curated Excellence</h3>
            <p className="text-gray-600">Each artwork is carefully selected for its artistic merit and quality</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
              <Users className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Talented Artists</h3>
            <p className="text-gray-600">Supporting emerging and established artists from around the world</p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4">
              <Star className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Museum-quality pieces that will enhance any collection</p>
          </div>
        </div>

        {/* Featured Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArtworks.map((artwork) => (
            <ProductCard
              key={artwork.id}
              artwork={artwork}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={onViewAll}
            className="inline-flex items-center space-x-2 bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition-colors font-medium group"
          >
            <span>View All Artworks</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
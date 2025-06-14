import React from 'react';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import { Artwork } from '../types';

interface HomeProps {
  featuredArtworks: Artwork[];
  onViewDetails: (artwork: Artwork) => void;
  onNavigateToGallery: () => void;
}

const Home: React.FC<HomeProps> = ({ featuredArtworks, onViewDetails, onNavigateToGallery }) => {
  return (
    <div>
      <Hero onExploreGallery={onNavigateToGallery} />
      <FeaturedSection 
        featuredArtworks={featuredArtworks}
        onViewDetails={onViewDetails}
        onViewAll={onNavigateToGallery}
      />
    </div>
  );
};

export default Home;
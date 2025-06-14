import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDetail from './components/ProductDetail';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { artworks } from './data/artworks';
import { Artwork } from './types';

type Page = 'home' | 'gallery' | 'about' | 'contact' | 'product-detail';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const featuredArtworks = artworks.filter(artwork => artwork.featured);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleViewDetails = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    setCurrentPage('product-detail');
  };

  const handleBackToGallery = () => {
    setCurrentPage('gallery');
    setSelectedArtwork(null);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <Home
            featuredArtworks={featuredArtworks}
            onViewDetails={handleViewDetails}
            onNavigateToGallery={() => setCurrentPage('gallery')}
          />
        );
      case 'gallery':
        return (
          <Gallery
            artworks={artworks}
            onViewDetails={handleViewDetails}
          />
        );
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'product-detail':
        return selectedArtwork ? (
          <ProductDetail
            artwork={selectedArtwork}
            onBack={handleBackToGallery}
          />
        ) : null;
      default:
        return (
          <Home
            featuredArtworks={featuredArtworks}
            onViewDetails={handleViewDetails}
            onNavigateToGallery={() => setCurrentPage('gallery')}
          />
        );
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header 
            currentPage={currentPage} 
            onNavigate={handleNavigate}
          />
          <main className="flex-1">
            {renderCurrentPage()}
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
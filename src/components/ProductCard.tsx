import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Artwork } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  artwork: Artwork;
  onViewDetails: (artwork: Artwork) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ artwork, onViewDetails }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(artwork);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={() => onViewDetails(artwork)}
    >
      <div className="relative overflow-hidden">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors">
            <Heart className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        {artwork.originalPrice && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            Sale
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
            {artwork.title}
          </h3>
          <div className="text-right">
            <p className="text-lg font-bold text-gray-900">${artwork.price.toLocaleString()}</p>
            {artwork.originalPrice && (
              <p className="text-sm text-gray-500 line-through">
                ${artwork.originalPrice.toLocaleString()}
              </p>
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">by {artwork.artist}</p>
        <p className="text-xs text-gray-500 mb-3">{artwork.medium} • {artwork.dimensions}</p>
        
        <p className="text-sm text-gray-700 mb-4 line-clamp-2">
          {artwork.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {artwork.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors flex items-center space-x-2 text-sm font-medium"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
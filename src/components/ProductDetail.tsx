import React, { useState } from 'react';
import { ArrowLeft, Heart, Share2, ShoppingCart, Truck, Shield, RefreshCw } from 'lucide-react';
import { Artwork } from '../types';
import { useCart } from '../contexts/CartContext';

interface ProductDetailProps {
  artwork: Artwork;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ artwork, onBack }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(artwork);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Gallery</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={artwork.images[selectedImageIndex]}
                alt={artwork.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {artwork.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {artwork.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                      selectedImageIndex === index ? 'border-amber-600' : 'border-gray-200'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${artwork.title} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{artwork.title}</h1>
              <p className="text-lg text-gray-600 mb-4">by {artwork.artist}</p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-gray-900">
                    ${artwork.price.toLocaleString()}
                  </span>
                  {artwork.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${artwork.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                {artwork.originalPrice && (
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded-md text-sm font-medium">
                    Save ${(artwork.originalPrice - artwork.price).toLocaleString()}
                  </span>
                )}
              </div>
            </div>

            {/* Artwork Details */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Artwork Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Medium:</span>
                  <span className="ml-2 font-medium">{artwork.medium}</span>
                </div>
                <div>
                  <span className="text-gray-600">Dimensions:</span>
                  <span className="ml-2 font-medium">{artwork.dimensions}</span>
                </div>
                <div>
                  <span className="text-gray-600">Year:</span>
                  <span className="ml-2 font-medium">{artwork.year}</span>
                </div>
                <div>
                  <span className="text-gray-600">Category:</span>
                  <span className="ml-2 font-medium capitalize">{artwork.category}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{artwork.description}</p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {artwork.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-amber-600 text-white py-3 px-6 rounded-md hover:bg-amber-700 transition-colors font-medium flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </button>
                
                <button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-3 rounded-md border transition-colors ${
                    isWishlisted
                      ? 'bg-red-50 border-red-200 text-red-600'
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
                
                <button className="p-3 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>

              {/* Shipping & Guarantees */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                <div className="flex items-center space-x-3">
                  <Truck className="h-5 w-5 text-gray-600" />
                  <span className="text-sm text-gray-700">Free shipping on orders over $1000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-gray-600" />
                  <span className="text-sm text-gray-700">Authenticity guaranteed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <RefreshCw className="h-5 w-5 text-gray-600" />
                  <span className="text-sm text-gray-700">30-day return policy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onExploreGallery: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreGallery }) => {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-orange-100 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Star className="h-4 w-4 text-amber-500" />
                <span className="text-sm font-medium text-gray-700">Curated Art Collection</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover 
                <span className="text-amber-600"> Exceptional</span>
                <br />
                Painted Artworks
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                Explore our carefully curated collection of original paintings from talented artists around the world. 
                Each piece tells a unique story and brings beauty to your space.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onExploreGallery}
                className="bg-amber-600 text-white px-8 py-3 rounded-md hover:bg-amber-700 transition-colors font-medium flex items-center justify-center space-x-2 group"
              >
                <span>Explore Gallery</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Artworks</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Artists</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Artworks */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-2 rounded-lg shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg"
                    alt="Featured artwork"
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="p-2">
                    <h3 className="font-semibold text-sm">Ethereal Sunset</h3>
                    <p className="text-xs text-gray-600">Marina Rodriguez</p>
                  </div>
                </div>
                
                <div className="bg-white p-2 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg"
                    alt="Featured artwork"
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <div className="p-2">
                    <h3 className="font-semibold text-sm">Mountain Serenity</h3>
                    <p className="text-xs text-gray-600">David Chen</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 pt-8">
                <div className="bg-white p-2 rounded-lg shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg"
                    alt="Featured artwork"
                    className="w-full h-32 object-cover rounded-md"
                  />
                  <div className="p-2">
                    <h3 className="font-semibold text-sm">Urban Dreams</h3>
                    <p className="text-xs text-gray-600">Sofia Petrov</p>
                  </div>
                </div>
                
                <div className="bg-white p-2 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <img
                    src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
                    alt="Featured artwork"
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="p-2">
                    <h3 className="font-semibold text-sm">Garden Bloom</h3>
                    <p className="text-xs text-gray-600">Emma Thompson</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-400 rounded-full opacity-70 animate-pulse animation-delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
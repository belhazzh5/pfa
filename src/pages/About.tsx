import React from 'react';
import { Users, Award, Heart, Globe, Palette, Star } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Artworks', value: '500+', icon: Palette },
    { label: 'Artists', value: '50+', icon: Users },
    { label: 'Countries', value: '25+', icon: Globe },
    { label: 'Happy Customers', value: '1000+', icon: Heart }
  ];

  const values = [
    {
      icon: Award,
      title: 'Quality First',
      description: 'We carefully curate each artwork to ensure exceptional quality and artistic merit.'
    },
    {
      icon: Users,
      title: 'Artist Support',
      description: 'We believe in supporting artists by providing them with a platform to showcase their work.'
    },
    {
      icon: Heart,
      title: 'Passion for Art',
      description: 'Our love for art drives everything we do, from curation to customer service.'
    },
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our business and customer experience.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About ArtGallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are passionate about connecting art lovers with exceptional painted artworks from talented artists around the world. 
            Our mission is to make beautiful art accessible to everyone while supporting the artistic community.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2020, ArtGallery began as a dream to create a bridge between talented artists and art enthusiasts. 
                  We recognized that many exceptional artists struggled to find platforms to showcase their work, while art lovers 
                  had difficulty discovering authentic, high-quality pieces.
                </p>
                <p>
                  Today, we proudly represent over 50 artists from 25 countries, offering a diverse collection of painted artworks 
                  that span multiple styles, mediums, and price points. Each piece in our collection is hand-selected for its 
                  artistic merit, quality, and unique perspective.
                </p>
                <p>
                  We believe that art has the power to transform spaces, inspire conversations, and enrich lives. Our commitment 
                  goes beyond just selling art – we're building a community where artists can thrive and art lovers can discover 
                  their next treasured piece.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg"
                alt="Art gallery"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg"
                alt="Artist working"
                className="rounded-lg shadow-md mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide every decision we make and every interaction we have with our community.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-br from-amber-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Art Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're an art collector, interior designer, or someone who simply appreciates beauty, 
            we invite you to explore our collection and discover your next favorite piece.
          </p>
          <button className="bg-white text-amber-600 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors font-medium">
            Explore Our Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
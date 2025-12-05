'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'GPS Tracker Pro',
      price: '₹2,999',
      category: 'devices',
      image: '📡',
      description: 'Advanced GPS tracking device with real-time updates',
      features: ['Live GPS', 'Geofencing', '7 Days Battery'],
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: 'Fleet Manager Suite',
      price: '₹999/month',
      category: 'software',
      image: '📊',
      description: 'Complete fleet management software solution',
      features: ['Analytics', 'Driver Reports', 'Fuel Tracking'],
      rating: 4.9,
      inStock: true
    },
    {
      id: 3,
      name: 'OBD-II Connector',
      price: '₹1,499',
      category: 'devices',
      image: '🔌',
      description: 'Plug-and-play OBD-II GPS tracker',
      features: ['Vehicle Diagnostics', 'Real-time Location', '30 Days Battery'],
      rating: 4.7,
      inStock: true
    },
    {
      id: 4,
      name: 'Anti-Theft Alarm',
      price: '₹3,999',
      category: 'accessories',
      image: '🚨',
      description: 'Advanced anti-theft system with GPS',
      features: ['Instant Alerts', 'Remote Engine Lock', 'SOS Button'],
      rating: 4.6,
      inStock: true
    },
    {
      id: 5,
      name: 'Premium Support Plan',
      price: '₹499/month',
      category: 'services',
      image: '🎧',
      description: '24/7 dedicated support and maintenance',
      features: ['24/7 Support', 'Monthly Reports', 'Priority Updates'],
      rating: 4.9,
      inStock: true
    },
    {
      id: 6,
      name: 'Integration API',
      price: '₹1,999/month',
      category: 'software',
      image: '⚙️',
      description: 'Custom API for enterprise integration',
      features: ['Unlimited API Calls', 'Webhooks', 'REST API'],
      rating: 4.8,
      inStock: true
    },
    {
      id: 7,
      name: 'HD Dash Camera',
      price: '₹4,999',
      category: 'accessories',
      image: '📹',
      description: 'Full HD dash camera with GPS timestamp',
      features: ['1080p Recording', 'Night Vision', 'GPS Location Tag'],
      rating: 4.7,
      inStock: true
    },
    {
      id: 8,
      name: 'GPS Vehicle Lock',
      price: '₹5,999',
      category: 'devices',
      image: '🔐',
      description: 'Smart vehicle lock system with GPS',
      features: ['Remote Unlock', 'Location Tracking', 'Backup Battery'],
      rating: 4.9,
      inStock: false
    }
  ];

  const categories = [
    { id: 'all', name: '🎯 All Products' },
    { id: 'devices', name: '📡 Devices' },
    { id: 'software', name: '📊 Software' },
    { id: 'accessories', name: '🛠️ Accessories' },
    { id: 'services', name: '🎧 Services' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Shop</h1>
            <p className="text-xl text-blue-100">Discover our range of GPS tracking solutions and accessories</p>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105 ${
                    selectedCategory === cat.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-blue-600'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition transform hover:scale-105 border border-gray-200"
                >
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center text-6xl">
                    {product.image}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-gray-800 flex-1">{product.name}</h3>
                      {!product.inStock && (
                        <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">Out of Stock</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                    <div className="mb-3">
                      <div className="flex items-center gap-1 mb-2">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                      </div>
                      <div className="flex gap-1 flex-wrap">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                      <button
                        className={`px-4 py-2 rounded-lg font-semibold transition ${
                          product.inStock
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                        disabled={!product.inStock}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-2xl text-gray-500">No products found in this category</p>
              </div>
            )}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Special Offer</h2>
            <p className="text-xl mb-8 text-blue-50">Get 20% off on all devices this month</p>
            <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition">
              Shop Now
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

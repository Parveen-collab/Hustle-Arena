'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);

  const allProducts = [
    { id: '1', name: 'GPS Tracker Pro', description: 'Advanced GPS tracking device with 4G connectivity and 10,000mAh battery', price: 2499, image: '📡', category: 'GPS Devices' },
    { id: '2', name: 'GPS Tracker Mini', description: 'Compact GPS tracker for small vehicles with real-time tracking', price: 1899, image: '📡', category: 'GPS Devices' },
    { id: '3', name: 'Fleet Manager Elite', description: 'Premium fleet management package with all features', price: 4999, image: '🚗', category: 'Fleet Solutions' },
    { id: '4', name: 'OBD2 Connector', description: 'Vehicle diagnostic OBD2 adapter with fault code reading', price: 1299, image: '🔌', category: 'Accessories' },
    { id: '5', name: 'Fuel Sensor Kit', description: 'Accurate fuel monitoring sensor with real-time data', price: 1899, image: '⛽', category: 'Sensors' },
    { id: '6', name: 'Temperature Sensor', description: 'Temperature and humidity monitoring sensor for refrigerated vehicles', price: 1599, image: '🌡️', category: 'Sensors' },
    { id: '7', name: 'Vehicle Antenna', description: 'High-gain GPS antenna for enhanced signal reception', price: 899, image: '📶', category: 'Accessories' },
    { id: '8', name: 'Power Cable Kit', description: 'Heavy-duty power cable for continuous vehicle tracking', price: 499, image: '🔋', category: 'Accessories' },
    { id: '9', name: 'Driver Monitoring Package', description: 'Package for driver behavior monitoring and alerts', price: 3499, image: '👁️', category: 'Fleet Solutions' },
    { id: '10', name: 'SOS Device', description: 'Emergency SOS button device for vehicle safety', price: 1499, image: '🆘', category: 'Safety Equipment' },
    { id: '11', name: 'Geofencing Module', description: 'Advanced geofencing system with boundary alerts', price: 2999, image: '🗺️', category: 'Fleet Solutions' },
    { id: '12', name: 'Dashboard Camera', description: 'HD dashboard camera with GPS and G-sensor', price: 2199, image: '📹', category: 'Safety Equipment' },
  ];

  const categories = ['All', 'GPS Devices', 'Fleet Solutions', 'Accessories', 'Sensors', 'Safety Equipment'];

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: any) => {
    setCartItems([...cartItems, product]);
  };

  const handleRemoveFromCart = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-blue-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-blue-100">Complete range of GPS tracking devices and fleet management accessories</p>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-4 mb-8 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-medium transition ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>

        {cartItems.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg cursor-pointer" onClick={() => setShowCart(!showCart)}>
            <div className="text-lg font-bold">🛒 Cart ({cartItems.length})</div>
            <div className="text-sm">Total: ₹{totalPrice.toLocaleString('en-IN')}</div>
          </div>
        )}

        {showCart && cartItems.length > 0 && (
          <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-y-auto z-50 border-2 border-blue-600">
            <h3 className="font-bold text-lg mb-4">Shopping Cart</h3>
            <div className="space-y-3">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center p-3 bg-gray-50 rounded">
                  <div className="flex-1">
                    <p className="font-semibold text-sm text-gray-900">{item.name}</p>
                    <p className="text-blue-600 font-bold">₹{item.price.toLocaleString('en-IN')}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromCart(idx)}
                    className="text-red-600 hover:text-red-800 font-bold"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t-2">
              <div className="flex justify-between font-bold text-lg mb-4">
                <span>Total:</span>
                <span className="text-blue-600">₹{totalPrice.toLocaleString('en-IN')}</span>
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                Checkout
              </button>
              <button
                onClick={() => setShowCart(false)}
                className="w-full mt-2 px-4 py-2 bg-gray-200 text-gray-800 font-bold rounded-lg hover:bg-gray-300 transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Product Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">📡 GPS Devices</h3>
                <p className="text-gray-700 mb-4">Professional-grade GPS tracking devices with real-time location updates and long battery life.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ 4G/3G/2G Connectivity</li>
                  <li>✓ Long Battery Life</li>
                  <li>✓ Waterproof Design</li>
                  <li>✓ Multiple Mounting Options</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">🚗 Fleet Solutions</h3>
                <p className="text-gray-700 mb-4">Complete packages for comprehensive fleet management and optimization.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Real-time Tracking</li>
                  <li>✓ Driver Monitoring</li>
                  <li>✓ Fuel Optimization</li>
                  <li>✓ Analytics & Reports</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">🔌 Accessories</h3>
                <p className="text-gray-700 mb-4">Essential accessories to enhance your GPS tracking system performance.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ High-Gain Antennas</li>
                  <li>✓ Power Cables</li>
                  <li>✓ Connectors & Adapters</li>
                  <li>✓ Installation Kits</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">⛽ Sensors</h3>
                <p className="text-gray-700 mb-4">Advanced sensors for monitoring fuel, temperature, and other vehicle metrics.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Fuel Level Sensors</li>
                  <li>✓ Temperature Sensors</li>
                  <li>✓ Humidity Monitoring</li>
                  <li>✓ Impact Sensors</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">🛡️ Safety Equipment</h3>
                <p className="text-gray-700 mb-4">Safety devices and equipment for emergency response and accident prevention.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ SOS Buttons</li>
                  <li>✓ Dashboard Cameras</li>
                  <li>✓ Panic Alerts</li>
                  <li>✓ Emergency Response</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">🔧 Installation Services</h3>
                <p className="text-gray-700 mb-4">Professional installation and support services available nationwide.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>✓ Expert Installation</li>
                  <li>✓ Configuration Setup</li>
                  <li>✓ Training & Support</li>
                  <li>✓ Maintenance Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-12 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
            <p className="text-lg mb-6">Our experts can help you select the perfect products for your fleet.</p>
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition inline-block"
            >
              Contact Our Sales Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

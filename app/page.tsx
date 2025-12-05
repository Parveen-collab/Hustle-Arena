'use client';

import Link from 'next/link';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';

export default function Home() {
  const [cartItems, setCartItems] = useState<any[]>([]);

  const handleAddToCart = (product: any) => {
    setCartItems([...cartItems, product]);
  };

  const services = [
    { icon: '📍', title: 'Real-Time Tracking', desc: 'Live GPS tracking of all vehicles' },
    { icon: '⛽', title: 'Fuel Monitoring', desc: 'Track fuel consumption and reduce costs' },
    { icon: '🛡️', title: 'Anti-Theft & Safety', desc: 'Instant alerts for unauthorized movement' },
    { icon: '👨‍✈️', title: 'Driver Behavior', desc: 'Monitor driving patterns and safety' },
    { icon: '❄️', title: 'AC Alarm System', desc: 'Temperature and AC monitoring' },
    { icon: '🆘', title: 'SOS Emergency', desc: 'Quick emergency response system' },
    { icon: '🗺️', title: 'Geofencing', desc: 'Set boundaries and get instant alerts' },
    { icon: '📊', title: 'Reports & Analytics', desc: 'Comprehensive fleet reports' },
  ];

  const products = [
    { id: '1', name: 'GPS Tracker Pro', description: 'Advanced GPS tracking device with 4G connectivity', price: 2499, image: '📡', category: 'GPS Devices' },
    { id: '2', name: 'Fleet Manager Elite', description: 'Premium fleet management package', price: 4999, image: '🚗', category: 'Fleet Solutions' },
    { id: '3', name: 'OBD2 Connector', description: 'Vehicle diagnostic OBD2 adapter', price: 1299, image: '🔌', category: 'Accessories' },
    { id: '4', name: 'Fuel Sensor Kit', description: 'Accurate fuel monitoring sensor', price: 1899, image: '⛽', category: 'Sensors' },
  ];

  const testimonials = [
    { name: 'Rajesh Kumar', company: 'Delhi Logistics', text: 'Latiyaal has reduced our fuel costs by 25% and improved driver safety significantly.' },
    { name: 'Priya Sharma', company: 'Mumbai Transport Co.', text: 'The real-time tracking feature is a game-changer for our fleet operations.' },
    { name: 'Arjun Patel', company: 'Bangalore Fleet Management', text: 'Excellent customer support and reliable tracking system. Highly recommended!' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-32 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Latiyaal GPS Fleet Management</h1>
            <p className="text-2xl md:text-3xl mb-8 text-blue-100 font-semibold leading-relaxed">Wherever wheels roll, we're tracking safety's goal.</p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-blue-50 leading-relaxed">Advanced GPS tracking and fleet management solutions for businesses of all sizes. Real-time monitoring, fuel optimization, and safety alerts.</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                href="/contact"
                className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition text-lg"
              >
                Make an Enquiry
              </Link>
              <Link
                href="/products"
                className="px-10 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition border-2 border-white text-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">Our Features & Services</h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">Comprehensive solutions designed to optimize your fleet operations</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, idx) => (
                <div key={idx} className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl text-center border border-blue-200 hover:shadow-lg transition">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="font-bold text-xl mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">Our Services</h2>
            <p className="text-center text-gray-600 text-lg mb-20 max-w-2xl mx-auto">Tailored solutions for every fleet management need</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">📊 Fleet Management System</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">Comprehensive fleet management with real-time tracking, maintenance scheduling, and fuel optimization.</p>
                <ul className="space-y-4 text-base text-gray-700">
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Real-time vehicle location</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Maintenance alerts</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Route optimization</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Cost analysis reports</span></li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">🚌 Institutional Vehicle Tracking</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">Specialized tracking for buses, school vehicles, and institutional transport with video surveillance support.</p>
                <ul className="space-y-4 text-base text-gray-700">
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Video surveillance integration</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Passenger safety monitoring</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Route tracking & history</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Emergency alerts</span></li>
                </ul>
              </div>

              <div className="bg-white p-10 rounded-xl shadow-lg border-l-4 border-blue-600 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold mb-6 text-blue-600">⛽ Fuel Monitoring System</h3>
                <p className="text-gray-700 mb-8 leading-relaxed">Advanced fuel consumption tracking to reduce costs and identify anomalies instantly.</p>
                <ul className="space-y-4 text-base text-gray-700">
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Fuel level monitoring</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Theft detection</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Consumption reports</span></li>
                  <li className="flex items-start gap-3"><span className="text-blue-600 font-bold">✓</span> <span>Cost optimization</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">Featured Products</h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">Premium GPS trackers and fleet management solutions</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  {...product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
            <div className="text-center mt-16">
              <Link
                href="/products"
                className="px-10 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition inline-block text-lg"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>

        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">Happy Customers</h2>
            <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">Trusted by hundreds of businesses across India</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transition">
                  <div className="flex items-center mb-6 gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-bold text-gray-900 text-base">{testimonial.name}</div>
                  <div className="text-base text-gray-600">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Fleet?</h2>
            <p className="text-xl md:text-2xl mb-10 text-blue-50 max-w-2xl mx-auto leading-relaxed">Get started with Latiyaal today and reduce operational costs by up to 30%.</p>
            <Link
              href="/contact"
              className="px-10 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition inline-block text-lg"
            >
              Contact Us Now
            </Link>
          </div>
        </section>

        {cartItems.length > 0 && (
          <div className="fixed bottom-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg">
            🛒 {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in cart
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

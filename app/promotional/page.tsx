'use client';

import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PromotionalPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [videoPlay, setVideoPlay] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const posters = [
    {
      title: 'Real-Time Tracking',
      subtitle: 'Know exactly where your fleet is',
      features: ['Live GPS Updates', 'Route History', 'Speed Monitoring', 'Location Alerts'],
      gradient: 'from-blue-600 to-cyan-500',
      icon: '📍',
      description: 'Get instant location data of all vehicles with our advanced GPS tracking system. Perfect for logistics and delivery management.'
    },
    {
      title: 'Anti-Theft & Security',
      subtitle: 'Protect your assets 24/7',
      features: ['Theft Alerts', 'Geofencing', 'Engine Lock', 'Emergency SOS'],
      gradient: 'from-green-500 to-emerald-600',
      icon: '🛡️',
      description: 'Advanced security features to keep your vehicles safe. Instant notifications for unauthorized movement and automatic response systems.'
    },
    {
      title: 'Fleet Analytics',
      subtitle: 'Data-driven fleet optimization',
      features: ['Fuel Efficiency', 'Driver Behavior', 'Maintenance Alerts', 'Cost Reports'],
      gradient: 'from-purple-600 to-pink-500',
      icon: '📊',
      description: 'Comprehensive analytics dashboard to optimize operations. Track fuel consumption, driver performance, and reduce operational costs by up to 30%.'
    }
  ];

  const problems = [
    { icon: '❌', problem: 'Hidden operational costs', solution: 'Real-time fuel & mileage tracking' },
    { icon: '⚠️', problem: 'Vehicle theft & security risks', solution: 'Advanced GPS + instant alerts' },
    { icon: '📉', problem: 'Poor driver accountability', solution: 'Driver behavior monitoring' },
    { icon: '🚗', problem: 'Inefficient fleet management', solution: 'Automated route optimization' }
  ];

  const benefits = [
    { number: '30%', label: 'Cost Reduction', description: 'Lower operational expenses' },
    { number: '99.9%', label: 'GPS Accuracy', description: 'Reliable location tracking' },
    { number: '24/7', label: 'Real-time Monitoring', description: 'Always stay connected' },
    { number: '2min', label: 'Alert Response', description: 'Instant notifications' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden">

        {/* Hero Section with Animation */}
        <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-green-400 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto text-center px-4 py-32">
            <div className="mb-8 inline-block">
              <div className="text-6xl mb-4 animate-bounce">📡</div>
              <h1 className="text-7xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                GPS REVOLUTION
              </h1>
            </div>

            <p className="text-2xl md:text-3xl mb-8 text-cyan-200 font-light leading-relaxed max-w-3xl mx-auto">
              Smart Vehicle Tracking & Fleet Management for the Modern Era
            </p>

            <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Secure. Accurate. Intelligent. Real-time GPS tracking, advanced analytics, and automated fleet management in one powerful platform.
            </p>

            <div className="flex flex-wrap gap-6 justify-center mb-12">
              <button className="px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition transform hover:scale-105 text-lg">
                Get Started Free
              </button>
              <button
                onClick={() => setVideoPlay(true)}
                className="px-10 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition transform hover:scale-105 text-lg"
              >
                ▶ Watch Demo Video
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="text-cyan-400 text-2xl">↓</div>
            </div>
          </div>
        </section>

        {/* Video Modal */}
        {videoPlay && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl shadow-cyan-500/50">
              <button
                onClick={() => setVideoPlay(false)}
                className="absolute top-4 right-4 z-10 text-white text-3xl hover:text-cyan-400 transition"
              >
                ✕
              </button>
              <div className="aspect-video bg-gray-900 flex items-center justify-center">
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  src="/promotional-video.mp4"
                  onError={() => {
                    console.log('Video not found, showing placeholder');
                  }}
                >
                  <div className="text-white text-center">
                    <div className="text-6xl mb-4">🎬</div>
                    <p>Promotional Video - 30-60 seconds</p>
                    <p className="text-gray-400 mt-2">Your promotional video will be displayed here</p>
                  </div>
                </video>
              </div>
            </div>
          </div>
        )}

        {/* Problems Section */}
        <section className="py-24 px-4 bg-black text-white relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Problems We Solve
            </h2>
            <p className="text-center text-gray-300 text-xl mb-16 max-w-2xl mx-auto">
              Fleet management challenges that cost your business thousands every month
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {problems.map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 transition transform hover:scale-105">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 text-red-400">{item.problem}</h3>
                  <p className="text-lg text-cyan-400">✓ {item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Section - Three Professional Posters */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black text-white relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Our Solutions
            </h2>
            <p className="text-center text-gray-300 text-xl mb-20 max-w-2xl mx-auto">
              Three core solutions that transform your fleet operations
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posters.map((poster, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl border-2 border-gray-700 hover:border-cyan-500 transition cursor-pointer transform hover:scale-105 h-full`}
                  style={{
                    transform: `translateY(${Math.sin(scrollPosition / 100 + idx) * 10}px)`
                  }}
                >
                  {/* Poster Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${poster.gradient} opacity-0 group-hover:opacity-20 transition duration-500`}></div>

                  {/* Poster Content */}
                  <div className={`relative z-10 bg-gradient-to-br ${poster.gradient} p-12 h-full flex flex-col justify-between`}>
                    {/* Top Section */}
                    <div className="space-y-6">
                      <div className="text-7xl">{poster.icon}</div>
                      <div>
                        <h3 className="text-3xl font-black mb-2 text-white">{poster.title}</h3>
                        <p className="text-xl font-semibold text-gray-100">{poster.subtitle}</p>
                      </div>
                    </div>

                    {/* Middle Section */}
                    <div className="space-y-4 py-8">
                      <p className="text-lg text-gray-50 leading-relaxed">{poster.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {poster.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-center gap-2 text-sm font-semibold text-white bg-white bg-opacity-20 px-3 py-2 rounded-lg">
                            <span className="text-lg">✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Section - CTA */}
                    <button className="w-full py-3 px-6 bg-white text-black font-bold rounded-lg hover:bg-gray-100 transition transform hover:scale-105 text-lg mt-auto">
                      Learn More →
                    </button>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional Posters Section */}
        <section className="py-24 px-4 bg-black text-white relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent">
              Featured Campaigns
            </h2>
            <p className="text-center text-gray-300 text-xl mb-20 max-w-2xl mx-auto">
              Our latest promotional initiatives showcasing GPS tracking solutions
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Poster 1 */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-cyan-500 group hover:shadow-cyan-500/50 transition transform hover:scale-105">
                <img
                  src="/Poster/poster 1.jpg"
                  alt="GPS Vehicle Trackers Poster"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-500"></div>
              </div>

              {/* Poster 2 */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-yellow-400 group hover:shadow-yellow-400/50 transition transform hover:scale-105">
                <img
                  src="/Poster/poster 2.jpg"
                  alt="Best GPS Tracking System Poster"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition duration-500"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 bg-black text-white relative">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Why Choose XYZ Solutions
            </h2>
            <p className="text-center text-gray-300 text-xl mb-20 max-w-2xl mx-auto">
              Industry-leading performance and reliability metrics
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="text-center p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-green-500 transition transform hover:scale-110 group"
                >
                  <div className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent group-hover:scale-110 transition">
                    {benefit.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{benefit.label}</h3>
                  <p className="text-gray-400 text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Packed with Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: '⚡', title: 'Lightning Fast', desc: 'Real-time updates every second' },
                { icon: '🔒', title: 'Military Security', desc: 'Bank-level encryption' },
                { icon: '📱', title: 'Mobile First', desc: 'iOS and Android apps' },
                { icon: '🌍', title: 'Global Coverage', desc: 'Worldwide GPS network' },
                { icon: '🤖', title: 'AI-Powered', desc: 'Smart anomaly detection' },
                { icon: '💰', title: '30% Savings', desc: 'Average cost reduction' },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-blue-500 transition group cursor-pointer transform hover:scale-105"
                >
                  <div className="text-5xl mb-4 group-hover:scale-125 transition">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-pattern"></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-black mb-8">Transform Your Fleet Today</h2>
            <p className="text-2xl mb-12 text-blue-50 max-w-2xl mx-auto">
              Join hundreds of businesses reducing costs and improving safety with XYZ Solutions
            </p>

            <div className="flex flex-wrap gap-6 justify-center">
              <button className="px-12 py-5 bg-white text-blue-600 font-black rounded-lg hover:bg-blue-50 transition transform hover:scale-110 text-lg">
                Start Free Trial
              </button>
              <button className="px-12 py-5 bg-transparent border-3 border-white text-white font-black rounded-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-110 text-lg">
                Schedule Demo
              </button>
            </div>

            <p className="text-blue-100 mt-8 text-lg">No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-4 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Rajesh Kumar', company: 'Delhi Logistics Co.', text: 'XYZ Solutions reduced our fuel costs by 30% in just 3 months. Incredible platform!', rating: 5 },
                { name: 'Priya Sharma', company: 'Mumbai Transport', text: 'Real-time tracking gave us complete visibility. Game-changer for our fleet operations.', rating: 5 },
                { name: 'Arjun Patel', company: 'Bangalore Fleet Mgmt', text: 'Best GPS tracking system we&apos;ve used. Support is outstanding!', rating: 5 }
              ].map((testimonial, idx) => (
                <div key={idx} className="p-8 bg-gray-900 rounded-xl border border-gray-700 hover:border-yellow-500 transition transform hover:scale-105">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                    ))}
                  </div>
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  <div className="font-bold text-white text-lg">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </>
  );
}

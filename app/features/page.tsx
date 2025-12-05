'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Features() {
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

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Features</h1>
            <p className="text-xl text-blue-100">Comprehensive solutions designed to optimize your fleet operations</p>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
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
      </main>
      <Footer />
    </>
  );
}

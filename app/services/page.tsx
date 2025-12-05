'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Services</h1>
            <p className="text-xl text-blue-100">Tailored solutions for every fleet management need</p>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
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
      </main>
      <Footer />
    </>
  );
}

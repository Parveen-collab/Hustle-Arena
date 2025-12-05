'use client';

import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
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
                href="/shop"
                className="px-10 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition border-2 border-white text-lg"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

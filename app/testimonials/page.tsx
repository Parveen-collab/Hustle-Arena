'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Testimonials() {
  const testimonials = [
    { name: 'Rajesh Kumar', company: 'Delhi Logistics', text: 'Latiyaal has reduced our fuel costs by 25% and improved driver safety significantly.' },
    { name: 'Priya Sharma', company: 'Mumbai Transport Co.', text: 'The real-time tracking feature is a game-changer for our fleet operations.' },
    { name: 'Arjun Patel', company: 'Bangalore Fleet Management', text: 'Excellent customer support and reliable tracking system. Highly recommended!' },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Testimonials</h1>
            <p className="text-xl text-blue-100">Trusted by hundreds of businesses across India</p>
          </div>
        </section>

        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
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
      </main>
      <Footer />
    </>
  );
}

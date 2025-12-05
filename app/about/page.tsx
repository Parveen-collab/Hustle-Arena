import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-28 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">About Latiyaal</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-semibold mb-2">Leading the way in GPS tracking and fleet management</p>
            <div className="h-1 w-24 bg-amber-400 mt-6 rounded-full"></div>
          </div>
        </section>

        <section className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">OUR JOURNEY</span>
                <h2 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900 leading-tight">Our Story</h2>
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Founded in 2015, Latiyaal started with a simple mission: to revolutionize fleet management and vehicle tracking in India. What began as a small startup has evolved into a trusted partner for hundreds of businesses across the country.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We recognized the challenges faced by fleet operators—rising fuel costs, safety concerns, and the need for real-time visibility. Our team developed cutting-edge GPS tracking and fleet management solutions to address these pain points.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Today, Latiyaal is known for reliability, innovation, and exceptional customer support. Our platform has helped businesses reduce operational costs by up to 30% while improving vehicle safety and driver accountability.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-2xl p-10 shadow-2xl border border-blue-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
                  <div className="relative z-10">
                    <div className="text-center mb-12">
                      <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-4">2015</div>
                      <p className="text-gray-700 font-semibold text-xl">Year Founded</p>
                    </div>
                    <div className="grid grid-cols-1 gap-5">
                      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 border-l-4 border-blue-600">
                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 mb-2">500+</div>
                        <p className="text-gray-700 font-semibold text-lg">Happy Clients</p>
                      </div>
                      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 border-l-4 border-amber-500">
                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600 mb-2">50,000+</div>
                        <p className="text-gray-700 font-semibold text-lg">Vehicles Tracked</p>
                      </div>
                      <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 duration-300 border-l-4 border-green-500">
                        <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-600 mb-2">99.9%</div>
                        <p className="text-gray-700 font-semibold text-lg">Uptime</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">CORE VALUES</span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Guided by principles that define our commitment to excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group bg-white p-12 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-20 h-20 bg-blue-100 rounded-br-3xl group-hover:w-32 group-hover:h-32 transition duration-300"></div>
                <h3 className="text-4xl font-bold text-blue-600 mb-6 relative z-10">🎯 Mission</h3>
                <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                  To empower businesses with intelligent GPS tracking and fleet management solutions that enhance safety, reduce costs, and improve operational efficiency across all vehicle types and industries.
                </p>
              </div>
              <div className="group bg-white p-12 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-amber-100 rounded-bl-3xl group-hover:w-32 group-hover:h-32 transition duration-300"></div>
                <h3 className="text-4xl font-bold text-amber-600 mb-6 relative z-10">🔭 Vision</h3>
                <p className="text-gray-700 leading-relaxed text-lg relative z-10">
                  To become the most trusted and innovative fleet management platform in India, setting industry standards for vehicle tracking technology and customer service excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">COMPETITIVE ADVANTAGE</span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Why Choose Latiyaal?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Six reasons why industry leaders trust us</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: '⚡', title: 'Reliability', desc: '99.9% uptime guaranteed with redundant servers and 24/7 monitoring ensures your fleet is always tracked and connected.', color: 'from-blue-500 to-blue-600' },
                { icon: '💰', title: 'Cost-Effective', desc: 'Reduce fuel costs by 25-30%, minimize downtime, and optimize routes with our intelligent analytics and reporting.', color: 'from-green-500 to-green-600' },
                { icon: '🌍', title: 'Coverage', desc: 'Nationwide coverage with satellite and cellular connectivity ensures tracking anywhere in India with minimal blind spots.', color: 'from-purple-500 to-purple-600' },
                { icon: '🔧', title: 'Expertise', desc: 'Our team of GPS and IoT specialists brings years of experience in fleet management and vehicle tracking solutions.', color: 'from-orange-500 to-orange-600' },
                { icon: '👥', title: 'Support', desc: 'Dedicated customer support with on-call technical assistance, training, and regular system updates at no extra cost.', color: 'from-pink-500 to-pink-600' },
                { icon: '🛡️', title: 'Security', desc: 'Bank-level encryption, regular security audits, and compliance with data protection regulations keep your data safe.', color: 'from-red-500 to-red-600' },
              ].map((item, idx) => (
                <div key={idx} className="group bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 relative overflow-hidden">
                  <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full opacity-0 group-hover:opacity-10 transition duration-300`}></div>
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-4 bg-gradient-to-r from-blue-50 to-blue-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-sm font-semibold mb-4">SERVICE COVERAGE</span>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">Our Service Areas</h2>
              <p className="text-xl text-gray-700">Serving fleet management clients across India</p>
            </div>
            <div className="bg-white rounded-2xl p-12 shadow-xl border border-blue-200">
              <p className="text-gray-700 mb-10 text-center text-lg font-medium">Latiyaal proudly serves fleet management clients across India:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {['North India', 'South India', 'East India', 'West India', 'Central India', 'Northeast India'].map((region, idx) => (
                  <div key={idx} className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl text-center font-bold text-gray-800 border border-blue-200 hover:border-blue-400 hover:shadow-lg transition transform hover:scale-105 duration-300 cursor-pointer">
                    📍 {region}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <p className="text-gray-600 text-base font-medium">✨ And expanding to new regions every quarter</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to Join Latiyaal?</h2>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Partner with us and experience the future of fleet management today.
            </p>
            <div className="flex gap-6 justify-center flex-wrap">
              <a
                href="/contact"
                className="px-10 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition transform hover:scale-105 duration-300 shadow-lg inline-block text-lg"
              >
                Get in Touch
              </a>
              <a
                href="/"
                className="px-10 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-400 transition transform hover:scale-105 duration-300 shadow-lg inline-block text-lg border-2 border-white"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/[^\d]/g, ''))) newErrors.phone = 'Phone number should be 10 digits';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-blue-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100">Get in touch with our team for enquiries and support</p>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-gray-700 font-semibold">+91-XXXX-XXXX-XX</p>
                <p className="text-sm text-gray-600 mt-2">Monday - Friday, 9:00 AM - 6:00 PM IST</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-700 font-semibold">support@latiyaal.com</p>
                <p className="text-sm text-gray-600 mt-2">We'll respond within 24 hours</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg text-center">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-gray-700 font-semibold">New Delhi, India</p>
                <p className="text-sm text-gray-600 mt-2">Nationwide service coverage</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                {submitted && (
                  <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-300">
                    ✓ Thank you! We'll get back to you soon.
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Your Name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="your.email@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="+91-XXXXXXXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Company Name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Tell us about your requirements..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Why Contact Us?</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-2">📱 Product Enquiries</h3>
                    <p className="text-gray-700">Learn more about our GPS tracking devices and fleet management solutions.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-2">🔧 Technical Support</h3>
                    <p className="text-gray-700">Get help with installation, configuration, or troubleshooting your system.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-2">📊 Custom Solutions</h3>
                    <p className="text-gray-700">Discuss customized fleet management solutions for your business needs.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-2">💼 Partnership Opportunities</h3>
                    <p className="text-gray-700">Explore partnership and reseller opportunities with Latiyaal.</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-blue-600 mb-2">📥 Download Our App</h3>
                    <p className="text-gray-700 mb-4">Get our mobile app for real-time fleet tracking on the go.</p>
                    <div className="space-y-2">
                      <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition flex items-center justify-center gap-2">
                        <span>🍎</span> App Store
                      </button>
                      <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2">
                        <span>🤖</span> Google Play
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3 text-blue-600">What is the installation process?</h3>
                <p className="text-gray-700">Our team handles the complete installation including device setup, configuration, and user training. Installation typically takes 1-2 hours.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Do you offer technical support?</h3>
                <p className="text-gray-700">Yes, we provide 24/7 technical support via phone and email. Our support team is always ready to help resolve any issues.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3 text-blue-600">What are the subscription plans?</h3>
                <p className="text-gray-700">We offer flexible subscription plans starting from basic tracking to premium fleet management with unlimited features.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-3 text-blue-600">What regions do you cover?</h3>
                <p className="text-gray-700">We provide nationwide coverage across India with extensive network coverage in urban and semi-urban areas.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

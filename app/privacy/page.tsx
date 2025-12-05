import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-blue-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: December 2024</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Latiyaal ("we," "us," "our," or "Company") operates the Latiyaal website and provides GPS tracking and fleet management services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Personal Data: Name, email address, phone number, company name, and billing address</li>
                <li>Vehicle Data: GPS coordinates, vehicle identification, fuel consumption, speed, and location history</li>
                <li>Driver Data: Driver behavior metrics, alerts, and performance indicators</li>
                <li>Technical Data: IP address, browser type, operating system, and device information</li>
                <li>Usage Data: Pages visited, links clicked, and time spent on the website</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Use of Your Information</h2>
              <p className="text-gray-700 mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Process your transactions and send related information</li>
                <li>Provide GPS tracking and fleet management services</li>
                <li>Generate monthly reports and analytics</li>
                <li>Email regarding your account or order</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to our services</li>
                <li>Improve our services based on your feedback and usage patterns</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Disclosure of Your Information</h2>
              <p className="text-gray-700 mb-4">We may share your information in the following situations:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>By Law or to Protect Rights: If required by law or if we believe in good faith that such action is necessary</li>
                <li>Third-Party Service Providers: We may share data with vendors, consultants, and service providers who assist us in operating the website</li>
                <li>Business Transfers: Your information may be transferred as part of our business assets during a merger or acquisition</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Security of Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use administrative, technical, and physical security measures to protect your personal information. All data is transmitted using bank-level encryption. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us</h2>
              <p className="text-gray-700 mb-4">If you have questions or comments about this Privacy Policy, please contact us at:</p>
              <p className="text-gray-700">
                📧 Email: support@latiyaal.com<br />
                📞 Phone: +91-XXXX-XXXX-XX<br />
                📍 Address: New Delhi, India
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

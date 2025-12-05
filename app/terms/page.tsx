import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Terms() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-blue-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: December 2024</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                These Terms and Conditions constitute a legally binding agreement made between you ("User" or "you") and Latiyaal ("Company," "we," or "us"), concerning your access to and use of the Latiyaal website as well as any other media form, media channel, mobile website, or mobile application related or connected thereto.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. User Representations</h2>
              <p className="text-gray-700 mb-4">By using the Site and our services, you represent and warrant that:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>All information you submit is true, accurate, current, and complete</li>
                <li>You will maintain the accuracy of such information and promptly update such information as necessary</li>
                <li>You have the legal capacity and you agree to comply with these Terms and Conditions</li>
                <li>You are not under the age of 18</li>
                <li>You will not access the Site through automated or non-human means</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. User Registration</h2>
              <p className="text-gray-700 mb-4">
                If the Site offers registration, you may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Products and Services</h2>
              <p className="text-gray-700 mb-4">
                All products and services provided through our Site are subject to our acceptance. We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Fees and Payment</h2>
              <p className="text-gray-700 mb-4">
                We accept the following forms of payment: credit cards, debit cards, and bank transfers. You agree to provide current, complete, and accurate purchasing and account information for all purchases made at the Site. You further agree to promptly update account and payment information, including email address, credit card number, and expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as applicable in your state.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Return Policy</h2>
              <p className="text-gray-700 mb-4">
                Please review our Return Policy posted on this Site prior to initiating a return. If there are any conflicts between the provisions of this document and the Return Policy, the Return Policy will control.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">7. Prohibited Activities</h2>
              <p className="text-gray-700 mb-4">You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us.</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                IN NO EVENT SHALL THE COMPANY OR ITS SUPPLIERS BE LIABLE FOR ANY DAMAGES (INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF DATA OR PROFIT, OR DUE TO BUSINESS INTERRUPTION) ARISING OUT OF THE USE OR INABILITY TO USE THE MATERIALS ON THE SITE.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">If you have any questions about these Terms and Conditions, please contact us at:</p>
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

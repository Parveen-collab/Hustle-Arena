import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Shipping() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="bg-blue-600 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold">Shipping, Refund & Cancellation Policy</h1>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Last updated: December 2024</p>

              <h2 className="text-2xl font-bold mt-8 mb-4">1. Shipping Information</h2>
              
              <h3 className="text-xl font-bold mt-6 mb-3">Shipping Coverage</h3>
              <p className="text-gray-700 mb-4">
                Latiyaal ships orders to all locations across India. We provide nationwide delivery services for all our products and accessories.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Shipping Timeframe</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li><strong>Metro Cities (Delhi, Mumbai, Bangalore, Chennai, etc.):</strong> 2-3 business days</li>
                <li><strong>Tier 2 Cities:</strong> 3-5 business days</li>
                <li><strong>Tier 3 Cities and Rural Areas:</strong> 5-7 business days</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">Shipping Charges</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Orders above ₹5,000: Free shipping across India</li>
                <li>Orders below ₹5,000: Flat shipping charge of ₹200</li>
                <li>Express delivery available at additional charges</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">Tracking</h3>
              <p className="text-gray-700 mb-4">
                All orders come with a tracking number. You can track your shipment in real-time using our tracking portal or by contacting our support team.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">2. Return & Refund Policy</h2>

              <h3 className="text-xl font-bold mt-6 mb-3">Return Window</h3>
              <p className="text-gray-700 mb-4">
                You have 7 days from the date of delivery to return a product. Products must be in original condition with all packaging and documentation intact.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Eligible Returns</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Product defects or manufacturing issues</li>
                <li>Wrong item shipped</li>
                <li>Damaged or corrupted items upon delivery</li>
                <li>Item not matching the description on the website</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">Non-Returnable Items</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Items that have been used or tested beyond unopened condition</li>
                <li>Software licenses and subscriptions</li>
                <li>Items with missing parts or accessories</li>
                <li>Customized or specially ordered products</li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-3">Return Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                <li>Contact our support team at support@latiyaal.com with your order number</li>
                <li>Provide photos of the product and the issue (if applicable)</li>
                <li>Receive return authorization and shipping instructions</li>
                <li>Ship the product back to us in original packaging</li>
                <li>We'll inspect and process your refund within 5-7 business days</li>
              </ol>

              <h3 className="text-xl font-bold mt-6 mb-3">Refunds</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Refunds are issued to the original payment method</li>
                <li>Refund processing takes 5-7 business days after inspection</li>
                <li>Original shipping charges are non-refundable</li>
                <li>Return shipping costs are borne by the customer unless the return is due to our error</li>
              </ul>

              <h2 className="text-2xl font-bold mt-8 mb-4">3. Cancellation Policy</h2>

              <h3 className="text-xl font-bold mt-6 mb-3">Order Cancellation</h3>
              <p className="text-gray-700 mb-4">
                Orders can be cancelled within 24 hours of placement. Once an order has been dispatched, it cannot be cancelled but can be returned as per our return policy.
              </p>

              <h3 className="text-xl font-bold mt-6 mb-3">Cancellation Process</h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                <li>Log into your account and view your orders</li>
                <li>Select the order you wish to cancel</li>
                <li>Click "Cancel Order" button</li>
                <li>Confirm the cancellation</li>
                <li>Full refund will be processed within 5-7 business days</li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4">4. Damaged or Defective Items</h2>
              <p className="text-gray-700 mb-4">
                If you receive a damaged or defective item, please:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-4">
                <li>Contact us within 24 hours of delivery with photos of the damage</li>
                <li>Do not use or install the defective product</li>
                <li>We'll arrange a replacement or full refund at no cost</li>
                <li>Return shipping will be covered by us</li>
              </ol>

              <h2 className="text-2xl font-bold mt-8 mb-4">5. Service Subscription Cancellation</h2>
              <p className="text-gray-700 mb-4">
                Fleet management service subscriptions can be cancelled anytime. However, no refunds are provided for partial months. Cancellation takes effect at the end of the billing cycle.
              </p>

              <h2 className="text-2xl font-bold mt-8 mb-4">6. Contact Us for Returns & Support</h2>
              <p className="text-gray-700 mb-4">For any returns, refunds, or cancellations:</p>
              <p className="text-gray-700">
                📧 Email: support@latiyaal.com<br />
                📞 Phone: +91-XXXX-XXXX-XX<br />
                ⏰ Monday - Friday, 9:00 AM - 6:00 PM IST
              </p>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-gray-700">
                  <strong>Note:</strong> We strive to provide excellent customer service. If you have any concerns or issues with our products or services, please reach out to us. We're committed to resolving your concerns to your satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

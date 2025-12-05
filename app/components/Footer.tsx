import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Latiyaal</h3>
            <p className="text-sm text-gray-300">Professional GPS tracking and fleet management solutions for businesses.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-blue-400 transition">Products</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</Link></li>
              <li><Link href="/shipping" className="hover:text-blue-400 transition">Shipping Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 +91-XXXX-XXXX-XX</li>
              <li>📧 support@latiyaal.com</li>
              <li className="pt-2">
                <a href="#" className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-xs font-medium transition">Download App</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {currentYear} Latiyaal. All rights reserved. Wherever wheels roll, we're tracking safety's goal.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="font-bold text-xl text-gray-900 hidden sm:inline">Latiyaal</span>
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <nav className={`hidden md:flex items-center space-x-8`}>
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About Us</Link>
            <Link href="/products" className="text-gray-700 hover:text-blue-600 font-medium transition">Products</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</Link>
            <Link
              href="/contact"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Get Started
            </Link>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">About Us</Link>
            <Link href="/products" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">Products</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 py-2 font-medium">Contact</Link>
            <Link
              href="/contact"
              className="block w-full px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium text-center"
            >
              Get Started
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

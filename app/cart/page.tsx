'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'GPS Tracker Pro',
      price: 2999,
      quantity: 1,
      image: '📡',
      description: 'Advanced GPS tracking device'
    },
    {
      id: 3,
      name: 'OBD-II Connector',
      price: 1499,
      quantity: 2,
      image: '🔌',
      description: 'Plug-and-play OBD-II GPS tracker'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.18);
  const shipping = subtotal > 5000 ? 0 : 299;
  const total = subtotal + tax + shipping - discount;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode === 'SAVE20') {
      setDiscount(Math.round(subtotal * 0.2));
    } else if (promoCode === 'SAVE10') {
      setDiscount(Math.round(subtotal * 0.1));
    } else {
      alert('Invalid promo code');
      setDiscount(0);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Shopping Cart</h1>
            <p className="text-xl text-blue-100">Review and checkout your items</p>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="text-7xl mb-6">🛒</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
                <p className="text-gray-600 mb-8">Start shopping to add items to your cart</p>
                <a
                  href="/shop"
                  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition inline-block"
                >
                  Continue Shopping
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                    <div className="bg-blue-600 text-white px-8 py-4 font-bold">
                      Cart Items ({cartItems.length})
                    </div>
                    <div className="divide-y">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-6 p-6 hover:bg-gray-50 transition">
                          <div className="text-5xl">{item.image}</div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                            <p className="text-sm text-gray-600">{item.description}</p>
                            <p className="text-lg font-bold text-blue-600 mt-2">₹{item.price}</p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                              >
                                −
                              </button>
                              <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                              >
                                +
                              </button>
                            </div>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 font-semibold transition"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-gray-800">
                              ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Promo Code</h3>
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Enter promo code (try SAVE20)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      />
                      <button
                        onClick={applyPromoCode}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
                      >
                        Apply
                      </button>
                    </div>
                    {discount > 0 && (
                      <p className="text-green-600 font-semibold mt-3">✓ Discount applied: ₹{discount}</p>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-md p-8 sticky top-24">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h3>
                    <div className="space-y-4 mb-6 pb-6 border-b">
                      <div className="flex justify-between text-gray-700">
                        <span>Subtotal:</span>
                        <span className="font-semibold">₹{subtotal.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Tax (18%):</span>
                        <span className="font-semibold">₹{tax.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-gray-700">
                        <span>Shipping:</span>
                        <span className="font-semibold">
                          {shipping === 0 ? (
                            <span className="text-green-600">Free</span>
                          ) : (
                            `₹${shipping}`
                          )}
                        </span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount:</span>
                          <span className="font-semibold">-₹{discount.toLocaleString('en-IN')}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-xl font-bold text-gray-800">Total:</span>
                      <span className="text-3xl font-black text-blue-600">₹{total.toLocaleString('en-IN')}</span>
                    </div>
                    <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-lg hover:shadow-lg transition">
                      Proceed to Checkout
                    </button>
                    <button className="w-full mt-3 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition">
                      Continue Shopping
                    </button>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6 mt-6 border-2 border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">💡 Pro Tip</h4>
                    <p className="text-sm text-blue-800">Free shipping on orders above ₹5,000</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Help?</h2>
            <p className="text-lg mb-6 text-cyan-100">Our support team is here to assist you</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a href="/contact" className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition">
                Contact Support
              </a>
              <a href="/shop" className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition">
                Back to Shop
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

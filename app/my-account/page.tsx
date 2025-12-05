'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MyAccount() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">My Account</h1>
            <p className="text-xl text-blue-100">Manage your profile, subscriptions, and preferences</p>
          </div>
        </section>

        <section className="py-24 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full text-left px-6 py-4 font-semibold transition ${
                      activeTab === 'profile'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    👤 Profile
                  </button>
                  <button
                    onClick={() => setActiveTab('subscriptions')}
                    className={`w-full text-left px-6 py-4 font-semibold transition border-t ${
                      activeTab === 'subscriptions'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    📋 Subscriptions
                  </button>
                  <button
                    onClick={() => setActiveTab('vehicles')}
                    className={`w-full text-left px-6 py-4 font-semibold transition border-t ${
                      activeTab === 'vehicles'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    🚗 My Vehicles
                  </button>
                  <button
                    onClick={() => setActiveTab('billing')}
                    className={`w-full text-left px-6 py-4 font-semibold transition border-t ${
                      activeTab === 'billing'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    💳 Billing
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full text-left px-6 py-4 font-semibold transition border-t ${
                      activeTab === 'settings'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    ⚙️ Settings
                  </button>
                </div>
              </div>

              <div className="md:col-span-3">
                <div className="bg-white rounded-lg shadow-md p-8">
                  {activeTab === 'profile' && (
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-gray-800">Profile Information</h2>
                      <div className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                              placeholder="John"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                            <input
                              type="text"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <input
                            type="tel"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                            placeholder="+1 (012) 345 6789"
                          />
                        </div>
                        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTab === 'subscriptions' && (
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-gray-800">Subscriptions</h2>
                      <div className="space-y-4">
                        <div className="border-2 border-blue-500 rounded-lg p-6 bg-blue-50">
                          <div className="flex justify-between items-center mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">Premium Plan</h3>
                              <p className="text-gray-600">5 Vehicles • Unlimited Tracking</p>
                            </div>
                            <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold">Active</span>
                          </div>
                          <p className="text-gray-700 mb-4">Next billing date: January 15, 2025</p>
                          <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                            Cancel Subscription
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'vehicles' && (
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-gray-800">My Vehicles</h2>
                      <div className="space-y-4">
                        <div className="border rounded-lg p-6 hover:border-blue-500 transition">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800">2023 Toyota Fortuner</h3>
                              <p className="text-gray-600">License Plate: DL01AB1234</p>
                            </div>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Active</span>
                          </div>
                          <p className="text-gray-700 mb-4">Device ID: GPS-2023-001 • Last location: 5 mins ago</p>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            View Details
                          </button>
                        </div>
                      </div>
                      <button className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
                        + Add New Vehicle
                      </button>
                    </div>
                  )}

                  {activeTab === 'billing' && (
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-gray-800">Billing History</h2>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b-2 border-gray-300">
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Description</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Amount</th>
                              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-gray-200 hover:bg-gray-50">
                              <td className="py-3 px-4">Dec 15, 2024</td>
                              <td className="py-3 px-4">Premium Plan - Monthly</td>
                              <td className="py-3 px-4 font-semibold">₹999</td>
                              <td className="py-3 px-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Paid</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {activeTab === 'settings' && (
                    <div>
                      <h2 className="text-3xl font-bold mb-6 text-gray-800">Account Settings</h2>
                      <div className="space-y-6">
                        <div className="border-b pb-6">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Notifications</h3>
                          <div className="space-y-3">
                            <label className="flex items-center">
                              <input type="checkbox" defaultChecked className="w-4 h-4" />
                              <span className="ml-3 text-gray-700">Email notifications for alerts</span>
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" defaultChecked className="w-4 h-4" />
                              <span className="ml-3 text-gray-700">SMS notifications for emergencies</span>
                            </label>
                            <label className="flex items-center">
                              <input type="checkbox" className="w-4 h-4" />
                              <span className="ml-3 text-gray-700">Marketing emails</span>
                            </label>
                          </div>
                        </div>
                        <div className="border-b pb-6">
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Security</h3>
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                            Change Password
                          </button>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Danger Zone</h3>
                          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                            Delete Account
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

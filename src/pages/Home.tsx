import React from 'react';
import { Link } from 'react-router-dom';
import { PiggyBank, TrendingUp, Shield, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-16 sm:py-24">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
          Take Control of Your Finances
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
          Track your spending, set budgets, and achieve your financial goals with our easy-to-use budget tracking tool.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 font-medium"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-200 font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <PiggyBank className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Budget Planning</h3>
            <p className="text-gray-600">Set and manage your monthly budgets with ease.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Expense Tracking</h3>
            <p className="text-gray-600">Monitor your spending patterns in real-time.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Secure & Private</h3>
            <p className="text-gray-600">Your financial data is encrypted and secure.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
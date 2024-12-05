import React from 'react';
import { Link } from 'react-router-dom';
import { HandCoins } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <HandCoins className="w-8 h-8 text-indigo-600" />
            <span className="text-xl font-bold">Budget Tracker</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-900"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
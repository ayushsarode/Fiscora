import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { LayoutDashboard, PiggyBank, Receipt, LogOut,Target } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function Sidebar() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate('/'); // Navigate to the home page after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-8">
        <PiggyBank className="w-8 h-8 text-indigo-600" />
        <h1 className="text-xl font-bold">Budget Tracker</h1>
      </div>
      
      <nav className="space-y-2">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg ${
              isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </NavLink>
        
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg ${
              isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Receipt className="w-5 h-5" />
          Transactions
        </NavLink>

        <NavLink
          to="/goals"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg ${
              isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Target className="w-5 h-5" />
          <span>Goals</span>
        </NavLink>
        
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 p-2 text-gray-600 hover:bg-gray-50 rounded-lg w-full"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </nav>
    </aside>
  );
}

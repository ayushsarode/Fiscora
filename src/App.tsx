import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './components/Layout/AuthLayout';
import GuestLayout from './components/Layout/GuestLayout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Goals from './pages/Goals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Guest routes */}
        <Route element={<GuestLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected routes */}
        <Route element={<AuthLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/goals" element={<Goals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
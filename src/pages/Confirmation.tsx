import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { CheckCircle, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  const location = useLocation();
  const email = location.state?.email;

  if (!email) {
    return <Navigate to="/register" replace />;
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-sm text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-16 -mt-16" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-50 rounded-full -ml-12 -mb-12" />
          
          <div className="relative">
            {/* Email icon with animated circle */}
            <div className="mb-6 relative">
              <div className="absolute inset-0 animate-ping bg-green-100 rounded-full opacity-75" />
              <div className="relative bg-white rounded-full p-4 inline-flex">
                <Mail className="h-12 w-12 text-indigo-600" />
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Verify your email
            </h2>
            
            <div className="bg-indigo-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-indigo-900 font-medium">
                We've sent a verification link to:
              </p>
              <p className="text-indigo-700 font-bold mt-1">{email}</p>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                Please check your inbox and click the verification link to complete your registration.
                The link will expire in 24 hours.
              </p>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/login"
                  className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-500 font-medium"
                >
                  Return to login
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Success checkmark */}
            <div className="absolute top-2 right-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
            </div>
          </div>
        </div>

        {/* Help text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Check your spam folder if you don't see the email in your inbox
        </p>
      </div>
    </div>
  );
}
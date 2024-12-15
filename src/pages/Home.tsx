import { Link } from "react-router-dom";
import {
  PiggyBank,
  TrendingUp,
  Shield,
  BarChart3,
  Wallet,
  Target,
} from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center py-16 sm:py-24 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-200 via-indigo-100 to-purple-100 rounded-full blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 via-indigo-100 to-violet-100 rounded-full blur-3xl opacity-30 animate-pulse delay-700" />
        </div>

        <div className="relative animate-fadeIn">
          <div className="inline-block mb-8">
            <div className="relative">
              <div className="absolute inset-0 animate-ping bg-gradient-to-r from-indigo-100 to-violet-100 rounded-full opacity-75" />
              <div className="relative bg-gradient-to-br from-white to-indigo-50 rounded-full p-4">
                <PiggyBank className="w-12 h-12 text-indigo-600" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl mb-6 animate-slideUp">
            Take Control of Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600">
              Finances
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto animate-slideUp animation-delay-200">
            Track your spending, set budgets, and achieve your financial goals
            with our easy-to-use budget tracking tool.
          </p>
          <div className="mt-10 mb-8 flex justify-center gap-4 animate-slideUp animation-delay-300">
            <Link
              to="/register"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-3 rounded-lg hover:from-indigo-700 hover:to-violet-700 font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 font-medium border-2 border-indigo-600 transform hover:scale-105 transition-all duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fadeIn animation-delay-400">
          Why Choose Our Platform?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-6 bg-gradient-to-br from-white to-indigo-50/30 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn animation-delay-500">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-indigo-200 group-hover:to-violet-200 transition-colors">
              <Wallet className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
              Budget Planning
            </h3>
            <p className="text-gray-600">
              Set and manage your monthly budgets with our intuitive tools and
              insights.
            </p>
          </div>

          <div className="group p-6 bg-gradient-to-br from-white to-indigo-50/30 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn animation-delay-600">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-indigo-200 group-hover:to-violet-200 transition-colors">
              <BarChart3 className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
              Expense Tracking
            </h3>
            <p className="text-gray-600">
              Monitor your spending patterns with beautiful, interactive charts
              and analytics.
            </p>
          </div>

          <div className="group p-6 bg-gradient-to-br from-white to-indigo-50/30 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn animation-delay-700">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-violet-100 rounded-lg flex items-center justify-center mb-4 group-hover:from-indigo-200 group-hover:to-violet-200 transition-colors">
              <Shield className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
              Secure & Private
            </h3>
            <p className="text-gray-600">
              Your financial data is encrypted and protected with
              industry-leading security.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-gradient-to-br from-indigo-100 via-violet-50 to-blue-50 rounded-2xl my-8 animate-fadeIn animation-delay-800">
        <div className="max-w-4xl mx-auto text-center px-8">
          <div className="inline-block mb-8">
            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-full p-4 shadow-lg">
              <Target className="w-12 h-12 text-indigo-600" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Start Your Financial Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us and take the first step towards financial freedom. Our
            platform provides all the tools you need to manage your money
            effectively and reach your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-8 py-4 rounded-lg hover:from-indigo-700 hover:to-violet-700 font-medium transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Create Free Account
            </Link>
            <Link
              to="/tips"
              className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 font-medium border-2 border-indigo-600 transform hover:scale-105 transition-all duration-200"
            >
              Browse Financial Tips
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

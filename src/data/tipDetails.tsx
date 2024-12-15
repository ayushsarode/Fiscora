import React from 'react';

interface TipDetail {
  title: string;
  content: React.ReactNode;
}

export const tipDetails: Record<string, TipDetail> = {
  '50/30/20 Rule': {
    title: 'Understanding the 50/30/20 Budgeting Rule',
    content: (
      <div className="space-y-4">
        <p>The 50/30/20 rule is a simple yet effective budgeting method that helps you manage your after-tax income:</p>
        
        <div className="space-y-6">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-semibold text-indigo-900 mb-2">50% - Needs</h4>
            <p className="text-indigo-700">Essential expenses like rent/mortgage, utilities, groceries, and basic transportation.</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">30% - Wants</h4>
            <p className="text-green-700">Non-essential expenses like dining out, entertainment, hobbies, and subscriptions.</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">20% - Savings & Debt</h4>
            <p className="text-purple-700">Savings, investments, emergency fund, and debt repayment beyond minimum payments.</p>
          </div>
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">Tips for Implementation:</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Calculate your monthly after-tax income</li>
            <li>Track all expenses and categorize them</li>
            <li>Adjust percentages if needed based on your situation</li>
            <li>Use automated transfers for savings</li>
            <li>Review and adjust regularly</li>
          </ul>
        </div>
      </div>
    ),
  },
  'Track Every Expense': {
    title: 'Effective Expense Tracking Strategies',
    content: (
      <div className="space-y-4">
        <p>Tracking expenses is crucial for financial success. Here's how to do it effectively:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Digital Methods</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Budgeting apps</li>
              <li>Spreadsheet tracking</li>
              <li>Banking app features</li>
              <li>Digital receipts</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Traditional Methods</h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Receipt collection</li>
              <li>Expense journal</li>
              <li>Envelope system</li>
              <li>Monthly review</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-50 p-4 rounded-lg">
          <h4 className="font-semibold text-indigo-900 mb-2">Best Practices:</h4>
          <ul className="list-disc list-inside space-y-2 text-indigo-700">
            <li>Record expenses daily</li>
            <li>Categorize all transactions</li>
            <li>Review weekly and monthly</li>
            <li>Identify spending patterns</li>
            <li>Make adjustments based on insights</li>
          </ul>
        </div>
      </div>
    ),
  },
  'Set Clear Goals': {
    title: 'Setting SMART Financial Goals',
    content: (
      <div className="space-y-4">
        <p>Effective financial goals follow the SMART framework:</p>
        
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Specific</h4>
            <p className="text-blue-700">Define exactly what you want to achieve (e.g., save $10,000 for a down payment)</p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Measurable</h4>
            <p className="text-green-700">Track progress with specific numbers and milestones</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h4 className="font-semibold text-yellow-900 mb-2">Achievable</h4>
            <p className="text-yellow-700">Set realistic goals based on your income and circumstances</p>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-900 mb-2">Relevant</h4>
            <p className="text-red-700">Align goals with your overall financial plan and life objectives</p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Time-bound</h4>
            <p className="text-purple-700">Set specific deadlines to create urgency and track progress</p>
          </div>
        </div>
      </div>
    ),
  },
  'Emergency Fund': {
    title: 'Building Your Emergency Fund',
    content: (
      <div className="space-y-4">
        <p>An emergency fund is your financial safety net. Here's how to build one:</p>
        
        <div className="bg-indigo-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-indigo-900 mb-2">Target Amount</h4>
          <ul className="list-disc list-inside space-y-2 text-indigo-700">
            <li>Start with $1,000 for immediate emergencies</li>
            <li>Build up to 3-6 months of living expenses</li>
            <li>Consider 6-12 months if income is variable</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-green-900 mb-2">Where to Keep It</h4>
          <ul className="list-disc list-inside space-y-2 text-green-700">
            <li>High-yield savings account</li>
            <li>Separate from regular checking</li>
            <li>Easily accessible when needed</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Building Strategies</h4>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>Set up automatic transfers</li>
            <li>Save tax refunds and bonuses</li>
            <li>Cut unnecessary expenses</li>
            <li>Start small and increase over time</li>
          </ul>
        </div>
      </div>
    ),
  },
  'Automate Savings': {
    title: 'Automating Your Savings Strategy',
    content: (
      <div className="space-y-4">
        <div className="bg-indigo-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-indigo-900 mb-2">Benefits of Automation</h4>
          <ul className="list-disc list-inside space-y-2 text-indigo-700">
            <li>Removes emotional decision-making</li>
            <li>Ensures consistent savings</li>
            <li>Reduces the temptation to spend</li>
            <li>Helps build good financial habits</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-green-900 mb-2">What to Automate</h4>
          <ul className="list-disc list-inside space-y-2 text-green-700">
            <li>Emergency fund contributions</li>
            <li>Retirement account deposits</li>
            <li>Investment contributions</li>
            <li>Debt payments</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Implementation Steps</h4>
          <ol className="list-decimal list-inside space-y-2 text-blue-700">
            <li>Calculate your monthly savings target</li>
            <li>Choose transfer dates (after payday)</li>
            <li>Set up automatic transfers</li>
            <li>Monitor and adjust as needed</li>
          </ol>
        </div>
      </div>
    ),
  },
  'High-Yield Accounts': {
    title: 'Maximizing Returns with High-Yield Accounts',
    content: (
      <div className="space-y-4">
        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-yellow-900 mb-2">Key Features</h4>
          <ul className="list-disc list-inside space-y-2 text-yellow-700">
            <li>Higher interest rates than traditional savings</li>
            <li>FDIC insurance protection</li>
            <li>Easy access to funds</li>
            <li>Minimal fees</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-green-900 mb-2">What to Look For</h4>
          <ul className="list-disc list-inside space-y-2 text-green-700">
            <li>Competitive APY rates</li>
            <li>No monthly maintenance fees</li>
            <li>Low minimum balance requirements</li>
            <li>Strong online banking features</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Best Practices</h4>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>Compare rates regularly</li>
            <li>Read the fine print</li>
            <li>Consider online-only banks</li>
            <li>Keep emergency funds accessible</li>
          </ul>
        </div>
      </div>
    ),
  },
  'Diversification': {
    title: 'Investment Diversification Strategies',
    content: (
      <div className="space-y-4">
        <div className="bg-indigo-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-indigo-900 mb-2">Asset Classes</h4>
          <ul className="list-disc list-inside space-y-2 text-indigo-700">
            <li>Stocks (Equities)</li>
            <li>Bonds (Fixed Income)</li>
            <li>Real Estate</li>
            <li>Cash and Cash Equivalents</li>
            <li>Alternative Investments</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-green-900 mb-2">Benefits</h4>
          <ul className="list-disc list-inside space-y-2 text-green-700">
            <li>Reduces portfolio risk</li>
            <li>Smooths out returns</li>
            <li>Provides multiple growth opportunities</li>
            <li>Protects against market volatility</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Implementation</h4>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>Start with broad market index funds</li>
            <li>Add bonds based on risk tolerance</li>
            <li>Consider international exposure</li>
            <li>Rebalance periodically</li>
          </ul>
        </div>
      </div>
    ),
  },
  'Retirement Planning': {
    title: 'Essential Retirement Planning Strategies',
    content: (
      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-purple-900 mb-2">Account Types</h4>
          <ul className="list-disc list-inside space-y-2 text-purple-700">
            <li>401(k) / 403(b) Plans</li>
            <li>Traditional IRA</li>
            <li>Roth IRA</li>
            <li>SEP IRA (Self-employed)</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">Key Strategies</h4>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>Start early to benefit from compound interest</li>
            <li>Maximize employer matching</li>
            <li>Diversify investments</li>
            <li>Increase contributions with raises</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Planning Steps</h4>
          <ol className="list-decimal list-inside space-y-2 text-green-700">
            <li>Calculate retirement needs</li>
            <li>Choose appropriate accounts</li>
            <li>Set up automatic contributions</li>
            <li>Review and adjust annually</li>
          </ol>
        </div>
      </div>
    ),
  },
  'Long-term Thinking': {
    title: 'Developing a Long-term Investment Mindset',
    content: (
      <div className="space-y-4">
        <div className="bg-indigo-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-indigo-900 mb-2">Key Principles</h4>
          <ul className="list-disc list-inside space-y-2 text-indigo-700">
            <li>Focus on long-term goals</li>
            <li>Ignore short-term market noise</li>
            <li>Stay invested through market cycles</li>
            <li>Understand compound growth</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-green-900 mb-2">Common Mistakes to Avoid</h4>
          <ul className="list-disc list-inside space-y-2 text-green-700">
            <li>Timing the market</li>
            <li>Emotional decision-making</li>
            <li>Chasing performance</li>
            <li>Frequent trading</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Best Practices</h4>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>Set clear investment goals</li>
            <li>Create a written investment plan</li>
            <li>Automate investments</li>
            <li>Review and rebalance periodically</li>
          </ul>
        </div>
      </div>
    ),
  },
  'Debt Management': {
    title: 'Strategic Debt Management',
    content: (
      <div className="space-y-4">
        <div className="bg-red-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-red-900 mb-2">Prioritizing Debt</h4>
          <ol className="list-decimal list-inside space-y-2 text-red-700">
            <li>High-interest credit cards</li>
            <li>Personal loans</li>
            <li>Student loans</li>
            <li>Mortgage/Auto loans</li>
          </ol>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-yellow-900 mb-2">Repayment Strategies</h4>
          <ul className="list-disc list-inside space-y-2 text-yellow-700">
            <li>Avalanche method (highest interest first)</li>
            <li>Snowball method (smallest balance first)</li>
            <li>Debt consolidation</li>
            <li>Balance transfer options</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Prevention Tips</h4>
          <ul className="list-disc list-inside space-y-2 text-green-700">
            <li>Create an emergency fund</li>
            <li>Live below your means</li>
            <li>Use credit cards responsibly</li>
            <li>Track all debts and payments</li>
          </ul>
        </div>
      </div>
    ),
  },
  'Tax Planning': {
    title: 'Effective Tax Planning Strategies',
    content: (
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">Tax-Advantaged Accounts</h4>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>401(k) and IRAs</li>
            <li>HSAs and FSAs</li>
            <li>529 College Savings Plans</li>
            <li>Municipal Bonds</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-green-900 mb-2">Deductions & Credits</h4>
          <ul className="list-disc list-inside space-y-2 text-green-700">
            <li>Charitable contributions</li>
            <li>Mortgage interest</li>
            <li>Education expenses</li>
            <li>Business expenses</li>
          </ul>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h4 className="font-semibold text-purple-900 mb-2">Year-Round Strategies</h4>
          <ul className="list-disc list-inside space-y-2 text-purple-700">
            <li>Keep organized records</li>
            <li>Plan major purchases</li>
            <li>Consider tax-loss harvesting</li>
            <li>Consult with tax professionals</li>
          </ul>
        </div>
      </div>
    ),
  },
  'Credit Score': {
    title: 'Building and Maintaining a Strong Credit Score',
    content: (
      <div className="space-y-4">
        <div className="bg-indigo-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-indigo-900 mb-2">Credit Score Factors</h4>
          <ul className="list-disc list-inside space-y-2 text-indigo-700">
            <li>Payment history (35%)</li>
            <li>Credit utilization (30%)</li>
            <li>Length of credit history (15%)</li>
            <li>Credit mix (10%)</li>
            <li>New credit (10%)</li>
          </ul>
        </div>

        <div className="bg-green-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-green-900 mb-2">Improvement Strategies</h4>
          <ul className="list-disc list-inside space-y-2 text-green-700">
            <li>Pay all bills on time</li>
            <li>Keep utilization below 30%</li>
            <li>Maintain older accounts</li>
            <li>Limit new credit applications</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <h4 className="font-semibold text-blue-900 mb-2">Monitoring & Protection</h4>
          <ul className="list-disc list-inside space-y-2 text-blue-700">
            <li>Check credit reports regularly</li>
            <li>Set up credit monitoring</li>
            <li>Dispute errors promptly</li>
            <li>Protect against identity theft</li>
          </ul>
        </div>
      </div>
    ),
  },
};
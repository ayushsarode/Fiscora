import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useBudget } from '../hooks/useBudget';
import { useTransactions } from '../hooks/useTransactions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faArrowUp, faArrowDown, faBalanceScale } from '@fortawesome/free-solid-svg-icons';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import { format } from 'date-fns';

export default function Dashboard() {
  const { user } = useAuth();
  const { budget, loading: budgetLoading, updateBudget } = useBudget(user?.id || '');
  const { transactions, loading: transactionsLoading } = useTransactions(user?.id || '');
  const [newBudget, setNewBudget] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  if (!user) return null;

  const handleUpdateBudget = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsUpdating(true);
    try {
      await updateBudget(parseFloat(newBudget));
      setNewBudget('');
    } catch (error) {
      console.error('Error updating budget:', error);
    } finally {
      setIsUpdating(false);
    }
  };

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">
            <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
            Monthly Budget
          </h2>
          {budgetLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              <p className="text-2xl font-bold text-indigo-600">
                ₹{budget?.budget_amount.toFixed(2)}
              </p>
              <form onSubmit={handleUpdateBudget} className="mt-4">
                <Input
                  label="New Budget Amount"
                  type="number"
                  step="0.01"
                  value={newBudget}
                  onChange={(e) => setNewBudget(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  isLoading={isUpdating}
                  className="mt-2 w-full"
                >
                  Update Budget
                </Button>
              </form>
            </>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">
            <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
            Income
          </h2>
          <p className="text-2xl font-bold text-green-600">
            ₹{totalIncome.toFixed(2)}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-2">
            <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
            Expenses
          </h2>
          <p className="text-2xl font-bold text-red-600">
            ₹{totalExpenses.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">
          <FontAwesomeIcon icon={faBalanceScale} className="mr-2" />
          Balance
        </h2>
        <p className="text-2xl font-bold">
          ₹{balance.toFixed(2)}
        </p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        {transactionsLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {transactions.slice(0, 5).map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-500">
                    {transaction.category} • {format(new Date(transaction.date), 'MMM d, yyyy')}
                  </p>
                </div>
                <p
                  className={`font-semibold ${
                    transaction.type === 'income'
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {transaction.type === 'income' ? '+' : '-'}₹
                  {transaction.amount.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

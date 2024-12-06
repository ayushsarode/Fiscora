import { useAuth } from '../hooks/useAuth';
import { useTransactions } from '../hooks/useTransactions';
import TransactionForm from '../components/TransactionForm';
import { format } from 'date-fns';
import { Trash2 } from 'lucide-react';

export default function Transactions() {
  const { user } = useAuth();
  const { transactions, loading, addTransaction, deleteTransaction } = useTransactions(user?.id || '');

  if (!user) return null;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Transactions</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm">
            {loading ? (
              <p className="p-6">Loading...</p>
            ) : (
              <div className="divide-y">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.id}
                    className="p-4 flex items-center justify-between hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-500">
                        {transaction.category} • {format(new Date(transaction.date), 'MMM d, yyyy')}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
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
                      <button
                        onClick={() => deleteTransaction(transaction.id)}
                        className="text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                {transactions.length === 0 && (
                  <p className="p-6 text-center text-gray-500">
                    No transactions yet. Add one to get started!
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          <TransactionForm onSubmit={addTransaction} />
        </div>
      </div>
    </div>
  );
}
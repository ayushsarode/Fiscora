import React, { useState } from 'react';
import { format } from 'date-fns';
import Button from './ui/Button';
import Input from './ui/Input';

interface TransactionFormProps {
  onSubmit: (transaction: {
    type: 'income' | 'expense';
    amount: number;
    category: string;
    description: string;
    date: string;
  }) => Promise<void>;
}

export default function TransactionForm({ onSubmit }: TransactionFormProps) {
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit({
        type,
        amount: parseFloat(amount),
        category,
        description,
        date,
      });
      // Reset form
      setAmount('');
      setCategory('');
      setDescription('');
      setDate(format(new Date(), 'yyyy-MM-dd'));
    } catch (error) {
      console.error('Error submitting transaction:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
      <div className="flex gap-4">
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-lg ${
            type === 'expense'
              ? 'bg-red-100 text-red-700'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setType('expense')}
        >
          Expense
        </button>
        <button
          type="button"
          className={`flex-1 py-2 px-4 rounded-lg ${
            type === 'income'
              ? 'bg-green-100 text-green-700'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => setType('income')}
        >
          Income
        </button>
      </div>

      <Input
        label="Amount"
        type="number"
        step="0.01"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <Input
        label="Category"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <Input
        label="Description"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <Input
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <Button type="submit" isLoading={isLoading} className="w-full">
        Add Transaction
      </Button>
    </form>
  );
}
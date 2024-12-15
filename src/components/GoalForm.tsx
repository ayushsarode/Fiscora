import React, { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

interface GoalFormProps {
  onSubmit: (goal: {
    title: string;
    target_amount: number;
    deadline: string;
  }) => Promise<void>;
}

export default function GoalForm({ onSubmit }: GoalFormProps) {
  const [title, setTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit({
        title,
        target_amount: parseFloat(targetAmount),
        deadline,
      });
      // Reset form
      setTitle('');
      setTargetAmount('');
      setDeadline('');
    } catch (error) {
      console.error('Error submitting goal:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Add New Goal</h3>
      
      <Input
        label="Goal Title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <Input
        label="Target Amount"
        type="number"
        step="0.01"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        required
      />

      <Input
        label="Target Date"
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />

      <Button type="submit" isLoading={isLoading} className="w-full">
        Add Goal
      </Button>
    </form>
  );
}
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useGoals } from '../hooks/useGoals';
import GoalForm from '../components/GoalForm';
import { format } from 'date-fns';
import { Trash2 } from 'lucide-react';

export default function Goals() {
  const { user } = useAuth();
  const { goals, loading, addGoal, updateGoalProgress, deleteGoal } = useGoals(user?.id || '');

  if (!user) return null;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Financial Goals</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm">
            {loading ? (
              <p className="p-6">Loading...</p>
            ) : (
              <div className="divide-y">
                {goals.map((goal) => {
                  const progress = (goal.current_amount / goal.target_amount) * 100;
                  
                  return (
                    <div key={goal.id} className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{goal.title}</h3>
                        <button
                          onClick={() => deleteGoal(goal.id)}
                          className="text-gray-400 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>Progress: ₹{goal.current_amount.toFixed(2)} / ₹{goal.target_amount.toFixed(2)}</span>
                          <span>{Math.round(progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-indigo-600 h-2.5 rounded-full"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        Target Date: {format(new Date(goal.deadline), 'MMM d, yyyy')}
                      </div>
                    </div>
                  );
                })}
                {goals.length === 0 && (
                  <p className="p-6 text-center text-gray-500">
                    No goals yet. Add one to get started!
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <div>
          <GoalForm onSubmit={addGoal} />
        </div>
      </div>
    </div>
  );
}
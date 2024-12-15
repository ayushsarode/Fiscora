import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Goal } from '../types';

export function useGoals(userId: string) {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGoals();
  }, [userId]);

  const fetchGoals = async () => {
    try {
      const { data, error } = await supabase
        .from('goals')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGoals(data || []);
    } catch (error) {
      console.error('Error fetching goals:', error);
    } finally {
      setLoading(false);
    }
  };

  const addGoal = async (goal: Omit<Goal, 'id' | 'user_id' | 'created_at' | 'current_amount' | 'status'>) => {
    try {
      const { error } = await supabase
        .from('goals')
        .insert([{ 
          ...goal, 
          user_id: userId,
          current_amount: 0,
          status: 'in_progress'
        }]);
      if (error) throw error;
      await fetchGoals();
    } catch (error) {
      console.error('Error adding goal:', error);
      throw error;
    }
  };

  const updateGoalProgress = async (goalId: string, amount: number) => {
    try {
      const { error } = await supabase
        .from('goals')
        .update({ current_amount: amount })
        .eq('id', goalId);
      if (error) throw error;
      await fetchGoals();
    } catch (error) {
      console.error('Error updating goal progress:', error);
      throw error;
    }
  };

  const deleteGoal = async (goalId: string) => {
    try {
      const { error } = await supabase
        .from('goals')
        .delete()
        .eq('id', goalId);
      if (error) throw error;
      await fetchGoals();
    } catch (error) {
      console.error('Error deleting goal:', error);
      throw error;
    }
  };

  return { goals, loading, addGoal, updateGoalProgress, deleteGoal };
}
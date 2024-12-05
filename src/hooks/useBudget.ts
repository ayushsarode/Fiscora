import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Budget } from '../types';

export function useBudget(userId: string) {
  const [budget, setBudget] = useState<Budget | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBudget();
  }, [userId]);

  const fetchBudget = async () => {
    try {
      const { data, error } = await supabase
        .from('budget')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error) throw error;
      setBudget(data);
    } catch (error) {
      console.error('Error fetching budget:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateBudget = async (amount: number) => {
    try {
      if (budget) {
        const { error } = await supabase
          .from('budget')
          .update({ budget_amount: amount })
          .eq('id', budget.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('budget')
          .insert([{ user_id: userId, budget_amount: amount }]);
        if (error) throw error;
      }
      await fetchBudget();
    } catch (error) {
      console.error('Error updating budget:', error);
      throw error;
    }
  };

  return { budget, loading, updateBudget };
}
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Transaction } from '../types';

export function useTransactions(userId: string) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTransactions();
  }, [userId]);

  const fetchTransactions = async () => {
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', userId)
        .order('date', { ascending: false });

      if (error) throw error;
      setTransactions(data || []);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const addTransaction = async (transaction: Omit<Transaction, 'id' | 'user_id' | 'created_at'>) => {
    try {
      const { error } = await supabase
        .from('transactions')
        .insert([{ ...transaction, user_id: userId }]);
      if (error) throw error;
      await fetchTransactions();
    } catch (error) {
      console.error('Error adding transaction:', error);
      throw error;
    }
  };

  const deleteTransaction = async (id: string) => {
    try {
      const { error } = await supabase
        .from('transactions')
        .delete()
        .eq('id', id);
      if (error) throw error;
      await fetchTransactions();
    } catch (error) {
      console.error('Error deleting transaction:', error);
      throw error;
    }
  };

  return { transactions, loading, addTransaction, deleteTransaction };
}
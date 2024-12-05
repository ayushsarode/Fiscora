export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface Budget {
  id: string;
  user_id: string;
  budget_amount: number;
  created_at: string;
}

export interface Transaction {
  id: string;
  user_id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: string;
  created_at: string;
}

export interface Goal {
  id: string;
  user_id: string;
  title: string;
  target_amount: number;
  current_amount: number;
  deadline: string;
  status: 'in_progress' | 'completed' | 'failed';
  created_at: string;
}
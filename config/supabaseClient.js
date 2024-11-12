// config/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://bnvtoeoywbtvdzdjavbd.supabase.co'; // Substitua pelo seu URL do Supabase
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJudnRvZW95d2J0dmR6ZGphdmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwODkwNDEsImV4cCI6MjA0MjY2NTA0MX0.Nk77U0RPDQCpYcWwrF17efnyCM9p8GRqBjFt17gv3Go'; // Substitua pela sua chave anônima do Supabase

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// config/supabaseClient.js

// Função para fazer login
export async function signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
  
    if (error) {
      console.error('Erro ao fazer login:', error.message);
      return { error };
    }
  
    return { data };
  }
  
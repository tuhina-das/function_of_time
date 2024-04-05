import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { SessionContextProvider } from '@supabase/auth-helpers-react';

const supabase = createClient(
  "https://nnjegillkfigacmvfyox.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5uamVnaWxsa2ZpZ2FjbXZmeW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEyMjY3MDYsImV4cCI6MjAyNjgwMjcwNn0.jlnNlB3AbD9jGRgXRkcEC9y6evid9P7ykB1Wph-ys0A"
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SessionContextProvider supabaseClient={supabase}>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </SessionContextProvider>
);
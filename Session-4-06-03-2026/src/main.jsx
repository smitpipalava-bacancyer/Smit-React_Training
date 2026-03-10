import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from "./components/router";
import { ContextProviders } from './Providers/ContextProviders';
import { AuthProvider } from '../../Session-3-06-03-2026/src/AuthContext';

createRoot(document.getElementById('root')).render(
  <ContextProviders>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </ContextProviders>
)

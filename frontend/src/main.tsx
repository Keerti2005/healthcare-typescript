import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/index.css'; 
import App from './App'; 
import { AuthProvider } from './auth/auth-context';  // Import AuthProvider

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider> {/* Wrap the app with AuthProvider */}
      <App />
    </AuthProvider>
  </StrictMode>
);
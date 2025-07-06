import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '../src/index.css';
import App from './App';
import { AuthProvider } from './auth/auth-context'; // Import AuthProvider
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsxs(AuthProvider, { children: [" ", _jsx(App, {})] }) }));

import { jsx as _jsx } from "react/jsx-runtime";
import { router } from '@inertiajs/react';
import { ThemeProvider } from './theme-provider';
import { RouterProvider } from 'react-aria-components';
export function Providers({ children }) {
    return (_jsx(RouterProvider, { navigate: (to, options) => router.visit(to, options), children: _jsx(ThemeProvider, { defaultTheme: "system", storageKey: "ui-theme", children: children }) }));
}

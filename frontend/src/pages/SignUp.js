import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useTheme } from '@mui/material/styles';
import { Box, Button, TextField, Typography, Link, Paper, Stack, } from '@mui/material';
const BRANDING = {
    logo: (_jsx("div", { style: { display: 'flex', justifyContent: 'center' }, children: _jsx("span", { className: "text-xl font-bold text-green-600", children: "M" }) })),
};
export default function SignUp() {
    const theme = useTheme();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSignUp = async () => {
        try {
            const res = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, password }),
            });
            const data = await res.json();
            if (res.ok) {
                alert('Account created! Redirecting to dashboard...');
                window.location.href = '/dashboard';
            }
            else {
                alert(data.error || 'Sign up failed');
            }
        }
        catch (err) {
            console.error('Error signing up:', err);
            alert('Server error');
        }
    };
    return (_jsx("div", { className: "dark bg-black text-white min-h-screen", children: _jsx(AppProvider, { branding: BRANDING, theme: theme, children: _jsx(Box, { display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", bgcolor: "#000" // Full screen black background
                , children: _jsx(Paper, { elevation: 3, sx: { padding: 4, width: 360, bgcolor: '#fff' }, children: _jsxs(Stack, { spacing: 3, alignItems: "center", children: [_jsx(Typography, { variant: "h4", sx: { color: '#1976d2', fontWeight: 'bold' }, children: "M" }), _jsx(Typography, { variant: "h5", align: "center", color: "black", sx: { fontWeight: 'bold' }, children: "Sign Up for MEDTRACK" }), _jsx(TextField, { label: "Username", variant: "outlined", fullWidth: true, value: username, onChange: (e) => setUsername(e.target.value), sx: {
                                    backgroundColor: '#e3f2fd',
                                    borderRadius: 1,
                                } }), _jsx(TextField, { label: "Email", variant: "outlined", type: "email", fullWidth: true, value: email, onChange: (e) => setEmail(e.target.value), sx: {
                                    backgroundColor: '#e3f2fd',
                                    borderRadius: 1,
                                } }), _jsx(TextField, { label: "Password", variant: "outlined", type: "password", fullWidth: true, value: password, onChange: (e) => setPassword(e.target.value), sx: {
                                    backgroundColor: '#e3f2fd',
                                    borderRadius: 1,
                                } }), _jsx(Button, { variant: "contained", fullWidth: true, onClick: handleSignUp, sx: { bgcolor: '#1976d2', color: '#fff', fontWeight: 'bold' }, children: "SIGN UP" }), _jsxs(Typography, { variant: "body2", align: "center", color: "black", children: ["Already have an account?", ' ', _jsx(Link, { href: "/signin", underline: "hover", children: "Sign In" })] })] }) }) }) }) }));
}

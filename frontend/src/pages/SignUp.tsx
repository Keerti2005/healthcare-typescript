import * as React from 'react';
import { AppProvider } from '@toolpad/core/AppProvider';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  TextField,
  Typography,
  Link,
  Paper,
  Stack,
} from '@mui/material';

const BRANDING = {
  logo: (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <span className="text-xl font-bold text-green-600">M</span>
    </div>
  ),
 
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
      } else {
        alert(data.error || 'Sign up failed');
      }
    } catch (err) {
      console.error('Error signing up:', err);
      alert('Server error');
    }
  };

  return (
    <div className="dark bg-black text-white min-h-screen">
      <AppProvider branding={BRANDING} theme={theme}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          bgcolor="#000" // Full screen black background
        >
          <Paper elevation={3} sx={{ padding: 4, width: 360, bgcolor: '#fff' }}>
            <Stack spacing={3} alignItems="center">
              {/* Logo M */}
              <Typography
                variant="h4"
                sx={{ color: '#1976d2', fontWeight: 'bold' }}
              >
                M
              </Typography>

              {/* Header */}
              <Typography variant="h5" align="center" color="black"  sx={{ fontWeight: 'bold' }}>
                Sign Up for MEDTRACK
              </Typography>

              {/* Username */}
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                sx={{
                  backgroundColor: '#e3f2fd', 
                  borderRadius: 1,
                }}
              />

              {/* Email */}
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: '#e3f2fd',
                  borderRadius: 1,
                }}
              />

              {/* Password */}
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                fullWidth
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  backgroundColor: '#e3f2fd',
                  borderRadius: 1,
                }}
              />

              {/* Sign Up Button */}
              <Button
                variant="contained"
                fullWidth
                onClick={handleSignUp}
                sx={{ bgcolor: '#1976d2', color: '#fff', fontWeight: 'bold' }}
              >
                SIGN UP
              </Button>

              {/* Link to sign in */}
              <Typography variant="body2" align="center" color="black">
                Already have an account?{' '}
                <Link href="/signin" underline="hover">
                  Sign In
                </Link>
              </Typography>
            </Stack>
          </Paper>
        </Box>
      </AppProvider>
    </div>
  );
}
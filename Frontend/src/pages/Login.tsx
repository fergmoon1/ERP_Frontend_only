import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Avatar,
  InputAdornment,
  Link,
  Stack
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useNavigate } from 'react-router-dom';
import authService from '../services/auth.service';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await authService.login({ username: email, password });
      navigate('/');
    } catch (err: any) {
      setError('Correo o contraseña incorrectos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box sx={{ display: 'flex', width: '100%', maxWidth: 900, height: 500, boxShadow: 8, borderRadius: 4, overflow: 'hidden' }}>
        <Box sx={{ flex: 1, bgcolor: 'black', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 4 }}>
          <Avatar sx={{ bgcolor: 'white', color: 'black', width: 64, height: 64, mb: 2 }}>
            <LockOutlinedIcon fontSize="large" />
          </Avatar>
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Sign In
          </Typography>
          <Paper elevation={0} sx={{ bgcolor: 'transparent', width: '100%', maxWidth: 350 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Correo Electrónico"
                variant="standard"
                fullWidth
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon sx={{ color: 'gray' }} />
                    </InputAdornment>
                  ),
                  style: { color: 'white' }
                }}
                InputLabelProps={{ style: { color: '#bbb' } }}
                sx={{ mb: 3, borderBottom: '1px solid #444' }}
              />
              <TextField
                label="Contraseña"
                variant="standard"
                type="password"
                fullWidth
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon sx={{ color: 'gray' }} />
                    </InputAdornment>
                  ),
                  style: { color: 'white' }
                }}
                InputLabelProps={{ style: { color: '#bbb' } }}
                sx={{ mb: 2, borderBottom: '1px solid #444' }}
              />
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 3 }}>
                <Link href="#" underline="hover" color="primary" fontWeight="bold" fontSize={14}>
                  FORGOT PASSWORD?
                </Link>
              </Stack>
              {error && (
                <Typography color="error" sx={{ mb: 2 }}>
                  {error}
                </Typography>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'white',
                  borderRadius: 999,
                  py: 1.5,
                  fontWeight: 'bold',
                  fontSize: 16,
                  mb: 2,
                  '&:hover': { bgcolor: 'primary.dark' }
                }}
                disabled={loading}
              >
                {loading ? 'Ingresando...' : 'Iniciar Sesión'}
              </Button>
              <Typography align="center" color="gray">
                Don't have an account?{' '}
                <Link href="#" underline="hover" color="primary" fontWeight="bold">
                  Sign up
                </Link>
              </Typography>
            </form>
          </Paper>
        </Box>
        <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }}>
          <img
            src="https://storage.googleapis.com/a1aa/image/nA9yxQsQqKwsWL3ZOHmgtj5mpCccIQDmJit-tfbnkdc.jpg"
            alt="Abstract black and white image of tall buildings"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Login; 
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
// import rayatImage from "../assets/rayat-img.jpg";
import { 
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Container
} from '@mui/material';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [hrmsNo, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        hrmsNo,
        password,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      const decoded = jwtDecode(token);
      const role = decoded.role;
      console.log(decoded.id);
      
      localStorage.setItem("role", role);
      navigate(`/${role}`);
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundImage: `url(${rayatImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="sm">
        <Card sx={{ 
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          boxShadow: 3,
          borderRadius: 2
        }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" sx={{ textAlign: 'center', mb: 4, color: 'text.primary', fontWeight: 600 }}>
              Login
            </Typography>
            <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <FaUser style={{ color: '#4B5563' }} />
                <Typography variant="body1" color="text.secondary">
                  Username
                </Typography>
              </Box>
              <TextField
                fullWidth
                id="username"
                placeholder="Enter your username"
                value={hrmsNo}
                onChange={(e) => setUsername(e.target.value)}
                required
                variant="outlined"
              />
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <FaLock style={{ color: '#4B5563' }} />
                <Typography variant="body1" color="text.secondary">
                  Password
                </Typography>
              </Box>
              <TextField
                fullWidth
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                variant="outlined"
              />

              {error && (
                <Typography color="error" variant="body2">
                  {error}
                </Typography>
              )}

              <Box sx={{ textAlign: 'right' }}>
                <Link
                  to="/resetPassword"
                  style={{ 
                    color: '#1565C0',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                  }}
                >
                  Forgot Password?
                </Link>
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: '#16a34a',
                  '&:hover': {
                    backgroundColor: '#15803d'
                  },
                  mt: 2
                }}
              >
                Login
              </Button>
            </Box>

          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Login;

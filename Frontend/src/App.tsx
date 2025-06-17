import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Productos from './pages/Productos';
import Usuarios from './pages/Usuarios';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#dc004e',
        },
    },
});

const App: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        // Puedes mostrar un loader si quieres
        return null;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route
                            path="/"
                            element={
                                <ProtectedRoute>
                                    <Layout>
                                        <Navigate to="/productos" replace />
                                    </Layout>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/productos"
                            element={
                                <ProtectedRoute>
                                    <Layout>
                                        <Productos />
                                    </Layout>
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/usuarios"
                            element={
                                <ProtectedRoute>
                                    <Layout>
                                        <Usuarios />
                                    </Layout>
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
};

export default App; 
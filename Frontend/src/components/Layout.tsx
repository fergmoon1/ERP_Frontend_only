import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Navbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <CssBaseline />
            <Navbar />
            <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
                {children}
            </Container>
        </Box>
    );
};

export default Layout; 
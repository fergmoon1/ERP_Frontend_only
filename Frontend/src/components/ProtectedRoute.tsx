import React from 'react';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    // TEMPORAL: Permitir acceso siempre
    return <>{children}</>;
};

export default ProtectedRoute; 
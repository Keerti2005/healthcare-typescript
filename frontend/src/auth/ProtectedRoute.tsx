// ProtectedRoute.tsx
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './auth-context';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();  // Access both user and loading from context

  if (loading) return <p>Loading...</p>;  // Show loading message while fetching user
  if (!user) return <Navigate to="/signin" replace />;  // Redirect to sign-in page if no user
  return <>{children}</>;  // Render children if user is authenticated
};

export default ProtectedRoute;

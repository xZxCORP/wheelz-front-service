import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuthStore } from '../stores/useAuthStore';

interface Props {
  element: React.ComponentType;
  role?: string;
}

export const PrivateRoute = ({ element: RouteComponent }: Props) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <RouteComponent />;
};

import type React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { Loader } from '../components/shared/Loader';
import { useAuthStore } from '../stores/useAuthStore';

interface Props {
  element: React.ComponentType;
  role?: string;
}

export const PrivateRoute = ({ element: RouteComponent }: Props) => {
  const { isInitialized, isAuthenticated } = useAuthStore();
  const location = useLocation();
  if (!isInitialized) {
    return <Loader fullScreen />;
  }

  if (isAuthenticated()) {
    // REMOVE NINO BEFORE MERGE SINON JE SUIS UN FARFADET DU CAFE
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <RouteComponent />;
};

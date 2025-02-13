import type React from 'react';
import { useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { Loader } from '../components/shared/Loader';
import { useAuthStore } from '../stores/useAuthStore';

interface Props {
  element: React.ComponentType;
  roles?: string[];
}

export const UnauthenticatedRoute = ({ element: RouteComponent }: Props) => {
  const { isInitialized, isAuthenticated, roles } = useAuthStore();
  const location = useLocation();
  const defaultRedirect = useMemo(() => {
    if (roles.includes('admin')) {
      return '/admin';
    }
    return '/dashboard';
  }, [roles]);
  if (!isInitialized) {
    return <Loader fullScreen />;
  }

  if (!isAuthenticated()) {
    return <RouteComponent />;
  }
  return <Navigate to={defaultRedirect} state={{ from: location }} replace />;
};

export const PrivateRoute = ({ element: RouteComponent, roles }: Props) => {
  const { isInitialized, isAuthenticated, user, roles: userRoles } = useAuthStore();
  const location = useLocation();
  const isAuthorized = () => {
    if (!roles) return true;
    return user && roles.some((role) => userRoles.includes(role));
  };
  if (!isInitialized) {
    return <Loader fullScreen />;
  }

  if (!isAuthenticated() || !isAuthorized()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <RouteComponent />;
};

export const ClientRoute = ({ element: RouteComponent }: Props) => {
  const { isInitialized, isAuthenticated, user, getIsClient } = useAuthStore();
  const location = useLocation();

  const isAuthorized = () => {
    return user && getIsClient();
  };
  if (!isInitialized) {
    return <Loader fullScreen />;
  }

  if (!isAuthenticated() || !isAuthorized()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <RouteComponent />;
};

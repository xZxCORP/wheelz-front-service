import type React from 'react';
import { useCallback, useMemo } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { Loader } from '../components/shared/Loader';
import { AuthStore } from '../stores/useAuthStore';

interface Props {
  element: React.ComponentType;
  roles?: string[];
}

export const UnauthenticatedRoute = ({ element: RouteComponent }: Props) => {
  const { isInitialized, isAuthenticated, roles } = AuthStore.use();
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
  const { isInitialized, isAuthenticated, user, roles: userRoles } = AuthStore.use();
  const location = useLocation();
  const isAuthorized = useCallback(() => {
    if (!roles) return true;
    return user && roles.some((role) => userRoles.includes(role));
  }, [roles, user, userRoles]);
  if (!isInitialized) {
    return <Loader fullScreen />;
  }

  if (!isAuthenticated() || !isAuthorized()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <RouteComponent />;
};

export const ProRoute = ({ element: RouteComponent }: Props) => {
  const { isInitialized, isAuthenticated, user } = AuthStore.use();
  const isPro = AuthStore.useGetIsPro();
  const location = useLocation();
  const isAuthorized = useCallback(() => {
    return user && isPro;
  }, [isPro, user]);

  if (!isInitialized) {
    return <Loader fullScreen />;
  }
  if (!isAuthenticated() || !isAuthorized()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <RouteComponent />;
};

export const ClientRoute = ({ element: RouteComponent }: Props) => {
  const { isInitialized, isAuthenticated, user } = AuthStore.use();
  const isClient = AuthStore.useGetIsClient();
  const location = useLocation();
  const isAuthorized = useCallback(() => {
    return user && isClient;
  }, [isClient, user]);

  if (!isInitialized) {
    return <Loader fullScreen />;
  }
  if (!isAuthenticated() || !isAuthorized()) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return <RouteComponent />;
};

import { Navigate } from 'react-router-dom';

import { AuthStore } from '../stores/useAuthStore';

export const DashboardRouter = () => {
  const isPro = AuthStore.useGetIsPro();
  const isClient = AuthStore.useGetIsClient();
  const { isAuthenticated } = AuthStore.use();

  if (!isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  if (isClient) {
    return <Navigate to="/dashboard/client" replace />;
  }
  if (isPro) {
    return <Navigate to="/dashboard/pro" replace />;
  }
};

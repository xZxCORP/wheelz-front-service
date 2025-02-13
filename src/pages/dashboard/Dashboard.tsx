import { useMemo } from 'react';

import { AuthStore } from '../../stores/useAuthStore';
import { ClientDashboard } from './client/ClientDashboard';
import { ProDashboard } from './pro/ProDashboard';

export const Dashboard = () => {
  const isClient = AuthStore.useGetIsClient();
  const isPro = AuthStore.useGetIsPro();
  const calculatedDashboard = useMemo(() => {
    if (isClient) {
      return <ClientDashboard />;
    }
    if (isPro) {
      return <ProDashboard />;
    }
  }, [isClient, isPro]);

  return calculatedDashboard;
};

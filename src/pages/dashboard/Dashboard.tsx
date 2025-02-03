import { useAuthStore } from '../../stores/useAuthStore';
import { ClientDashboard } from './ClientDashboard';

export const Dashboard = () => {
  const { user } = useAuthStore();
  // Check client or garage

  return <ClientDashboard />;
};

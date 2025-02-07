import { useAuthStore } from '../../stores/useAuthStore';
import { ClientDashboard } from './ClientDashboard';

export const Dashboard = () => {
  const { isPro } = useAuthStore();
  // Check client or garage
  console.log(`This user ${isPro ? 'is pro' : 'is a client'}`);

  return <ClientDashboard />;
};

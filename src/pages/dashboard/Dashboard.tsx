import { AuthStore } from '../../stores/useAuthStore';
import { ClientDashboard } from './ClientDashboard';

export const Dashboard = () => {
  const { useGetIsPro } = AuthStore;
  // Check client or garage
  console.log(`This user ${useGetIsPro() ? 'is pro' : 'is a client'}`);

  return <ClientDashboard />;
};

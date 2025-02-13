import { Outlet } from 'react-router-dom';

import { LoginModal } from '../../components/main/auth/login/modals/LoginModal';
import { RegisterModal } from '../../components/main/auth/register/modals/RegisterModal';
import { Header } from '../../components/main/MainHeader';
import { Loader } from '../../components/shared/Loader';
import { useGlobalLoadingStore } from '../../stores/useGlobalLoadingStore';

export const BaseLayout = () => {
  const isLoading = useGlobalLoadingStore((state) => state.isLoading);
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-primary-100">
      <Header />
      <main className="min-h-screen grow py-4">
        <Outlet />
      </main>

      {isLoading && <Loader fullScreen size="lg" variant="primary" />}
      <RegisterModal />
      <LoginModal />
    </div>
  );
};

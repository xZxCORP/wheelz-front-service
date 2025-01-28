import { Outlet } from 'react-router-dom';

import { LoginModal } from '../../components/main/auth/modals/LoginModal';
import { RegisterModal } from '../../components/main/auth/modals/RegisterModal';
import { Header } from '../../components/main/MainHeader';
import { Loader } from '../../components/shared/Loader';
import { useGlobalLoadingStore } from '../../stores/useGlobalLoadingStore';
import { Footer } from './Footer';

export const BaseLayout = () => {
  const isLoading = useGlobalLoadingStore((state) => state.isLoading);
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="grow py-4">
        <Outlet />
      </main>
      <Footer />
      {isLoading && <Loader fullScreen size="lg" variant="primary" />}
      <RegisterModal />
      <LoginModal />
    </div>
  );
};

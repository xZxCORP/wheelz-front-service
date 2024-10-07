import { Outlet } from 'react-router-dom';

import Loader from '../../components/base/Loader';
import { useGlobalLoadingStore } from '../../stores/useGlobalLoadingStore';
import Footer from './Footer';
import Header from './Header';

const BaseLayout = () => {
  const isLoading = useGlobalLoadingStore((state) => state.isLoading);

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="grow p-4">
        <Outlet />
      </main>
      <Footer />
      {isLoading && <Loader fullScreen size="lg" variant="primary" />}
    </div>
  );
};

export default BaseLayout;

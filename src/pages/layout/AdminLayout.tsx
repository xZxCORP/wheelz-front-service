import { Outlet } from 'react-router-dom';

import { AdminHeader } from '../../components/admin/navigation/AdminHeader';
import { AdminSidebar } from '../../components/admin/navigation/AdminSidebar';
import { Loader } from '../../components/shared/Loader';
import { useGlobalLoadingStore } from '../../stores/useGlobalLoadingStore';

export const AdminLayout = () => {
  //TODO: Implement admin role verification
  const isLoading = useGlobalLoadingStore((state) => state.isLoading);
  console.log('isLoading', isLoading);
  return (
    <>
      <div className="flex min-h-screen w-full flex-col lg:hidden">
        <AdminHeader />
        <main className="grow p-4">
          <Outlet />
        </main>
      </div>
      <div className="hidden min-h-screen w-full lg:flex">
        <AdminSidebar />
        <main className="grow p-4">
          <Outlet />
        </main>
      </div>

      {isLoading && <Loader fullScreen size="lg" variant="primary" />}
    </>
  );
};

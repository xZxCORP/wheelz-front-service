import { Outlet } from 'react-router-dom';

import { AdminHeader } from '../../components/admin/navigation/AdminHeader';
import { AdminSidebar } from '../../components/admin/navigation/AdminSidebar';
import { Loader } from '../../components/shared/Loader';
import { useGlobalLoadingStore } from '../../stores/useGlobalLoadingStore';

export const AdminLayout = () => {
  //TODO: Implement admin role verification
  const isLoading = useGlobalLoadingStore((state) => state.isLoading);

  return (
    <>
      <div className="min-h-screen w-full flex-col lg:flex-row">
        <AdminHeader className="lg:hidden" />

        <div className="flex min-h-screen">
          <AdminSidebar className="hidden lg:flex" />

          <main className="grow p-4">
            <Outlet />
          </main>
        </div>

        {isLoading && <Loader fullScreen size="lg" variant="primary" />}
      </div>
    </>
  );
};

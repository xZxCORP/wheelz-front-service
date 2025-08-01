import { Outlet } from 'react-router-dom';

import { AdminHeader } from '../../components/admin/navigation/AdminHeader';
import { AdminSidebar } from '../../components/admin/navigation/AdminSidebar';
import { Footer } from '../../components/shared/Footer';
import { Loader } from '../../components/shared/Loader';
import { ForceCreateTransactionModal } from '../../components/transaction/modals/ForceCreateTransactionModal';
import { ForceUpdateTransactionModal } from '../../components/transaction/modals/ForceUpdateTransactionModal';
import { useGlobalLoadingStore } from '../../stores/useGlobalLoadingStore';

export const AdminLayout = () => {
  //TODO: Implement admin role verification
  const isLoading = useGlobalLoadingStore((state) => state.isLoading);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-primary-50">
        <AdminHeader className="lg:hidden" />

        <div className="flex min-h-0 flex-1">
          <AdminSidebar className="hidden lg:flex" />

          <main className="flex-1 overflow-auto bg-background p-4">
            <Outlet />
          </main>
        </div>

        <Footer />
        {isLoading && <Loader fullScreen size="lg" variant="primary" />}
        <ForceCreateTransactionModal />
        <ForceUpdateTransactionModal />
      </div>
    </>
  );
};

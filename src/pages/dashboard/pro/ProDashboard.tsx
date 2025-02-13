import { Outlet } from 'react-router-dom';

import { ProRoutingButtons } from '../../../components/dashboard/ProRoutingButtons';

export type ProDashboardPages = 'my-garage' | 'add-vehicle' | 'update-vehicle' | 'profile';

export const ProDashboard = () => {
  return (
    <div className="flex size-full flex-wrap justify-center">
      <div className="flex flex-row space-x-6 py-2 ">
        <ProRoutingButtons />
      </div>
      <Outlet />
    </div>
  );
};

import { Outlet } from 'react-router-dom';

import { ClientRoutingButtons } from '../../../components/dashboard/ClientRoutingButtons';

export type ClientDashboardPages = 'my-garage' | 'garages' | 'profile';

export const ClientDashboard = () => {
  return (
    <div className="flex size-full flex-wrap justify-center">
      <div className="flex flex-row space-x-6 py-2 ">
        <ClientRoutingButtons />
      </div>
      <Outlet />
    </div>
  );
};

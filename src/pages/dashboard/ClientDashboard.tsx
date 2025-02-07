import { Outlet } from 'react-router-dom';

import { RoutingButtons } from '../../components/shared/RoutingButtons';

export type ClientDashboardPages = 'my-garage' | 'garages' | 'profile';

export const ClientDashboard = () => {
  return (
    <div className="flex size-full flex-wrap justify-center">
      <div className="flex flex-row space-x-6 py-2 ">
        <RoutingButtons />
      </div>
      <Outlet />
    </div>
  );
};

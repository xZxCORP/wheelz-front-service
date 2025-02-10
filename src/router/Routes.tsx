import type { RouteObject } from 'react-router-dom';

import { AdminRoot } from '../pages/admin/AdminRoot';
import { ChainTablePage } from '../pages/admin/chain/ChainTablePage';
import { ViewVehiclePage } from '../pages/admin/chain/ViewVehiclePage';
import { StatsPage } from '../pages/admin/StatsPage';
import { CreateTransactionPage } from '../pages/admin/transactions/CreateTransactionPage';
import { TransactionsTablePage } from '../pages/admin/transactions/TransactionsTablePage';
import { ViewTransactionPage } from '../pages/admin/transactions/ViewTransactionPage';
import { UsersTablePage } from '../pages/admin/users/UsersTablePage';
import { ViewUserPage } from '../pages/admin/users/ViewUserPage';
import { MyGarage } from '../pages/dashboard/client/MyGarage';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { AdminLayout } from '../pages/layout/AdminLayout';
import { BaseLayout } from '../pages/layout/BaseLayout';
import { MainRoot } from '../pages/main/MainRoot';
import { Profile } from '../pages/main/Profile';
import { Report } from '../pages/main/Report';
import { VehicleSearchPage } from '../pages/main/VehicleSearchPage';
import { ClientRoute, PrivateRoute, UnauthenticatedRoute } from './ProtectedRoutes';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,

    children: [
      {
        children: [
          {
            index: true,
            element: <UnauthenticatedRoute element={MainRoot} />,
          },
          {
            path: 'dashboard',
            element: <Dashboard />,
            children: [
              {
                path: 'my-garage',
                element: <ClientRoute element={MyGarage} />,
                children: [
                  {
                    path: 'vehicle/:vin',
                    //element: <ClientRoute element={MyGarage} />,
                    element: <Report />,
                  },
                ],
              },
            ],
          },
          /* {
            path: 'report/:vin',
            element: <PrivateRoute element={Report} />,
          }, */
          {
            // page with VehicleSearchForm
            path: 'search',
            element: <VehicleSearchPage />,
          },
          {
            path: '/profile',
            element: <PrivateRoute element={Profile} />,
          },
        ],
      },
    ],
  },
  {
    path: '/admin',
    element: <PrivateRoute element={AdminLayout} roles={['admin']} />,

    children: [
      {
        children: [
          {
            index: true,
            element: <AdminRoot />,
          },
          {
            path: 'transactions',
            element: <TransactionsTablePage />,
          },
          {
            path: 'transactions/new',
            element: <CreateTransactionPage />,
          },
          {
            path: 'transactions/:id',
            element: <ViewTransactionPage />,
          },
          {
            path: 'chain',
            element: <ChainTablePage />,
          },
          {
            path: 'chain/:vin',
            element: <ViewVehiclePage />,
          },
          {
            path: 'users',
            element: <UsersTablePage />,
          },
          {
            path: 'users/:id',
            element: <ViewUserPage />,
          },
          {
            path: 'stats',
            element: <StatsPage />,
          },
        ],
      },
    ],
  },
];

import type { RouteObject } from 'react-router-dom';

import { AdminRoot } from '../pages/admin/AdminRoot';
import { ChainTablePage } from '../pages/admin/chain/ChainTablePage';
import { ViewVehiclePage } from '../pages/admin/chain/ViewVehiclePage';
import { CompaniesTablePage } from '../pages/admin/companies/CompaniesTablePage';
import { ViewCompanyPage } from '../pages/admin/companies/ViewCompanyPage';
import { StatsPage } from '../pages/admin/StatsPage';
import { CreateTransactionPage } from '../pages/admin/transactions/CreateTransactionPage';
import { TransactionsTablePage } from '../pages/admin/transactions/TransactionsTablePage';
import { ViewTransactionPage } from '../pages/admin/transactions/ViewTransactionPage';
import { UsersTablePage } from '../pages/admin/users/UsersTablePage';
import { ViewUserPage } from '../pages/admin/users/ViewUserPage';
import { ClientDashboard } from '../pages/dashboard/client/ClientDashboard';
import { MyGarage } from '../pages/dashboard/MyGarage';
import { ProDashboard } from '../pages/dashboard/pro/ProDashboard';
import { AdminLayout } from '../pages/layout/AdminLayout';
import { BaseLayout } from '../pages/layout/BaseLayout';
import { MainRoot } from '../pages/main/MainRoot';
import { Profile } from '../pages/main/Profile';
import { Report } from '../pages/main/Report';
import { VehicleSearchPage } from '../pages/main/VehicleSearchPage';
import { DashboardRouter } from './DashboardRouter';
import { ClientRoute, PrivateRoute, ProRoute, UnauthenticatedRoute } from './ProtectedRoutes';

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
            children: [
              { index: true, element: <DashboardRouter /> },
              {
                path: 'pro',
                element: <ProRoute element={ProDashboard} />,
                children: [
                  {
                    path: 'my-garage',
                    element: <MyGarage />,
                    children: [{ path: 'vehicle/:vin', element: <Report /> }],
                  },
                ],
              },
              {
                path: 'client',
                element: <ClientRoute element={ClientDashboard} />,
                children: [
                  {
                    path: 'my-garage',
                    element: <MyGarage />,
                    children: [{ path: 'vehicle/:vin', element: <Report /> }],
                  },
                ],
              },
            ],
          },

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
          {
            path: 'companies',
            element: <CompaniesTablePage />,
          },
          {
            path: 'companies/:id',
            element: <ViewCompanyPage />,
          },
        ],
      },
    ],
  },
];

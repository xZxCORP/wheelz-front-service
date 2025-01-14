import type { RouteObject } from 'react-router-dom';

import { AdminRoot } from '../pages/admin/AdminRoot';
import { ChainTablePage } from '../pages/admin/chain/ChainTablePage';
import { ViewVehiclePage } from '../pages/admin/chain/ViewVehiclePage';
import { StatsPage } from '../pages/admin/StatsPage';
import { CreateTransactionPage } from '../pages/admin/transactions/CreateTransactionPage';
import { TransactionsTablePage } from '../pages/admin/transactions/TransactionsTablePage';
import { ViewTransactionPage } from '../pages/admin/transactions/ViewTransactionPage';
import { UsersTable } from '../pages/admin/UsersTable';
import { AdminLayout } from '../pages/layout/AdminLayout';
import { BaseLayout } from '../pages/layout/BaseLayout';
import { ErrorLayout } from '../pages/layout/ErrorLayout';
import { ErrorOutletLayout } from '../pages/layout/ErrorOutletLayout';
import { MainRoot } from '../pages/main/MainRoot';
import { Report } from '../pages/main/Report';
import { VehicleSearchPage } from '../pages/main/VehicleSearchPage';
import { PrivateRoute } from './ProtectedRoutes';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,

    children: [
      {
        children: [
          {
            index: true,
            element: <MainRoot />,
          },
          {
            path: 'report',
            element: <PrivateRoute element={Report} />,
          },
          {
            // page with VehicleSearchForm
            path: 'search',
            element: <VehicleSearchPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/admin',
    element: <PrivateRoute element={AdminLayout} role="admin" />,

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
            element: <UsersTable />,
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

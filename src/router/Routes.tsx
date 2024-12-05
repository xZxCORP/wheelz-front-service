import type { RouteObject } from 'react-router-dom';

import { AdminRoot } from '../pages/admin/AdminRoot';
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
import { PrivateRoute } from './ProtectedRoutes';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorLayout />,

    children: [
      {
        errorElement: <ErrorOutletLayout />,
        children: [
          {
            index: true,
            element: <MainRoot />,
          },
          {
            path: 'report',
            element: <PrivateRoute element={Report} />,
          },
        ],
      },
    ],
  },
  {
    path: '/admin',
    element: <PrivateRoute element={AdminLayout} role="admin" />,
    errorElement: <ErrorLayout />,

    children: [
      {
        errorElement: <ErrorOutletLayout />,
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
            path: 'users',
            element: <UsersTable />,
          },
        ],
      },
    ],
  },
];

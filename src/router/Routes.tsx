import type { RouteObject } from 'react-router-dom';

import { AdminRoot } from '../pages/admin/AdminRoot';
import { TransactionsTable } from '../pages/admin/TransactionsTable';
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
    element: <AdminLayout />,
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
            element: <PrivateRoute element={TransactionsTable} role="admin" />,
          },
          {
            path: 'users',
            element: <PrivateRoute element={UsersTable} role="admin" />,
          },
        ],
      },
    ],
  },
];

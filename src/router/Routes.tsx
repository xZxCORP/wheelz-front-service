import { Navigate, RouteObject } from 'react-router-dom';

import { Dashboard } from '../pages/dashboard/Dashboard';
import { Report } from '../pages/dashboard/Report';
import { BaseLayout } from '../pages/layout/BaseLayout';
import { ErrorLayout } from '../pages/layout/ErrorLayout';
import { PrivateRoute } from './ProtectedRoutes';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={'dashboard'} />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'report',
        element: <PrivateRoute element={Report} />,
      },
    ],
  },
];

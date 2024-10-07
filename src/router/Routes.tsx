import { RouteObject } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';
import Report from '../pages/dashboard/Report';
import BaseLayout from '../pages/layout/BaseLayout';
import ErrorLayout from '../pages/layout/ErrorLayout';
import { PrivateRoute } from './ProtectedRoutes';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
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

export default routes;

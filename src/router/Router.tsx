import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';
import Report from '../pages/dashboard/Report';
import ErrorPage from '../pages/ErrorPage';
import { OnlyPublicRoute, PrivateRoute } from './ProtectedRoutes';
import Root from './Root';

const router: RouteObject[] = [
  /**
   * Only public routes
   */
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <OnlyPublicRoute elem={Root} />,
  },

  /**
   * Privates routes
   */
  {
    path: '/dashboard/',
    errorElement: <ErrorPage />,
    element: <PrivateRoute elem={Dashboard} />,
    children: [
      {
        path: '/dashboard/report',
        errorElement: <ErrorPage />,
        element: <Report />,
      },
    ],
  },

  /**
   * Fallback
   */
  {
    path: '*',
    errorElement: <ErrorPage />,
    element: <Navigate to={'/'} />,
  },
];

export default createBrowserRouter(router);

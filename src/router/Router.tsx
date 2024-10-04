import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';
import Report from '../pages/dashboard/Report';
import ErrorPage from '../pages/ErrorPage';
import { PrivateRoute } from './ProtectedRoutes';

const router: RouteObject[] = [
  /**
   * Only public routes
   */
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Navigate to={'/dashboard'} />,
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

import type { RouteObject } from 'react-router-dom';

import { AdminRoot } from '../pages/admin/AdminRoot';
import { BlogTablePage } from '../pages/admin/blog/BlogTablePage';
import { CreateBlogPage } from '../pages/admin/blog/CreateBlogPage';
import { EditBlogPage } from '../pages/admin/blog/EditBlogPage';
import { ViewBlogPage } from '../pages/admin/blog/ViewBlogPage';
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
import { FullGarage } from '../pages/dashboard/client/FullGarage';
import { Garages } from '../pages/dashboard/client/Garages';
import { MyGarage } from '../pages/dashboard/MyGarage';
import { AddVehicle } from '../pages/dashboard/pro/AddVehicle';
import { ProDashboard } from '../pages/dashboard/pro/ProDashboard';
import { UpdateVehicle } from '../pages/dashboard/pro/UpdateVehicle';
import { AdminLayout } from '../pages/layout/AdminLayout';
import { BaseLayout } from '../pages/layout/BaseLayout';
import { MainRoot } from '../pages/main/MainRoot';
import { Profile } from '../pages/main/Profile';
import { PublicBlogPage } from '../pages/main/PublicBlogPage';
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
            path: '/blogs/:id',
            element: <PublicBlogPage />,
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
                  {
                    path: 'add-vehicle',
                    element: <AddVehicle />,
                  },
                  {
                    path: 'update-vehicle',
                    element: <UpdateVehicle />,
                  },
                  {
                    path: 'profile',
                    element: <Profile />,
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
                  {
                    path: 'garages',
                    element: <Garages />,
                  },
                  {
                    path: 'garages/:id',
                    element: <FullGarage />,
                  },
                  {
                    path: 'profile',
                    element: <Profile />,
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
          {
            path: 'blogs',
            element: <BlogTablePage />,
          },
          {
            path: 'blogs/:id',
            element: <ViewBlogPage />,
          },
          {
            path: 'blogs/:id/edit',
            element: <EditBlogPage />,
          },
          {
            path: 'blogs/new',
            element: <CreateBlogPage />,
          },
        ],
      },
    ],
  },
];

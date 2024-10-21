import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { queryClient } from './clients/api/queryClient';
import { transactionTsr } from './clients/api/transaction.api';
import { userTsr } from './clients/api/user.api';
import { GlobalLoading } from './components/shared/GlobalLoading';
import { Snackbar } from './components/shared/snackbar/Snackbar';
import { routes } from './router/Routes';

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <userTsr.ReactQueryProvider>
        <transactionTsr.ReactQueryProvider>
          <GlobalLoading />
          <RouterProvider router={router} />
          <Snackbar />
        </transactionTsr.ReactQueryProvider>
      </userTsr.ReactQueryProvider>
    </QueryClientProvider>
  );
};

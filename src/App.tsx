import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { queryClient } from './clients/api/queryClient';
import { Snackbar } from './components/snackbar/Snackbar';
import { routes } from './router/Routes';

const router = createBrowserRouter(routes);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Snackbar />
    </QueryClientProvider>
  );
};

import { MutationCache, QueryClient } from '@tanstack/react-query';

import { useSnackbarStore } from '../../stores/useSnackbar';
import { isApiResponse } from '../../utils/errors';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
      structuralSharing: false,
    },
  },
  mutationCache: new MutationCache({
    onError: (error) => {
      if (isApiResponse(error)) {
        useSnackbarStore.getState().addSnackbar(error.body.message, 'error');
      } else {
        useSnackbarStore.getState().addSnackbar("Une erreur s'est produite", 'error');
      }
    },
  }),
});

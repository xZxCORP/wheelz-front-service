import { MutationCache, QueryClient } from '@tanstack/react-query';
import type { BasicResponse } from '@zcorp/wheelz-contracts';

import { useSnackbarStore } from '../../stores/useSnackbar';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      throwOnError: true,
      staleTime: 5 * 60 * 1000,
      structuralSharing: false,
    },
  },
  mutationCache: new MutationCache({
    onError: (error) => {
      const unknownError: any = error;
      const body: BasicResponse = unknownError.body as BasicResponse;
      useSnackbarStore.getState().addSnackbar(body.message ?? "Une erreur s'est produite", 'error');
    },
  }),
});

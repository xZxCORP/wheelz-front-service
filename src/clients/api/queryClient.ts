import { QueryClient } from '@tanstack/react-query';

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
});

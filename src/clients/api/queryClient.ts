import { QueryClient, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useEffect } from 'react';

import { useGlobalLoadingStore } from '../../stores/useGlobalLoadingStore';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
export function useGlobalLoadingQuery<TData, TError>(
  queryKey: unknown[],
  queryFn: () => Promise<TData>,
  options: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'> = {}
) {
  const setLoading = useGlobalLoadingStore((state) => state.setLoading);

  const query = useQuery<TData, TError>({
    queryKey,
    queryFn,
    ...options,
  });

  useEffect(() => {
    setLoading(query.isLoading);
  }, [query.isLoading, setLoading]);

  return query;
}

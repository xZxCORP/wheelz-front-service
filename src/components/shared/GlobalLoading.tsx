import { useIsFetching } from '@tanstack/react-query';
import { useEffect } from 'react';

import { useGlobalLoadingStore } from '../../stores/useGlobalLoadingStore';

export const GlobalLoading = () => {
  const isFetching = useIsFetching();
  const setLoading = useGlobalLoadingStore((state) => state.setLoading);

  useEffect(() => {
    setLoading(isFetching > 0);
  }, [isFetching, setLoading]);

  return null;
};

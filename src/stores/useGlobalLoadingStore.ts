import { create } from 'zustand';

interface GlobalLoadingState {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  withLoading: <T>(promise: Promise<T>) => Promise<T>;
}

export const useGlobalLoadingStore = create<GlobalLoadingState>((set) => ({
  isLoading: false,
  setLoading: (isLoading: boolean) => set({ isLoading }),
  withLoading: async <T>(promise: Promise<T>): Promise<T> => {
    set({ isLoading: true });
    try {
      const result = await promise;
      return result;
    } finally {
      set({ isLoading: false });
    }
  },
}));

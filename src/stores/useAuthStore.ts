import { create } from 'zustand';
import { persist } from 'zustand/middleware';
const AUTH_TOKEN_KEY = 'auth-token-storage';
interface AuthState {
  token: string | null;
  isLoading: boolean;
  setToken: (token: string) => void;
  clearToken: () => void;
  isAuthenticated: () => boolean;
  setLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: 'default',
      isLoading: false,
      setToken: (token: string) => set({ token }),
      clearToken: () => set({ token: null }),
      isAuthenticated: () => !!get().token,
      setLoading: (isLoading: boolean) => set({ isLoading }),
    }),
    {
      name: AUTH_TOKEN_KEY,
      partialize: (state) => ({ token: state.token }),
    }
  )
);

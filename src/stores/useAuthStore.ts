import type { User, UserWithCompany } from '@zcorp/wheelz-contracts';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const AUTH_TOKEN_KEY = 'auth-token-storage';
interface AuthState {
  token: string | null;
  user: UserWithCompany | null;
  roles: string[];

  setToken: (token: string) => void;
  clearAuth: () => void;
  isAuthenticated: () => boolean;

  setUser: (user: User | null) => void;
  setRoles: (roles: string[]) => void;
  isInitialized: boolean;
  setIsInitialized: (isInitialized: boolean) => void;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      isPro: false,
      isInitialized: false,
      roles: [],

      setToken: (token: string) => {
        set({ token });
      },
      setUser: (user: User | null) => set({ user }),
      clearAuth: () => set({ token: null, user: null, roles: [] }),
      isAuthenticated: () => !!get().token && !!get().user,
      setIsInitialized: (isInitialized: boolean) => set({ isInitialized }),
      setRoles: (roles: string[]) => set({ roles }),
    }),
    {
      name: AUTH_TOKEN_KEY,
      partialize: (state) => ({ token: state.token }),
    }
  )
);

const useGetIsPro = () => {
  const { user } = useAuthStore();
  return !!user && !!user.company;
};
const useGetIsClient = () => {
  const { roles } = useAuthStore();
  return roles.includes('user');
};

export const AuthStore = {
  use: useAuthStore,
  useGetIsPro,
  useGetIsClient,
};

import { create } from 'zustand';

export type IAppState = 'unlogged' | 'loading' | 'logged';

export type SessionState = {
  appState: IAppState;
  refreshToken?: string;
  setAppState: (appState: SessionState['appState']) => void;
  setRefreshToken: (refreshToken: string) => void;
};

const useApp = create<SessionState>((set) => ({
  appState: 'loading',
  refreshToken: undefined,
  setAppState: (appState: SessionState['appState']) => set({ appState }),
  setRefreshToken: (refreshToken: string) => set({ refreshToken }),
}));

export default useApp;

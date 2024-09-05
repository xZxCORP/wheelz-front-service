import { create } from 'zustand';

import { Snack } from '../types/notification';

export type SessionState = {
  snacks: Snack[];
  addSnack: (type: 'error' | 'info' | 'warning' | 'success', message: string) => void;
  removeSnack: (index: number) => void;
};

const useSnackbar = create<SessionState>((set) => ({
  snacks: [],
  addSnack: (type, message) =>
    set((state) => ({
      snacks: [...state.snacks, { type, message, duration: 3000 }],
    })),
  removeSnack: (index) =>
    set((state) => ({
      snacks: state.snacks.filter((_, index_) => index_ !== index),
    })),
}));

export default useSnackbar;

import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

export type SnackbarType = 'success' | 'error' | 'warning' | 'info';

export interface ISnackBar {
  id: string;
  message: string;
  type: SnackbarType;
  duration: number;
}

interface SnackbarState {
  snackbars: ISnackBar[];
  addSnackbar: (message: string, type: SnackbarType, duration?: number) => void;
  removeSnackbar: (id: string) => void;
}

export const useSnackbarStore = create<SnackbarState>((set) => ({
  snackbars: [],
  addSnackbar: (message, type, duration = 5000) => {
    const id = uuidv4();
    set((state) => ({
      snackbars: [...state.snackbars, { id, message, type, duration }],
    }));
    setTimeout(() => {
      set((state) => ({
        snackbars: state.snackbars.filter((snackbar) => snackbar.id !== id),
      }));
    }, duration);
  },
  removeSnackbar: (id) => {
    set((state) => ({
      snackbars: state.snackbars.filter((snackbar) => snackbar.id !== id),
    }));
  },
}));

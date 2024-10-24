import { create } from 'zustand';

export type ModalId = string;
export interface ModalData<T extends Record<string, unknown> = Record<string, unknown>> {
  id: ModalId;
  props?: T;
}

interface ModalState {
  activeModals: ModalData[];
  open: <T extends Record<string, unknown>>(modal: ModalData<T>) => void;
  close: (modalId: ModalId) => void;
  isOpen: (modalId: ModalId) => boolean;
  getModalProps: <T extends Record<string, unknown>>(modalId: ModalId) => T | undefined;
}

export const useModalStore = create<ModalState>((set, get) => ({
  activeModals: [],

  open: <T extends Record<string, unknown>>(modal: ModalData<T>) =>
    set((state) => ({
      activeModals: [...state.activeModals.filter((m) => m.id !== modal.id), modal],
    })),

  close: (modalId: ModalId) =>
    set((state) => ({
      activeModals: state.activeModals.filter((modal) => modal.id !== modalId),
    })),

  isOpen: (modalId: ModalId) => get().activeModals.some((modal) => modal.id === modalId),

  getModalProps: <T extends Record<string, unknown>>(modalId: ModalId): T | undefined => {
    const modal = get().activeModals.find((modal) => modal.id === modalId);
    return modal?.props as T | undefined;
  },
}));

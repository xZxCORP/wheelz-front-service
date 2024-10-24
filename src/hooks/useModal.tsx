import { useCallback } from 'react';

import { type ModalId, useModalStore } from '../stores/useModalStore';

export function useModal<T extends Record<string, unknown>>(modalId: ModalId) {
  const { open, close, isOpen, getModalProps } = useModalStore();

  const openModal = useCallback(
    (props?: T) => {
      open({ id: modalId, props });
    },
    [modalId, open]
  );

  const closeModal = useCallback(() => {
    close(modalId);
  }, [modalId, close]);

  const isModalOpen = isOpen(modalId);
  const modalProps = getModalProps<T>(modalId);

  return {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
    props: modalProps,
  } as const;
}

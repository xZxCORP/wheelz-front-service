import { useCallback } from 'react';

import { useModal } from '../../../../hooks/useModal';
import { MODAL_IDS } from '../../../../types/modalIds';
import { Modal } from '../../../shared/Modal';
import { LoginForm } from '../forms/LoginForm';

export const LoginModal = () => {
  const { isOpen, close } = useModal(MODAL_IDS.LOGIN);
  const { open } = useModal(MODAL_IDS.REGISTER);
  const switchToRegister = useCallback(() => {
    close();
    open();
  }, [close, open]);

  return (
    <Modal isOpen={isOpen} onClose={() => close()} title="Se connecter">
      <LoginForm onSwitchToRegister={switchToRegister} onLogged={() => close()} />
    </Modal>
  );
};

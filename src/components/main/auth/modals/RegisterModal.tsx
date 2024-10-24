import type { User } from '@zcorp/wheelz-contracts';
import { useCallback, useMemo } from 'react';

import { authTsr } from '../../../../clients/api/auth.api';
import { useModal } from '../../../../hooks/useModal';
import { useAuthStore } from '../../../../stores/useAuthStore';
import { useRegisterStore } from '../../../../stores/useRegisterStore';
import { MODAL_IDS } from '../../../../types/modalIds';
import { Modal } from '../../../shared/Modal';
import { AccountTypeForm } from '../forms/AccountTypeForm';
import { BusinessInfosForm } from '../forms/BusinessInfosForm';
import { PersonalInfosForm } from '../forms/PersonalInfosForm';

export const RegisterModal = () => {
  const { isOpen, close } = useModal(MODAL_IDS.REGISTER);
  const { open } = useModal(MODAL_IDS.LOGIN);
  const { setAccountType, accountType } = useRegisterStore();
  const { setToken } = useAuthStore();
  const { mutate } = authTsr.authentication.login.useMutation({
    onSuccess: (response) => {
      setToken(response.body.token);
      close();
    },
  });
  const switchToLogin = useCallback(() => {
    close();
    open();
  }, [close, open]);
  const onAccountTypeSelected = useCallback(
    (type: 'personal' | 'business') => {
      setAccountType(type);
    },
    [setAccountType]
  );
  const calculatedTitle = useMemo(() => {
    if (accountType === 'personal') {
      return "S'inscrire en tant que particulier";
    }
    if (accountType === 'business') {
      return "S'inscrire en tant que professionnel";
    }
    return "S'inscrire";
  }, [accountType]);
  const onAccountCreated = useCallback(
    (user: User, password: string) => {
      mutate({ body: { email: user.email, password } });
    },
    [mutate]
  );
  const calculatedComponent = useMemo(() => {
    if (!accountType) {
      return <AccountTypeForm onAccountTypeSelected={onAccountTypeSelected} />;
    }
    if (accountType === 'personal') {
      return <PersonalInfosForm onSwitchToLogin={switchToLogin} onRegistered={onAccountCreated} />;
    }
    if (accountType === 'business') {
      return <BusinessInfosForm onSwitchToLogin={switchToLogin} />;
    }
  }, [accountType, onAccountCreated, onAccountTypeSelected, switchToLogin]);

  return (
    <Modal isOpen={isOpen} onClose={() => close()} title={calculatedTitle}>
      {calculatedComponent}
    </Modal>
  );
};

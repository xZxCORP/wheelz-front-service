import type { User } from '@zcorp/wheelz-contracts';
import { useCallback, useMemo } from 'react';

import { authTsr } from '../../../../clients/api/auth.api';
import { useModal } from '../../../../hooks/useModal';
import { useAuthStore } from '../../../../stores/useAuthStore';
import { RegisterStore } from '../../../../stores/useRegisterStore';
import { MODAL_IDS } from '../../../../types/modalIds';
import { Modal } from '../../../shared/Modal';
import { AccountTypeForm } from '../forms/AccountTypeForm';
import { BusinessInfosForm } from '../forms/BusinessInfosForm';
import { PersonalInfosForm } from '../forms/PersonalInfosForm';
import { RegisterSharedBottomActions } from '../RegisterSharedBottomActions';
import { RegisterSuccessNotifier } from '../RegisterSuccessNotifier';

export const RegisterModal = () => {
  const { isOpen, close } = useModal(MODAL_IDS.REGISTER);
  const { open } = useModal(MODAL_IDS.LOGIN);
  const { init, step } = RegisterStore.use();
  const calculatedTitle = RegisterStore.useCalculatedTitle();

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
      init(type);
    },
    [init]
  );

  const onAccountCreated = useCallback(
    (user: User, password: string) => {
      mutate({ body: { email: user.email, password } });
    },
    [mutate]
  );
  const calculatedComponent = useMemo(() => {
    switch (step) {
      case 'account-type': {
        return <AccountTypeForm onAccountTypeSelected={onAccountTypeSelected} />;
      }
      case 'personnal-infos': {
        return (
          <PersonalInfosForm onSwitchToLogin={switchToLogin} onRegistered={onAccountCreated} />
        );
      }
      case 'business-infos-company': {
        return <BusinessInfosForm onSwitchToLogin={switchToLogin} />;
      }
      case 'business-infos-owner': {
        return <BusinessInfosForm onSwitchToLogin={switchToLogin} />;
      }
      case 'success': {
        return <RegisterSuccessNotifier />;
      }
    }
  }, [onAccountCreated, onAccountTypeSelected, step, switchToLogin]);

  return (
    <Modal isOpen={isOpen} onClose={() => close()} title={calculatedTitle}>
      {/* {calculatedComponent} */}
      <RegisterSuccessNotifier />
      <RegisterSharedBottomActions onFinish={() => close()} />
    </Modal>
  );
};

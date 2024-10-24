import { useMemo, useState } from 'react';

import { useRegisterStore } from '../../../stores/useRegisterStore';
import { Modal } from '../../shared/Modal';
import { AccountTypeForm } from './forms/AccountTypeForm';
import { BusinessInfosForm } from './forms/BusinessInfosForm';
import { LoginForm } from './forms/LoginForm';
import { PersonalInfosForm } from './forms/PersonalInfosForm';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal = ({ isOpen, onClose }: Props) => {
  const { setAccountType, accountType } = useRegisterStore();
  const [isRegisterMode, setIsRegisterMode] = useState(true);

  const onAccountTypeSelected = (type: 'personal' | 'business') => {
    setAccountType(type);
  };

  const switchToLogin = () => {
    setIsRegisterMode(false);
  };

  const switchToRegister = () => {
    setIsRegisterMode(true);
  };
  const calculatedTitle = useMemo(() => {
    if (!isRegisterMode) {
      return 'Se connecter';
    }
    if (accountType === 'personal') {
      return "S'inscrire en tant que particulier";
    }
    if (accountType === 'business') {
      return "S'inscrire en tant que professionnel";
    }
    return "S'inscrire";
  }, [accountType, isRegisterMode]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={calculatedTitle}>
      {isRegisterMode ? (
        <>
          {!accountType && <AccountTypeForm onAccountTypeSelected={onAccountTypeSelected} />}
          {accountType === 'personal' && <PersonalInfosForm onSwitchToLogin={switchToLogin} />}
          {accountType === 'business' && <BusinessInfosForm onSwitchToLogin={switchToLogin} />}
        </>
      ) : (
        <LoginForm onSwitchToRegister={switchToRegister} />
      )}
    </Modal>
  );
};

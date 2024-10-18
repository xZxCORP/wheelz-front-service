import { useState } from 'react';
import { LoginForm } from './forms/LoginForm';
import { useRegisterStore } from '../../stores/useRegisterStore';
import { Modal } from '../base/Modal';
import { AccountTypeForm } from './forms/AccountTypeForm';
import { BusinessInfosForm } from './forms/BusinessInfosForm';
import { PersonalInfosForm } from './forms/PersonalInfosForm';
type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const RegisterModal = ({ isOpen, onClose }: Props) => {
  const { setAccountType } = useRegisterStore();
  const [isRegisterMode, setIsRegisterMode] = useState(true);
  const [accountType, setAccountTypeState] = useState<'personal' | 'business' | null>(null);

  const onAccountTypeSelected = (type: 'personal' | 'business') => {
    setAccountType(type);
    setAccountTypeState(type);
  };

  const switchToLogin = () => {
    setIsRegisterMode(false);
  };

  const switchToRegister = () => {
    setIsRegisterMode(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={isRegisterMode ? "S'inscrire" : "Se connecter"}>
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


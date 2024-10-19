import { useRegisterStore } from '../../../stores/useRegisterStore';
import { AccountType } from '../../../types/account';
import { Modal } from '../../shared/Modal';
import { AccountTypeForm } from './forms/AccountTypeForm';
import { BusinessInfosForm } from './forms/BusinessInfosForm';
import { PersonalInfosForm } from './forms/PersonalInfosForm';
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export const RegisterModal = ({ isOpen, onClose }: Props) => {
  const { step, setAccountType } = useRegisterStore();
  const onAccountTypeSelected = (accountType: AccountType) => {
    setAccountType(accountType);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="S'inscrire">
      {step === 'account-type' && <AccountTypeForm onAccountTypeSelected={onAccountTypeSelected} />}
      {step === 'business-infos' && <BusinessInfosForm />}
      {step === 'personnal-infos' && <PersonalInfosForm />}
    </Modal>
  );
};

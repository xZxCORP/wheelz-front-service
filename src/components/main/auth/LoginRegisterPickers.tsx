import { useModal } from '../../../hooks/useModal';
import { MODAL_IDS } from '../../../types/modalIds';
import { Button } from '../../shared/button/Button';

export const LoginRegisterPickers = () => {
  const { open: openRegister } = useModal(MODAL_IDS.REGISTER);
  const { open: openLogin } = useModal(MODAL_IDS.LOGIN);
  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      <Button onClick={() => openRegister()}>S&apos;inscrire</Button>
      <Button buttonVariant="ghost" onClick={() => openLogin()}>
        Se connecter
      </Button>
    </div>
  );
};

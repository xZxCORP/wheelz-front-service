import { useModal } from '../../../../hooks/useModal';
import { MODAL_IDS } from '../../../../types/modalIds';
import { Button } from '../../../shared/button/Button';

export const LoginRegisterPickers = () => {
  const { open: openRegister } = useModal(MODAL_IDS.REGISTER);

  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      <Button
        className="bg-primary-200 hover:bg-primary-300 text-black transition-transform hover:scale-105"
        onClick={() => openRegister()}
      >
        S&apos;inscrire
      </Button>
    </div>
  );
};

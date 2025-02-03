import { useCallback, useState } from 'react';

import { useModal } from '../../../hooks/useModal';
import { MODAL_IDS } from '../../../types/modalIds';
import { LoginForm } from './forms/LoginForm';

export const SwitchLogins: React.FC = () => {
  const [isGarage, setIsGarage] = useState(true);
  const { close } = useModal(MODAL_IDS.LOGIN);
  const { open } = useModal(MODAL_IDS.REGISTER);

  const switchToRegister = useCallback(() => {
    close();
    open();
  }, [close, open]);

  const toggleSwitch = () => {
    setIsGarage((prev) => !prev);
  };

  return (
    <div className={`flex w-full flex-col items-center justify-center space-y-5`}>
      <div className="flex">
        <button
          className={` flex h-8 w-24 items-center justify-center rounded-l-lg border px-2 transition-all hover:scale-105 ${isGarage ? 'bg-primary-200' : 'bg-primary-600 pointer-events-none z-50 scale-110'}`}
          onClick={toggleSwitch}
        >
          <span className={isGarage ? 'text-gray-500' : 'font-semibold '}>Particulier</span>
        </button>
        <button
          className={` flex h-8 w-24 items-center justify-center rounded-r-lg border-y border-r px-2 transition-all hover:scale-105 ${isGarage ? 'bg-primary-600 pointer-events-none z-50 scale-110' : 'bg-primary-200'}`}
          onClick={toggleSwitch}
        >
          <span className={isGarage ? 'font-semibold ' : 'text-gray-500 '}>Garage</span>
        </button>
      </div>

      {isGarage ? (
        <LoginForm onSwitchToRegister={switchToRegister} onLogged={close} />
      ) : (
        <LoginForm onSwitchToRegister={switchToRegister} onLogged={close} />
      )}
    </div>
  );
};

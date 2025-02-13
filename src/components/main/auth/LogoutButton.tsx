import { FaRightFromBracket } from 'react-icons/fa6';

import { AuthStore } from '../../../stores/useAuthStore';
import { Button } from '../../shared/button/Button';

interface Props {
  variant?: 'text' | 'icon';
}
export const LogoutButton = ({ variant = 'icon' }: Props) => {
  const { clearAuth } = AuthStore.use();
  return (
    <Button
      buttonStyle={{ size: 'lg', color: 'secondary', rounded: 'lg' }}
      onClick={clearAuth}
      className="bg-transparent text-black hover:bg-primary-300"
    >
      {variant === 'text' && 'Se déconnecter'}
      {variant === 'icon' && <FaRightFromBracket />}
    </Button>
  );
};

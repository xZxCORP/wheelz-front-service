import { FaRightFromBracket } from 'react-icons/fa6';

import { useAuthStore } from '../../../stores/useAuthStore';
import { Button } from '../../shared/button/Button';

interface Props {
  variant?: 'text' | 'icon';
}
export const LogoutButton = ({ variant = 'icon' }: Props) => {
  const { clearAuth } = useAuthStore();
  return (
    <Button buttonStyle={{ size: 'lg', color: 'secondary', rounded: 'lg' }} onClick={clearAuth}>
      {variant === 'text' && 'Se déconnecter'}
      {variant === 'icon' && <FaRightFromBracket />}
    </Button>
  );
};

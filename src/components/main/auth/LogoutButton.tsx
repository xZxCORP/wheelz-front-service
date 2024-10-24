import { FaRightFromBracket } from 'react-icons/fa6';

import { Button } from '../../shared/button/Button';

interface Props {
  variant?: 'text' | 'icon';
}
export const LogoutButton = ({ variant = 'icon' }: Props) => {
  return (
    <Button buttonStyle={{ size: 'lg', color: 'secondary', rounded: 'lg' }}>
      {variant === 'text' && 'Se déconnecter'}
      {variant === 'icon' && <FaRightFromBracket />}
    </Button>
  );
};

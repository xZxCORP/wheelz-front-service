import { CiMenuBurger } from 'react-icons/ci';

import { Button } from './button/Button';
interface Props {
  onClick: () => void;
}
export const BurgerMenuButton = ({ onClick }: Props) => {
  return (
    <Button
      buttonStyle={{ rounded: 'lg', color: 'primary' }}
      buttonVariant="ghost"
      onClick={onClick}
      className="text-white hover:bg-white/10"
    >
      <CiMenuBurger className="size-6" />
    </Button>
  );
};

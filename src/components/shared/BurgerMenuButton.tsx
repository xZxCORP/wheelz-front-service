import { CiMenuBurger } from 'react-icons/ci';

import { Button } from './button/Button';
interface Props {
  onClick: () => void;
}
export const BurgerMenuButton = ({ onClick }: Props) => {
  return (
    <Button buttonStyle={{ rounded: 'lg', color: 'secondary' }} onClick={onClick}>
      <CiMenuBurger className="size-6" />
    </Button>
  );
};

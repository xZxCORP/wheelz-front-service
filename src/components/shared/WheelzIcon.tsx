import { Link } from 'react-router-dom';

import wheelzLogo from '/wheelz_logo.svg';
interface Props {
  link?: string;
}
export const WheelzIcon = ({ link = '/' }: Props) => {
  return (
    <Link
      to={link}
      className="text-secondary-500 hover:text-secondary-700 flex items-center justify-center text-2xl font-bold transition-colors"
    >
      <img src={wheelzLogo} alt="Wheelz Logo" className="mr-2 w-14" />
      <h1 className="hidden md:block">WheelZ</h1>
    </Link>
  );
};

import { Link } from 'react-router-dom';
import wheelzLogo from '/public/wheelz_logo.svg';
interface Props {
  link?: string;
}
export const WheelzIcon = ({ link = '/' }: Props) => {
  return (
    <Link
      to={link}
      className="flex items-center justify-center text-2xl font-bold text-secondary-600 transition-colors hover:text-secondary-700"
    >
      <img src={wheelzLogo} alt="Wheelz Logo" className="w-14 mr-2" />
      <span className="hidden md:block">WheelZ</span>
    </Link>
  );
};

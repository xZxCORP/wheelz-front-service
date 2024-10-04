import clsx from 'clsx';
import { Link } from 'react-router-dom';

interface Props {
  to: string;
  children: React.ReactNode;
}

export const MenuItem = ({ to, children }: Props) => {
  return (
    <li role="none">
      <Link
        to={to}
        className={clsx(
          'block px-4 py-2 text-sm md:text-base',
          'text-secondary-700 hover:bg-primary-50 hover:text-primary-700',
          'transition-colors duration-150'
        )}
        role="menuitem"
      >
        {children}
      </Link>
    </li>
  );
};

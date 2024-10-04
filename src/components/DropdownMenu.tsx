import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { LinkObject } from '../types/linkObject';

interface Props {
  title: string;
  links?: LinkObject[];
}

const DropdownMenu = ({ title, links }: Props) => {
  return (
    <div className="group relative inline-block">
      <button
        type="button"
        className={clsx(
          'px-3 py-2 text-lg font-medium',
          'rounded-md transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary-500',
          'text-secondary-700 hover:bg-secondary-100',
          'group-hover:bg-primary-100 group-hover:text-primary-700'
        )}
      >
        {title}
      </button>
      <div
        className={clsx(
          'absolute left-0 z-10 mt-2 w-48',
          'rounded-md bg-secondary-50 shadow-lg',
          'border border-secondary-200',
          'invisible opacity-0 group-hover:visible group-hover:opacity-100',
          'transition-all duration-300 ease-in-out'
        )}
      >
        <ul className="py-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          {links &&
            links.map((link) => (
              <li key={link.title} role="menuitem">
                <Link
                  to={link.url}
                  className={clsx(
                    'block px-4 py-2 text-sm md:text-base',
                    'text-secondary-700 hover:bg-primary-50 hover:text-primary-700',
                    'transition-colors duration-150'
                  )}
                >
                  {link.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;

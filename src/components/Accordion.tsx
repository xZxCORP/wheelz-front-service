import clsx from 'clsx';
import { useState } from 'react';
import { CgChevronDown, CgChevronUp } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import { LinkObject } from '../types/linkObject';

interface Props {
  title: string;
  links?: LinkObject[];
}

const Accordion = ({ title, links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-secondary-200">
      <button
        className={clsx(
          'flex w-full items-center justify-between px-4 py-3',
          'text-left text-base font-medium',
          'focus:outline-none focus:ring-2 focus:ring-primary-500',
          isOpen ? 'bg-primary-50 text-primary-700' : 'bg-secondary-50 text-secondary-700'
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <CgChevronUp size={20} /> : <CgChevronDown size={20} />}
      </button>
      <div
        className={clsx(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <ul className="bg-secondary-50 px-4 py-2">
          {links &&
            links.map((link) => (
              <li key={link.title}>
                <Link
                  to={link.url}
                  className="block py-2 text-sm text-secondary-700 hover:text-primary-700"
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

export default Accordion;

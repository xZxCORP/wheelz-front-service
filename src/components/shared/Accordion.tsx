import clsx from 'clsx';
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import type { RouterLink } from '../../types/navigation';
import { Button } from './button/Button';

interface Props {
  title: string;
  links?: RouterLink[];
  onLinkClicked: () => void;
}

export const Accordion = ({ title, links, onLinkClicked }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-secondary-200">
      <Button
        buttonStyle={{ color: isOpen ? 'primary' : 'secondary', size: 'lg' }}
        className="w-full justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
      </Button>
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
                  onClick={onLinkClicked}
                  to={link.url ?? '#'}
                  className="block py-2 text-sm hover:text-primary-700"
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

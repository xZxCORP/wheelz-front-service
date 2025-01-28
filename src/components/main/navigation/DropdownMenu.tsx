import clsx from 'clsx';
import { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

import type { RouterLink } from '../../../types/navigation';
import { Button } from '../../shared/button/Button';

interface Props {
  title: string;
  links?: RouterLink[];
}

export const DropdownMenu = ({ title, links }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="relative inline-block"
      ref={dropdownRef}
      onMouseEnter={toggleDropDown}
      onMouseLeave={toggleDropDown}
    >
      <Button buttonStyle={{ color: 'secondary' }} aria-haspopup="true" aria-expanded={isOpen}>
        {title}
        <FaChevronDown />
      </Button>
      {isOpen && (
        <div
          className={clsx(
            'absolute left-0 z-10 w-48',
            'bg-secondary-50 rounded-md shadow-lg',
            'border-secondary-200 border',
            'transition-all duration-300 ease-in-out'
          )}
        >
          <ul
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          ></ul>
        </div>
      )}
    </div>
  );
};

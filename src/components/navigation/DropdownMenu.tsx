import clsx from 'clsx';
import { useRef, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

import { LinkObject } from '../../types/linkObject';
import { Button } from '../base/Button';
import { MenuItem } from './MenuItem';

interface Props {
  title: string;
  links?: LinkObject[];
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
      <Button
        variant="secondary"
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="flex items-center"
      >
        {title}
        <FaChevronDown className="ml-1 size-4" />
      </Button>
      {isOpen && (
        <div
          className={clsx(
            'absolute left-0 z-10 w-48',
            'rounded-md bg-secondary-50 shadow-lg',
            'border border-secondary-200',
            'transition-all duration-300 ease-in-out'
          )}
        >
          <ul
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {links?.map((link) => (
              <MenuItem key={link.title} to={link.url}>
                {link.title}
              </MenuItem>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

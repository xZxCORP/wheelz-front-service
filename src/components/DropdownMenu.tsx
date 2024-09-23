import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { LinkObject } from '../types/linkObject';

const DropdownMenu = ({ title, links }: { title: string; links?: LinkObject[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownReference = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility when button is entered/left
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownReference}>
      <button
        onMouseEnter={toggleDropDown}
        onMouseLeave={toggleDropDown}
        type="button"
        className="w-full items-center"
      >
        {title}
      </button>
      <div
        className={`absolute z-10 mt-2 rounded-lg border bg-white shadow-lg transition-all duration-300${isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'}`}
      >
        <ul className="px-2 py-4 text-sm" aria-labelledby="dropdownDefaultButton">
          {links &&
            links.length > 0 &&
            links.map((link) => (
              <Link
                key={link.title}
                to={link.url}
                className="block rounded-xl px-4 py-2 text-lg hover:bg-primary-200"
              >
                {link.title}
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;

import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { LinkObject } from '../types/linkObject';


const DropdownMenu = ({
  title,
  links
}: {
  title: string;
  links?: LinkObject[];
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility when button is entered/left
  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onMouseEnter={toggleDropDown}
        onMouseLeave={toggleDropDown}
        type="button"
        className="align-center w-full"
      >
        {title}
      </button>
      <div className={`absolute mt-2 bg-white z-10 border rounded-lg shadow-lg transform transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
        <ul className="py-4 px-2 text-sm" aria-labelledby="dropdownDefaultButton">
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
    </div >
  );
};

export default DropdownMenu;

import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';


const DropdownMenu = ({
  title,
  links
}: {
  title: string;
  links?: string[][];
}) => {

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility when button is clicked
  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  // Add event listener to detect clicks outside the dropdown
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    // Cleanup event listener when the component unmounts or dropdown closes
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleButtonClick}
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
                key={link[0]}
                to={link[1]}
                className="block rounded-xl px-4 py-2 text-lg hover:bg-primary-200"
              >
                {link[0]}
              </Link>
            ))}
        </ul>
      </div>
    </div >
  );
};

export default DropdownMenu;

import { ReactNode, useRef, useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';
import { RxCross1 } from 'react-icons/rx';

import { useClickOutside } from '../hooks/useClickOutside';

interface Properties {
  children?: ReactNode;
  classes?: string;
}

const BurgerMenu = ({ children, classes }: Properties) => {
  const [isOpen, setIsOpen] = useState(false);
  const burgerReference = useRef<HTMLDivElement>(null); //ok

  const handleClickOutside = () => {
    // Your custom logic here
    console.log('clicked outside');
    setIsOpen(false);
  };

  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside');
    setIsOpen(true);
  };

  useClickOutside(burgerReference, handleClickOutside);

  return (
    <>
      <div
        className={`absolute right-0 top-0 h-screen w-screen bg-slate-600/50 md:hidden ${isOpen ? 'block' : 'pointer-events-none hidden'}`}
      ></div>
      <div
        className={`flex items-center justify-center md:hidden ${classes}`}
        ref={burgerReference}
      >
        <button onClick={handleClickInside} type="button" className="text-3xl">
          <CiMenuBurger />
        </button>

        <div
          className={`absolute right-0 top-0 flex h-screen items-center justify-center rounded-s-lg border bg-white shadow-lg transition-all duration-300${isOpen ? 'w-1/2' : 'pointer-events-none w-0'}`}
        >
          <button
            onClick={handleClickOutside}
            type="button"
            className={`absolute left-4 top-4 text-3xl ${isOpen ? 'block' : 'hidden'}`}
          >
            <RxCross1 />
          </button>
          <div
            className={`flex flex-col justify-around border-2 ${isOpen ? 'w-1/2' : 'pointer-events-none hidden'}`}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;

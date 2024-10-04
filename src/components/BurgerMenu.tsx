import { ReactNode, useRef, useState } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

interface Props {
    children?: ReactNode;
    classes?: string;
}

const BurgerMenu = ({
    children,
    classes
}: Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const burgerRef = useRef<HTMLDivElement>(null); //ok

    const handleClickOutside = () => {
        // Your custom logic here
        console.log('clicked outside')
        setIsOpen(false);
    }

    const handleClickInside = () => {
        // Your custom logic here
        console.log('clicked inside')
        setIsOpen(true);
    }

    useClickOutside(burgerRef, handleClickOutside);


    return (
        <>
            <div className={`md:hidden absolute right-0 top-0 w-screen h-screen bg-slate-600/50 ${isOpen ? 'block' : 'hidden pointer-events-none'}`}>
            </div>
            <div className={`md:hidden flex justify-center items-center ${classes}`} ref={burgerRef}>
                <button
                    onClick={handleClickInside}
                    type="button"
                    className="text-3xl"
                >
                    <CiMenuBurger />
                </button>

                <div className={`absolute right-0 top-0 flex justify-center items-center h-screen bg-white border rounded-s-lg shadow-lg transform transition-all duration-300 ${isOpen ? 'w-full' : 'w-0 pointer-events-none'}`}>
                    <button
                        onClick={handleClickOutside}
                        type="button"
                        className={`text-3xl absolute top-4 left-4 ${isOpen ? 'block' : 'hidden'}`}
                    >
                        <RxCross1 />
                    </button>
                    <div className={`flex flex-col justify-around [&_button]:border-y ${isOpen ? 'w-3/4 h-full' : 'hidden pointer-events-none'}`}>{children}</div>
                </div>
            </div >
        </>
    );
}

export default BurgerMenu;
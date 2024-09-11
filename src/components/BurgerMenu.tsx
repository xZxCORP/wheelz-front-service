import { useEffect, useRef, useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";

const BurgerMenu = ({
    content,
    classes
}: {
    content?: any; // REVOIR TYPE
    classes?: string;
}) => {

    const [isOpen, setIsOpen] = useState(false);
    const burgerRef = useRef<HTMLDivElement>(null);

    // Toggles burger menu visibility when button is clicked
    const handleButtonClick = () => {
        setIsOpen(!isOpen);
    };

    // Closes dropdown if clicked outside
    const handleClickOutside = (event: MouseEvent) => {
        if (burgerRef.current && !burgerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    // Adds event listener to detect clicks outside the burger menu
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        // Cleanup event listener when the component unmounts or burger menu closes
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);


    return (
        <>
            <div className={`md:hidden absolute right-0 top-0 w-screen h-screen bg-slate-600/50 ${isOpen ? 'block' : 'hidden pointer-events-none'}`}>
            </div>
            <div className={`md:hidden flex justify-center items-center ${classes}`} ref={burgerRef}>
                <button
                    onClick={handleButtonClick}
                    type="button"
                    className="text-3xl"
                >
                    <CiMenuBurger />
                </button>

                <div className={`absolute right-0 top-0 flex justify-center items-center h-screen bg-white border rounded-s-lg shadow-lg transform transition-all duration-300 ${isOpen ? 'w-1/2' : 'w-0 pointer-events-none'}`}>
                    <div className={`flex flex-col justify-around border-2 ${isOpen ? 'w-1/2' : 'hidden pointer-events-none'}`}>{content}</div>
                </div>
            </div >
        </>
    );
}

export default BurgerMenu;
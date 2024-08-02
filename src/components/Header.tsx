import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div id='header' className='border-2 w-full flex justify-between align-items'>
            <h1 className="text-3xl">WheelZ</h1>
            <nav className='border-2 flex justify-around w-2/3'>
                <button onClick={toggleDropdown} id='dropdownDefaultButton' data-dropdown-toggle='dropdown-1' type='button'>Rapports</button>
                <div id='dropdown-1' className='hidden'>
                    <ul className='py-2 text-sm text-gray-700 dark:text-gray-200' aria-labelledby='dropdownDefaultButton'>
                        <p className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>AAA</p>
                        <p>BBB</p>
                        <p>CCC</p>
                    </ul>
                </div>

                <div>Ressources</div>
                <div>Professionnels</div>
                <div>Entreprise</div>
            </nav >
            <p>[TEMP] Profile</p>
            {/* <Link to='..' relative='path' className=''>Profile</Link> */}
        </div >
    );
}

/**
 *  Opens/closes dropdown menu based on clicked button
 * @param {Event} e - Triggered event
 */
const toggleDropdown = (e: Event) => {
    const button: EventTarget | null = e?.target;
    if (button instanceof HTMLElement) {
        const dropdownId: string | undefined = button?.dataset['dropdownToggle'];
        const dropwdownMenu: HTMLElement | null = document.querySelector('#' + dropdownId);
        dropwdownMenu?.classList.toggle('hidden');
    }
}
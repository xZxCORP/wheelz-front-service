import { Link } from "react-router-dom";

/**
 *  Opens/closes dropdown menu based on clicked button
 * @param {Event} e - Triggered event
 */
const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    const button: EventTarget | null = event?.target;
    if (button instanceof HTMLElement) {
        const dropdownId: string | undefined = button?.dataset['dropdownToggle'];
        const dropwdownMenu: HTMLElement | null = document.querySelector('#' + dropdownId);
        dropwdownMenu?.classList.toggle('hidden');
    }
};

const DropdownMenu = ({
    title,
    links,
    dropdownId
}: {
    title: string;
    links?: string[][];
    dropdownId: string;
}) => {
    return (
        <div className="relative" >
            <button
                onClick={toggleDropdown}
                id="dropdownDefaultButton"
                data-dropdown-toggle={dropdownId}
                type="button"
            >
                {title}
            </button>
            <div id={dropdownId} className="hidden absolute left-0 rounded-md bg-secondary-100 p-2">
                <ul
                    className="py-2 text-sm"
                    aria-labelledby="dropdownDefaultButton"
                >
                    {links && links.length && (
                        links.map(link => (
                            <Link to={link[1]} className="block px-4 py-2 hover:bg-primary-700 hover:text-white rounded-3xl">{link[0]}</Link>
                        ))
                    )}
                </ul>
            </div>
        </div >
    );
};

export default DropdownMenu;
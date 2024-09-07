import { Link } from 'react-router-dom';

/**
 *  Opens/closes dropdown menu based on clicked button
 * @param {Event} e - Triggered event
 */
const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
  const button: EventTarget | null = event?.target;
  if (button instanceof HTMLElement) {
    const dropdownId: string | undefined = button?.dataset['dropdownToggle'];
    const dropdownMenu: HTMLElement | null = document.querySelector('#' + dropdownId);

    // Show/hide dropdown menu with transition effect
    if (dropdownMenu?.classList.contains('hidden')) {
      // Show dropdown
      dropdownMenu.classList.remove('hidden');
      setTimeout(() => {
        dropdownMenu.classList.remove('opacity-0', 'scale-95');
        dropdownMenu.classList.add('opacity-100', 'scale-100');
      }, 10);
    } else {
      // Hide dropdown
      dropdownMenu?.classList.remove('opacity-100', 'scale-100');
      dropdownMenu?.classList.add('opacity-0', 'scale-95');
      setTimeout(() => {
        dropdownMenu?.classList.add('hidden');
      }, 300);
    }
  }
};

const DropdownMenu = ({
  title,
  links,
  dropdownId,
}: {
  title: string;
  links?: string[][];
  dropdownId: string;
}) => {
  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        id="dropdownDefaultButton"
        data-dropdown-toggle={dropdownId}
        type="button"
      >
        {title}
      </button>
      <div id={dropdownId} className="absolute left-0 top-12 hidden rounded-md bg-white p-2 shadow-lg transition-all duration-300 opacity-0 transform scale-95">
        <ul className="py-2 text-sm" aria-labelledby="dropdownDefaultButton">
          {links &&
            links.length > 0 &&
            links.map((link) => (
              <Link
                key={link[0]}
                to={link[1]}
                className="block rounded-3xl px-4 py-2 text-lg hover:bg-primary-700 hover:text-white"
              >
                {link[0]}
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;

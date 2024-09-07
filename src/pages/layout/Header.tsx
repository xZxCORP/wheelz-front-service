import DropdownMenu from '../../components/DropdownMenu';

const Header = () => {
  return (
    <div id="header" className="flex w-full justify-between items-center bg-secondary-200 p-4 text-lg">
      <h1 className="text-3xl text-primary">WheelZ</h1>
      <nav className="flex w-2/3 justify-around items-center">
        <DropdownMenu
          title="Rapports"
          links={[
            ['Lien 1', '#'],
            ['Lien 2', '#'],
            ['c', '#'],
            ['Lien 3 (looooooooooooong)', '#'],
          ]}
          dropdownId="dropdown-1"
        />
        <DropdownMenu
          title="Ressources"
          links={[
            ['Lien 1', '#'],
            ['Lien 2', '#'],
            ['c', '#'],
            ['Lien 3 (looooooooooooong)', '#'],
          ]}
          dropdownId="dropdown-2"
        />
        <DropdownMenu
          title="Professionnels"
          links={[
            ['Lien 1', '#'],
            ['Lien 2', '#'],
            ['c', '#'],
            ['Lien 3 (looooooooooooong)', '#'],
          ]}
          dropdownId="dropdown-3"
        />
        <DropdownMenu
          title="Entreprise"
          links={[
            ['Lien 1', '#'],
            ['Lien 2', '#'],
            ['c', '#'],
            ['Lien 3 (looooooooooooong)', '#'],
          ]}
          dropdownId="dropdown-4"
        />
      </nav>
      <span>[TEMP] Profile</span>
      {/* <Link to='..' relative='path' className=''>Profile</Link> */}
    </div>
  );
};

export default Header;

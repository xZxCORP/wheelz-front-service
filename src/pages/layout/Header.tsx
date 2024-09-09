import DropdownMenu from '../../components/DropdownMenu';

const Header = () => {
  return (
    <div id="header" className="flex w-full justify-between items-center bg-secondary-100 p-4 text-lg">
      <h1 className="text-3xl text-primary-500">WheelZ</h1>
      <nav className="flex w-2/3 justify-around items-center">
        <DropdownMenu
          title="Rapports"
          links={[
            ['Lien 1', '#'],
            ['Lien 2', '#'],
            ['a', '#'],
            ['Lien 3 (looooooooooooong)', '#'],
          ]}
        />
        <DropdownMenu
          title="Ressources"
          links={[
            ['Lien 1', '#'],
            ['Lien 2', '#'],
            ['b', '#'],
            ['Lien 3 (looooooooooooong)', '#'],
          ]}
        />
        <DropdownMenu
          title="Professionnels"
          links={[
            ['Lien 1', '#'],
            ['Lien 2', '#'],
            ['c', '#'],
          ]}
        />
        <DropdownMenu
          title="Entreprise"
          links={[
            ['Lien 1', '#'],
            ['Lien 2', '#'],
            ['d', '#'],
            ['Lien 3 (looooooooooooong)', '#'],
          ]}
        />
      </nav>
      <span>[TEMP] Profile</span>
      {/* <Link to='..' relative='path' className=''>Profile</Link> */}
    </div>
  );
};

export default Header;

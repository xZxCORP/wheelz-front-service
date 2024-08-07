import DropdownMenu from "../../components/DropdownMenu";

const Header = () => {
  return (
    <div id="header" className="flex w-full justify-between bg-secondary-100 p-4">
      <h1 className="text-3xl text-primary">WheelZ</h1>
      <nav className="flex w-2/3 justify-around">
        <DropdownMenu title='Rapports' links={[['Lien 1', '#'], ['Lien 2', '#'], ['c', '#'], ['Lien 3 (looooooooooooong)', '#']]} dropdownId='dropdown-1' />
        <DropdownMenu title='Ressources' links={[['Lien 1', '#'], ['Lien 2', '#'], ['c', '#'], ['Lien 3 (looooooooooooong)', '#']]} dropdownId='dropdown-2' />
        <DropdownMenu title='Professionnels' links={[['Lien 1', '#'], ['Lien 2', '#'], ['c', '#'], ['Lien 3 (looooooooooooong)', '#']]} dropdownId='dropdown-3' />
        <DropdownMenu title='Entreprise' links={[['Lien 1', '#'], ['Lien 2', '#'], ['c', '#'], ['Lien 3 (looooooooooooong)', '#']]} dropdownId='dropdown-4' />
      </nav>
      <p>[TEMP] Profile</p>
      {/* <Link to='..' relative='path' className=''>Profile</Link> */}
    </div>
  );
};

export default Header;

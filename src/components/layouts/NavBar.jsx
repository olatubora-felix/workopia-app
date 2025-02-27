import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    return setMenu((currentMenu) => !currentMenu);
  };

  return (
    <header className="bg-blue-900 text-white p-4 relative">
      <nav className="container mx-auto flex justify-between items-center">
        <Logo />
        <button className="lg:hidden block" onClick={toggleMenu}>
          <IoMdMenu fontSize={24} />
        </button>
        <Menu menuStyle="items-center gap-4 lg:flex hidden" />
      </nav>

      {menu && (
        <nav className="fixed inset-0 z-40 h-[300px]  bg-blue-900 w-full p-5 space-y-6">
          <div className="flex justify-between items-center">
            <Logo toggleMenu={toggleMenu} />
            <button onClick={toggleMenu}>
              <IoClose fontSize={24} />
            </button>
          </div>
          <Menu menuStyle="space-y-5 py-6" toggleMenu={toggleMenu} />
        </nav>
      )}
    </header>
  );
};

export default NavBar;

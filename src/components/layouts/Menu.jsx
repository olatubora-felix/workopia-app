/* eslint-disable react/prop-types */

import { NavLink } from "react-router";
import { routes } from "../../constant/navRoute";
import { useAuth } from "../../hooks/useAuth";
import AuthMenu from "./AuthMenu";

const Menu = ({ menuStyle, toggleMenu }) => {
  const active = (isActive) => {
    return isActive ? "text-yellow-500" : "text-white";
  };

  const { user } = useAuth();

  return user ? (
    <AuthMenu menuStyle={menuStyle} toggleMenu={toggleMenu} />
  ) : (
    <menu className={menuStyle}>
      {routes.map(({ name, path, id }) => (
        <li key={id}>
          <NavLink
            to={path}
            className={({ isActive }) => active(isActive)}
            onClick={toggleMenu}
          >
            {name}
          </NavLink>
        </li>
      ))}
    </menu>
  );
};

export default Menu;

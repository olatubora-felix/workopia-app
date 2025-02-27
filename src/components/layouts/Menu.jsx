/* eslint-disable react/prop-types */
import { FaEdit } from "react-icons/fa";
import { routes } from "../../constant/navRoute";
import { Link, NavLink } from "react-router";

const Menu = ({ menuStyle, toggleMenu }) => {
  const active = (isActive) => {
    return isActive ? "text-yellow-500" : "text-white";
  };
  return (
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
      <Link
        to="jobs/create"
        className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded hover:shadow-md transition duration-300 flex items-center gap-1 justify-center"
      >
        <FaEdit /> Post a Job
      </Link>
    </menu>
  );
};

export default Menu;

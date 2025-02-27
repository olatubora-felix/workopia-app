/* eslint-disable react/prop-types */
import { NavLink } from "react-router";

const Logo = ({ toggleMenu }) => {
  return (
    <h1 className="lg:text-3xl text-2xl font-semibold">
      <NavLink to="/" onClick={toggleMenu}>
        Workopia
      </NavLink>
    </h1>
  );
};

export default Logo;

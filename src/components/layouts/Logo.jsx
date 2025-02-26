import { NavLink } from "react-router";

const Logo = () => {
  return (
    <h1 className="lg:text-3xl text-2xl font-semibold">
      <NavLink to="/">Workopia</NavLink>
    </h1>
  );
};

export default Logo;

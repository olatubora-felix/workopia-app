import { NavLink } from "react-router";
import { routes } from "../../constant/navRoute";
import { FaEdit } from "react-icons/fa";
const NavBar = () => {
  const active = (isActive) => {
    return isActive ? "text-yellow-500" : "text-white";
  };
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          <NavLink to="/">Workopia</NavLink>
        </h1>
        <nav className="flex items-center gap-4">
          {routes.map(({ name, path, id }) => (
            <NavLink
              to={path}
              className={({ isActive }) => active(isActive)}
              key={id}
            >
              {name}
            </NavLink>
          ))}

          <a
            href="post-job.html"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded hover:shadow-md transition duration-300 flex items-center gap-1"
          >
            <FaEdit /> Post a Job
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

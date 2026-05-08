import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-end items-center px-6 py-4  bg-slate-800 text-white">
      <div className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/owner">Owner</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;

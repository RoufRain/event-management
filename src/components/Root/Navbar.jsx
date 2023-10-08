import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  //context theke acces korte hobe
  const { user, logOut } = useContext(AuthContext);

  //for handling signOut
  const handleLogOut = () => {
    logOut().then().catch();
  };

  //dynamic navlink

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home </NavLink>
      </li>
      <li>
        <NavLink to="/Services">Services</NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink to="/About">About </NavLink>
      </li>
    </>
  );

  return (
    <div className=" flex-col-reverse sm:flex-row sm:justify-center navbar bg-base-100 border">
      <div className="navbar-start flex-col sm:flex-row">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-48"
          >
            {navLinks}
          </ul>
        </div>
        <h3 className="btn btn-ghost normal-case text-xl">
          great intertainment!
        </h3>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="lg:navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src="" />
          </div>
        </label>

        {/* if user logged in then logout button show */}
        {user ? (
          <button onClick={handleLogOut} className="btn">
            LogOut
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

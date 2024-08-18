import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <Link to="/" className="md:hidden">
          <div>Gadget Galaxy</div>
        </Link>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `block rounded-md p-2 ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-400 hover:text-white"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `block rounded-md p-2 ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-400 hover:text-white"
            }`
          }
          to="/aboutUs"
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `block rounded-md p-2 ${
              isActive
                ? "bg-blue-600 text-white"
                : "hover:bg-blue-400 hover:text-white"
            }`
          }
          to="/contactUs"
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  const signOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
      })
      .catch(() => {});
  };

  return (
    <div className="z-20 container sticky top-0 mx-auto mb-5">
      <div className="navbar top-0 mx-auto border-b border-blue-500 bg-blue-50 shadow-xl shadow-blue-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="z-20 menu dropdown-content menu-sm mt-3 w-52 rounded-box bg-blue-50 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link
            to="/"
            className="btn btn-ghost items-center p-0 text-xl md:flex"
          >
            <img
              className="size-10"
              src="https://i.ibb.co/ZJ5xvhJ/Picsart-24-08-16-08-51-52-543.png"
              alt=""
            />
          </Link>
          <Link
            to="/"
            className="btn btn-ghost hidden items-center p-0 pl-2 text-2xl md:flex"
          >
            Gadget Galaxy
          </Link>
        </div>
        <div className="navbar-center hidden lg:ml-20 lg:flex">
          <ul className="menu menu-horizontal rounded-2xl bg-blue-100 px-1 shadow-md shadow-blue-100">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-4">
          {/* User Photo */}
          {user ? (
            <>
              <div
                className="tooltip tooltip-bottom"
                data-tip={
                  user.displayName ? user.displayName : "user name not found"
                }
              >
                <div className="mr-2 size-10 rounded-full border-2 border-blue-500">
                  <img
                    className="h-full w-full rounded-full object-cover"
                    alt=""
                    src={user.photoURL}
                  />
                </div>
              </div>
              <Link
                onClick={signOut}
                to="/"
                className="hover:bg-blue-500hover:text-white btn border-2 border-blue-500 bg-transparent text-lg text-blue-500 hover:border-blue-500"
              >
                Logout
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-outline border-2 border-blue-500 bg-transparent text-xl text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

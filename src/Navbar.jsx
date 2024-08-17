import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { MdFilterAlt } from "react-icons/md";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [brands, setBrands] = useState([]);

  const [brand, setBrand] = useState([]);
  const [categories, setCategories] = useState([]);



  const signOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
      })
      .catch(() => {});
  };
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

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearch(search);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/filter`)
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/filter2`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="z-100 container sticky top-0 mx-auto mb-10">
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
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-blue-50 p-2 shadow"
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
      <div className="container mx-auto mt-6 flex items-center justify-center gap-1 bg-blue-100 shadow-xl shadow-blue-100 md:gap-2">
        <form
          onSubmit={handleSearch}
          className="my-3 flex items-center justify-center"
        >
          <label className="input input-bordered flex w-full items-center gap-2">
            <input
              type="search"
              name="search"
              className="w-full grow"
              placeholder="Search product name"
            />
            <button type="submit" className="rounded-full bg-sky-200 px-3 py-2">
              Search
            </button>
          </label>
        </form>
        <div className="z-100 drawer min-w-16 max-w-min lg:drawer-end">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="btn drawer-button whitespace-nowrap rounded bg-blue-500 px-1 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 md:px-5"
            >
              <span className="flex items-center justify-center gap-1">
                Filter <MdFilterAlt />
              </span>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu min-h-full w-60 bg-base-200 p-4 text-base-content md:w-80">
              <div className="mb-5">
                <p className="mb-3 border-b text-lg font-medium">Brand</p>
                <div>
                  {brands &&
                    brands.map((brand) => (
                      <div
                        key={brand._id}
                        className="mb-1 flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) =>
                            e.target.checked
                              ? setBrand([...brand, brand?._id])
                              : setBrand(brand.filter((r) => r !== brand?._id))
                          }
                        />{" "}
                        <span>{brand._id}</span>
                      </div>
                    ))}
                </div>
              </div>
              <div className="mb-5">
                <p className="mb-3 border-b text-lg font-medium">Category</p>
                <div>
                  {categories &&
                    categories.map((category) => (
                      <div
                        key={category._id}
                        className="mb-1 flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          className="checkbox"
                          onChange={(e) =>
                            e.target.checked
                              ? setBrand([...category, category?._id])
                              : setBrand(category.filter((r) => r !== category?._id))
                          }
                        />{" "}
                        <span>{category._id}</span>
                      </div>
                    ))}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

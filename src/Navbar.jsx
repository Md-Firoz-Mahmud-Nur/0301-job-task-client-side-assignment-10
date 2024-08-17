import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { MdFilterAlt } from "react-icons/md";
import Gadget from "./Home/Gadget";

const Navbar = () => {
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [brands, setBrands] = useState([]);
  const [brand, setBrand] = useState([]);
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState([]);
  const [priceSelected, setPriceSelected] = useState([]);
  const [category, setCategory] = useState([]);
  const [gadgets, setGadgets] = useState([]);
  const [sortPrice, setSortPrice] = useState([]);
  const [dateSort, setDateSort] = useState(false);
  const [totalClass, setTotalClass] = useState(0);

  const pages = [...Array(Math.ceil(parseInt(totalClass) / 6)).keys()];

  const testData = {
    search,
    brand,
    category,
    priceSelected,
    sortPrice,
    dateSort,
    pages,
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
    fetch(
      `${import.meta.env.VITE_SERVER}/products?page=${currentPage - 1}&search=${search}&testData=${JSON.stringify(testData)}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data?.result);
        setTotalClass(data?.totalClasses);
      });
  }, [
    search,
    brand,
    category,
    priceSelected,
    sortPrice,
    dateSort,
    currentPage,
  ]);

  // Getting Brands Name

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/filter`)
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      });
  }, []);

  // Getting Categories Name

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/filter2`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  // Getting Price Data

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/filter3`)
      .then((res) => res.json())
      .then((data) => {
        setPrice(data);
      });
  }, []);

  const signOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
      })
      .catch(() => {});
  };

  return (
    <div className="mb-40">
      <div className="z-100 container sticky top-0 mx-auto mb-10">
        {/* Navbar Section */}

        <div className="navbar top-0 mx-auto border-b border-blue-500 bg-blue-50 shadow-xl shadow-blue-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
        <div className="container mx-auto mt-6 flex items-center justify-center gap-1 bg-blue-100 shadow-xl shadow-blue-100 md:gap-2">
          {/* Search  */}

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
              <button
                type="submit"
                className="rounded-full bg-sky-200 px-3 py-2"
              >
                Search
              </button>
            </label>
          </form>
          {/* Filter Button */}
          <div className="z-100 drawer min-w-16 max-w-min lg:drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
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
                {/* Brands Name */}
                <div className="mb-5">
                  <p className="mb-3 border-b text-lg font-medium">Brand</p>
                  <div>
                    {brands &&
                      brands.map((singleBrand) => (
                        <div
                          key={singleBrand._id}
                          className="mb-1 flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            className="checkbox"
                            onChange={(e) =>
                              e.target.checked
                                ? setBrand([...brand, singleBrand?._id])
                                : setBrand(
                                    brand.filter((r) => r !== singleBrand?._id),
                                  )
                            }
                          />
                          <span>{singleBrand._id}</span>
                        </div>
                      ))}
                  </div>
                </div>
                {/* Category Name */}
                <div className="mb-5">
                  <p className="mb-3 border-b text-lg font-medium">Category</p>
                  <div>
                    {categories &&
                      categories.map((singleCategory) => (
                        <div
                          key={singleCategory._id}
                          className="mb-1 flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            className="checkbox"
                            onChange={(e) =>
                              e.target.checked
                                ? setCategory([
                                    ...category,
                                    singleCategory?._id,
                                  ])
                                : setCategory(
                                    category.filter(
                                      (r) => r !== singleCategory?._id,
                                    ),
                                  )
                            }
                          />
                          <span>{singleCategory._id}</span>
                        </div>
                      ))}
                  </div>
                </div>
                {/* Price Range */}
                <div className="mb-5">
                  <p className="mb-3 border-b text-lg font-medium">
                    Price Range
                  </p>
                  <div>
                    {price.map((singlePrice) => (
                      <div
                        key={singlePrice._id}
                        className="mb-1 flex items-center gap-2"
                      >
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio"
                          onChange={(e) =>
                            e.target.checked
                              ? setPriceSelected(singlePrice._id.split("-"))
                              : setPriceSelected("")
                          }
                        />{" "}
                        <span>{singlePrice._id}</span>
                      </div>
                    ))}
                    <div className="mb-1 flex items-center gap-2">
                      <input
                        type="radio"
                        name="radio-1"
                        className="radio"
                        onChange={(e) =>
                          e.target.checked
                            ? setPriceSelected([])
                            : setPriceSelected([])
                        }
                      />{" "}
                      <span>None</span>
                    </div>
                  </div>
                </div>
                {/* Price Sort */}
                <div className="mb-5">
                  <p className="mb-3 border-b text-lg font-medium">
                    Price Sorting
                  </p>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <input
                        type="radio"
                        className="radio"
                        name="radio-1"
                        onChange={(e) =>
                          e.target.checked
                            ? setSortPrice("low")
                            : setSortPrice("")
                        }
                      />{" "}
                      <span>{"Low to High"}</span>
                    </div>
                    <div className="mb-1 flex items-center gap-2">
                      <input
                        type="radio"
                        className="radio"
                        name="radio-1"
                        onChange={(e) =>
                          e.target.checked
                            ? setSortPrice("high")
                            : setSortPrice("")
                        }
                      />{" "}
                      <span>{"High to Low"}</span>
                    </div>
                    <div className="mb-1 flex items-center gap-2">
                      <input
                        type="radio"
                        className="radio"
                        name="radio-1"
                        onChange={(e) =>
                          e.target.checked ? setSortPrice("") : setSortPrice("")
                        }
                      />{" "}
                      <span>{"None"}</span>
                    </div>
                  </div>
                </div>
                {/* Date Sort */}
                <div className="mb-5">
                  <p className="mb-3 border-b text-lg font-medium">
                    Date Sorting
                  </p>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="checkbox"
                        onChange={(e) =>
                          e.target.checked
                            ? setDateSort(true)
                            : setDateSort(false)
                        }
                      />{" "}
                      <span>{"Newest first"}</span>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Products Section */}
      <div className="container mx-auto">
        {/* Card */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gadgets.length > 0 ? (
            gadgets.map((gadget) => (
              <Gadget key={gadget._id} product={gadget}></Gadget>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <h3 className="flex h-[50vh] items-center justify-center text-center text-3xl font-semibold">
                Nothing Found!
              </h3>
            </div>
          )}
        </div>
        {/* pagination */}
        <div className="mt-8 flex justify-center">
          <ul className="flex space-x-2">
            <li>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className={`${
                  currentPage === 1
                    ? "cursor-not-allowed bg-gray-300 text-gray-700"
                    : "bg-gray-300 text-gray-700 hover:bg-opacity-80"
                } rounded-l-lg px-4 py-2 focus:outline-none`}
                disabled={currentPage === 1}
              >
                Prev
              </button>
            </li>
            {pages.map((page) => (
              <li key={page}>
                <button
                  onClick={() => setCurrentPage(page + 1)}
                  className={`${
                    currentPage === page + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-opacity-80"
                  } px-4 py-2 focus:outline-none`}
                >
                  {page + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                className={`${
                  currentPage === pages.length
                    ? "cursor-not-allowed bg-gray-300 text-gray-700"
                    : "bg-gray-300 text-gray-700 hover:bg-opacity-80"
                } rounded-r-lg px-4 py-2 focus:outline-none`}
                disabled={currentPage === pages.length}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
        {/* End Of Pagination */}
      </div>
    </div>
  );
};

export default Navbar;

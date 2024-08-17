import React, { useEffect, useState } from "react";
import Gadget from "./Gadget";
import { MdFilterAlt } from "react-icons/md";

const Home = () => {
  const [gadgets, setGadgets] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  console.log(gadgets);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearch(search);
    setCurrentPage(1);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/products?page=${currentPage - 1}&search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data?.result);
      });
  }, [search]);

  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
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
        <button className="btn mx-3 flex items-center gap-1">

          Filter <MdFilterAlt />
        </button>
      </div>
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
    </div>
  );
};

export default Home;

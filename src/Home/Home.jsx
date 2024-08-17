import React, { useEffect, useState } from "react";
import Gadget from "./Gadget";

const Home = ({ search, category, brand }) => {
  console.log(search);
  console.log(category);
  console.log(brand);

  const [gadgets, setGadgets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_SERVER}/products?page=${currentPage - 1}&search=${search}&brand=${brand}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data?.result);
      });
  }, [search, brand]);

  return (
    <div className="container mx-auto">
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

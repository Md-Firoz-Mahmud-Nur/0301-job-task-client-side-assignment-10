import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  console.log(products);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/products?page=${currentPage - 1}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.result);
      });
  }, [search]);

  return <div>ami {products.length}</div>;
};

export default Home;

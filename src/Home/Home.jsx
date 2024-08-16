import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER}/products`)
    .then((res) =>res.json()
    .then((data) => setProducts(data)),
    );
  }),[];

  return <div>ami {products.length}</div>;
};

export default Home;

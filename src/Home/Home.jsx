import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../Components/LoadingSpinner";
import CardContainer from "../Components/CardContainer";
import Pagination from "../Components/Pagination";
import Search from "../Components/Search";
import Filter from "../Components/Filter";

const Home = () => {
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
  const [loading, setLoading] = useState(false);

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

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    setSearch(search);
    setCurrentPage(1);
  };

  useEffect(() => {
    setLoading(true);
    fetch(
      `${import.meta.env.VITE_SERVER}/products?page=${currentPage - 1}&search=${search}&testData=${JSON.stringify(testData)}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setGadgets(data?.result);
        setTotalClass(data?.totalClasses);
        setLoading(false);
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
    setLoading(true);
    fetch(`${import.meta.env.VITE_SERVER}/filter`)
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
        setLoading(false);
      });
  }, []);

  // Getting Categories Name

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_SERVER}/filter2`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      });
  }, []);

  // Getting Price Data

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_SERVER}/filter3`)
      .then((res) => res.json())
      .then((data) => {
        setPrice(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home | Gadget Galaxy</title>
      </Helmet>
      <div className="z-10 container sticky top-16 mx-auto mb-8">
        <div className="container mx-auto flex items-center justify-center gap-1 md:gap-2">
          {/* Search  */}
          <Search handleSearch={handleSearch}></Search>
          {/* Filter Button */}
          <Filter
          setSearch={setSearch}
            brands={brands}
            setBrand={setBrand}
            brand={brand}
            categories={categories}
            setCategory={setCategory}
            category={category}
            price={price}
            setPriceSelected={setPriceSelected}
            setSortPrice={setSortPrice}
            setDateSort={setDateSort}
          ></Filter>
        </div>
      </div>
      {/* Item Show */}
      <div className="container mx-auto">
        {/* Card */}
        {loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <CardContainer gadgets={gadgets}></CardContainer>
        )}
        {/* pagination */}
        <Pagination
          currentPage={currentPage}
          pages={pages}
          setCurrentPage={setCurrentPage}
        ></Pagination>
      </div>
    </div>
  );
};

export default Home;

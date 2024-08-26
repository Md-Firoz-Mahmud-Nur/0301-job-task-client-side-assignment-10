import PropTypes from 'prop-types';
import { MdFilterAlt } from "react-icons/md";

const Filter = ({
  setSearch,
  brands,
  setBrand,
  brand,
  categories,
  setCategory,
  category,
  price,
  setPriceSelected,
  setSortPrice,
  setDateSort,
}) => {
  return (
    <div className="drawer z-10 min-w-16 max-w-min lg:drawer-end">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {/* button */}
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className="btn drawer-button whitespace-nowrap rounded-xl bg-blue-500 px-1 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 md:px-5"
        >
          <span className="flex items-center justify-center gap-1">
            Filter <MdFilterAlt />
          </span>
        </label>
      </div>
      {/* drawer */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-60 bg-base-200 p-4 text-base-content md:w-80 pt-20">
          {/* Clear Filter */}
          <div className="mb-5">
            <p className="mb-3 border-b text-lg font-medium">
              Clear Filter And Search
            </p>
            <div>
              <div className="mb-1 flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(e) => {
                    if (e.target.checked) {
                      document.getElementById("my-drawer").checked = false;
                      const checkboxes =
                        document.getElementsByClassName("checkbox");
                      for (let i = 0; i < checkboxes.length; i++) {
                        checkboxes[i].checked = false;
                      }
                      const radios = document.getElementsByClassName("radio");
                      for (let i = 0; i < radios.length; i++) {
                        radios[i].checked = false;
                      }
                      setSearch("");
                      document.getElementsByName("search")[0].value = "";
                      setBrand([]);
                      setCategory([]);
                      setPriceSelected([]);
                      setSortPrice("");
                      setDateSort(false);
                      e.target.checked = false;
                    }
                  }}
                />
                <span>Yes</span>
              </div>
            </div>
          </div>
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
                          ? setCategory([...category, singleCategory?._id])
                          : setCategory(
                              category.filter((r) => r !== singleCategory?._id),
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
            <p className="mb-3 border-b text-lg font-medium">Price Range</p>
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
            <p className="mb-3 border-b text-lg font-medium">Price Sorting</p>
            <div>
              <div className="mb-1 flex items-center gap-2">
                <input
                  type="radio"
                  className="radio"
                  name="radio-2"
                  onChange={(e) =>
                    e.target.checked ? setSortPrice("low") : setSortPrice("")
                  }
                />
                <span>{"Low to High"}</span>
              </div>
              <div className="mb-1 flex items-center gap-2">
                <input
                  type="radio"
                  className="radio"
                  name="radio-2"
                  onChange={(e) =>
                    e.target.checked ? setSortPrice("high") : setSortPrice("")
                  }
                />{" "}
                <span>{"High to Low"}</span>
              </div>
              <div className="mb-1 flex items-center gap-2">
                <input
                  type="radio"
                  className="radio"
                  name="radio-2"
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
            <p className="mb-3 border-b text-lg font-medium">Date Sorting</p>
            <div>
              <div className="mb-1 flex items-center gap-2">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={(e) =>
                    e.target.checked ? setDateSort(true) : setDateSort(false)
                  }
                />{" "}
                <span>{"Newest first"}</span>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

Filter.propTypes = {
  setSearch: PropTypes.func.isRequired,
  brands: PropTypes.array.isRequired,
  setBrand: PropTypes.func.isRequired,
  brand: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  setCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  setPriceSelected: PropTypes.func.isRequired,
  setSortPrice: PropTypes.func.isRequired,
  setDateSort: PropTypes.func.isRequired, 
};

export default Filter;

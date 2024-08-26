import PropTypes from 'prop-types';

const Search = ({handleSearch}) => {
  return (
    <form
    onSubmit={handleSearch}
    className="my-3 flex items-center justify-center"
  >
    <label className="input input-bordered flex w-full items-center gap-2 border-blue-400 pr-1 focus-within:border-2 focus-within:border-blue-400 focus-within:outline-none">
      <input
        type="search"
        name="search"
        className="w-full grow placeholder:text-black"
        placeholder="Search product name"
      />
      <button
        type="submit"
        className="rounded-2xl bg-blue-500 px-3 py-2 font-semibold text-white"
      >
        Search
      </button>
    </label>
  </form>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;
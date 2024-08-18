const Pagination = ({ currentPage, pages, setCurrentPage }) => {
  return (
    <div className="mt-8 flex justify-center">
      <ul className="flex space-x-1 md:space-x-2">
        {pages.length > 0 && (
          <li>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`${
                currentPage === 1
                  ? "cursor-not-allowed bg-gray-300 text-gray-700"
                  : "bg-gray-300 text-gray-700 hover:bg-opacity-80"
              } rounded-l-lg px-2 py-1 focus:outline-none md:px-4 md:py-2`}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </li>
        )}
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => setCurrentPage(page + 1)}
              className={`${
                currentPage === page + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-opacity-80"
              } px-2 py-1 focus:outline-none md:px-4 md:py-2`}
            >
              {page + 1}
            </button>
          </li>
        ))}
        {pages.length > 0 && (
          <li>
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`${
                currentPage === pages.length
                  ? "cursor-not-allowed bg-gray-300 text-gray-700"
                  : "bg-gray-300 text-gray-700 hover:bg-opacity-80"
              } rounded-r-lg px-2 py-1 focus:outline-none md:px-4 md:py-2`}
              disabled={currentPage === pages.length}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;

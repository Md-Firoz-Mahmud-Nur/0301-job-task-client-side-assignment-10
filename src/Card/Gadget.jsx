import PropTypes from "prop-types";

const ProductCard = ({ product }) => {
  return (
    <div className="group flex h-full flex-col justify-between overflow-hidden rounded bg-white text-slate-500 shadow-xl shadow-blue-200 hover:bg-blue-50 hover:border hover:border-blue-400 hover:shadow-none hover:duration-500">
      <>
        <figure>
          <img
            src={product?.image}
            alt="card image"
            className="aspect-video w-full object-contain p-4"
          />
        </figure>

        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-slate-700">
              {product?.name}
            </h3>
            <p className="text-slate-400">${product?.price}</p>
            <p className="text-slate-500">Category : {product?.category}</p>
            <p className="text-slate-500">Ratings : {product?.ratings}</p>
            <p className="text-slate-500">Launch Date : {product?.time}</p>
          </header>
          <p>{product?.description}</p>
        </div>
      </>

      <div className="flex justify-end p-6 pt-0">
        <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-blue-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-blue-600 focus:bg-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-blue-300 disabled:bg-blue-300 disabled:shadow-none">
          <span>View Details</span>
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object,
};

export default ProductCard;

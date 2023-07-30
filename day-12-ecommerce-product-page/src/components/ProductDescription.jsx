import { useContext } from "react";
import DeleteImg from "../images/icon-delete.svg";
import { QuantityContext } from "../App";
const ProductDescription = () => {
  const { quantity, setQuantity } = useContext(QuantityContext);
  return (
    <div className="max-w-sm">
      <small className="uppercase text-orange-500 font-semibold">
        Sneaker Company
      </small>
      <h3 className="text-4xl my-2 font-bold">Fall Limited Edition Sneakers</h3>
      <p className="my-4">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything the
        weather can offer.
      </p>
      <span className="flex mb-2 gap-2 items-center">
        <h4 className="text-3xl font-semibold">$125.00</h4>
        <span className="px-1 rounded-md font-bold bg-orange-200/50 text-orange-300">
          50%
        </span>
      </span>
      <b className="line-through text-gray-400">$250.00</b>

      <div className="flex gap-4 my-4">
        <div className="flex gap-2 px-2 py-1 bg-slate-800 rounded-lg font-semibold">
          <button
            onClick={() => setQuantity(quantity - 1)}
            className={`text-orange-400 p-2 ${
              quantity === 0 ? "text-black" : ""
            }`}
            disabled={quantity === 0}
          >
            {quantity === 1 ? (
              <img className="w-2" src={DeleteImg} alt="" />
            ) : (
              "-"
            )}
          </button>
          <div className="p-2 px-4">{quantity}</div>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="text-orange-400 p-2"
          >
            +
          </button>
        </div>
        <button className="bg-orange-600 flex gap-2 items-center justify-center font-semibold py-2 px-4 rounded-md flex-1 text-white ">
          <svg
            width="22"
            fill="currentColor"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
          </svg>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductDescription;

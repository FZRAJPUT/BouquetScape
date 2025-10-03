import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false)

  const getProduct = async () => {
    const api = import.meta.env.VITE_MY_API_KEY
    setLoading(true)
    try {
      const res = await axios.get(
        api + "/products/get-all"
      );
      console.log(res.data);
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="flex flex-col sm:px-[40px] lg:px-[120px] gap-12 pt-[60px]">
        <h1 className="text-center text-4xl font-bold text-pink-400">
          Our Products
        </h1>

        {/* Grid for products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full px-5">
          {
            loading ? <Loader /> :
              products.map((item) => (
                <div
                  key={item._id}
                  className="w-full h-[480px] bg-white rounded shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="relative w-full h-[60%] group">
                    <img
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                      src={item.image}
                      alt={item.name}
                    />

                    {/* Category badge */}
                    <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-md capitalize">
                      {item.category}
                    </span>
                  </div>

                  {/* Product Info */}
                  <div className="flex flex-col flex-1 px-4 py-3 gap-2">
                    {/* Name + Price */}
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-gray-800 text-lg truncate w-[80%]">
                        {item.name}
                      </p>
                      <p className="text-pink-600 font-bold text-base">
                        ₹ {item.price}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>

                    {/* Ratings */}
                    <div className="flex items-center gap-1 text-yellow-500 text-sm">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          fill={i < item.ratings.average ? "currentColor" : "none"}
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.974 2.89a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.974-2.89a1 1 0 00-1.176 0l-3.974 2.89c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.588 10.1c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.518-4.674z"
                          />
                        </svg>
                      ))
                      }
                      <span className="text-gray-400 text-xs ml-1">
                        ({item.ratings.count} reviews)
                      </span>
                    </div>

                    {/* Sold */}
                    <p className="text-xs text-gray-400">Sold: {item.sold}</p>

                    {/* Footer: Add to cart / Buy now */}
                    <div className="flex justify-between items-center mt-auto">
                      <button
                        className="bg-orange-400 cursor-pointer text-gray-50 text-sm px-4 py-2 rounded-full transition"
                        type="button"
                      >
                        Add to Cart
                      </button>
                      <button
                        className="flex cursor-pointer items-center gap-2 px-6 py-2 rounded-full shadow-md text-sm font-medium transition bg-pink-500 hover:bg-pink-600 text-white"
                        type="button"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
          }
        </div>
      </div>
    </>
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit, FiTrash2, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation

const AvailableProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // ✅ hook for navigation

  const getProduct = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/products/get-all"
      );
      setProducts(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(
        `http://localhost:4000/api/products/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      getProduct();
      alert("Dleted")
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdate = (id) => {
    console.log("Update product with ID:", id);
    // Example: navigate(`/update-product/${id}`);
  };

  return (
    <div className="px-2 sm:p-6 lg:p-8 w-full h-screen flex flex-col items-center">
      {/* Header with Add button */}
      <div className="w-full flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-pink-500">Available Products</h2>
        <button
          onClick={() => navigate("/add-product")}
          className="flex items-center gap-2 border-2 border-green-600 bg-gradient-to-r from-green-400 to-green-600 cursor-pointer hover:from-green-500 hover:to-green-600 text-white px-4 py-1 rounded"
        >
          <FiPlus /> Add Product
        </button>
      </div>

      {/* Table */}
      <div className="w-full overflow-auto h-full shadow-md rounded-lg">
        <table className="w-full h-full text-sm text-left text-gray-600">
          <thead className="bg-pink-500 text-white text-xs uppercase">
            <tr className="text-[10px]">
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Sold</th>
              <th className="px-4 py-3">Ratings</th>
              <th className="px-4 py-3">Created At</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white border-gray-300 border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded object-cover"
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-800">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 capitalize">{item.category}</td>
                  <td className="px-4 py-3 text-[12px] text-pink-600 font-semibold">
                    ₹ {item.price}
                  </td>
                  <td className="px-4 py-3">{item.sold}</td>
                  <td className="px-4 py-3">
                    ⭐ {item.ratings?.average || 0} ({item.ratings?.count || 0})
                  </td>
                  <td className="px-4 py-3 text-xs text-gray-500">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-0 mt-8 flex gap-3">
                    <button
                      onClick={() => handleUpdate(item._id)}
                      className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs"
                    >
                      <FiEdit /> Update
                    </button>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs"
                    >
                      <FiTrash2 /> Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-6 text-gray-500 font-medium"
                >
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AvailableProducts;

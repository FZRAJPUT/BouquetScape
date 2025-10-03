import React, { useState } from "react";
import axios from "axios";
import { FaBoxOpen, FaTag, FaDollarSign, FaImage, FaFileAlt } from "react-icons/fa";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("category", formData.category);
      data.append("price", formData.price);
      data.append("description", formData.description);
      if (imageFile) data.append("image", imageFile);

      const res = await axios.post(
        "http://localhost:4000/api/products/upload",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Product Added:", res.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-3xl h-[90vh] flex flex-col">
        <h2 className="text-2xl font-bold text-center text-gray-800 p-4 border-b">
          Add New Product
        </h2>

        <form
          className="flex-1 overflow-y-auto p-6 space-y-6"
        >
          {/* Row 1: Product Name + Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                <FaBoxOpen /> Product Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter product name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                <FaTag /> Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Row 2: Price + Upload Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                <FaDollarSign /> Price
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                value={formData.price}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
                <FaImage /> Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-pink-500 file:text-white hover:file:bg-pink-600"
              />
            </div>
          </div>

          {/* Row 3: Description (full width) */}
          <div>
            <label className="flex items-center gap-2 font-medium text-gray-700 mb-1">
              <FaFileAlt /> Description
            </label>
            <textarea
              name="description"
              placeholder="Enter product description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
            ></textarea>
          </div>
        </form>

        {/* Submit Button fixed at bottom */}
        <div className="p-4 border-t">
          <button
            onClick={handleSubmit}
            type="submit"
            form="productForm"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition"
          >
            {!loading ? "Add Product" : "Adding..."}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

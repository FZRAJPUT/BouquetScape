// controllers/productController.js
import imagekit from "../middleware/imagekit.js";
import Product from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("reviews.user");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    let imageUrl = "";

    if (!req.file) {
      return res.json({ message: "Image is required" })
    }

    const uploadResponse = await imagekit.upload({
      file: req.file.buffer, // Buffer from multer
      fileName: `product_${Date.now()}`,
      folder: "/products", // optional: organize in a folder
    });
    imageUrl = uploadResponse.url;

    // Create product with image URL
    const product = await Product.create({
      ...req.body,
      image: imageUrl, // add ImageKit URL
    });

    res.status(201).json(product);
  } catch (err) {
    console.log("Error adding product:", err.message);
    res.status(500).json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

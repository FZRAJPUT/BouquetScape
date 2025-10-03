// routes/productRoutes.js
import express from "express";
import { 
  getAllProducts, 
  getProduct, 
  addProduct, 
  updateProduct, 
  deleteProduct 
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = express.Router();

router.get("/get-all", getAllProducts);
router.get("/get-sigle/:id", getProduct);

// Admin only
router.post("/upload", protect, upload.single("image"), addProduct);
router.put("/update/:id", protect, admin, updateProduct);
router.delete("/delete/:id", protect, admin, deleteProduct);

export default router;

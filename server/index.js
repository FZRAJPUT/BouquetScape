import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);

app.get("/",(req,res)=>{
    res.json({
        message:"Hello from server...."
    })
})

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    connectDB(process.env.MONGO_URI);
    console.log("server running on : "+PORT)
})
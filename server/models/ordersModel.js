// models/Order.js
import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }, // store snapshot of product price
}, { _id: false });

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  items: [orderItemSchema],

  shippingAddress: {
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    postalCode: { type: String, required: true },
  },

  payment: {
    method: { type: String, enum: ["COD", "Credit Card", "UPI", "PayPal"], default: "COD" },
    status: { type: String, enum: ["Pending", "Paid", "Failed"], default: "Pending" },
    transactionId: { type: String },
  },

  total: { type: Number, required: true },

  status: {
    type: String,
    enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
    default: "Pending",
  },

}, { timestamps: true });

export default mongoose.model("Order", orderSchema);

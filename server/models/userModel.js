import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
}, { _id: false });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true },
  password: { type: String, required: true }, // store hashed password
  phone: { type: String },

  role: { 
    type: String, 
    enum: ["user", "admin"],
    default: "user" 
  },

  addresses: [addressSchema],

  cart: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: { type: Number, default: 1 },
  }],

  wishlist: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Product"
  }],

  orders: [{
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Order"
  }],

}, { timestamps: true });

export default mongoose.model("User", userSchema);
import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  username: { type: String, required: true }, // store snapshot of username
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number }, // optional discounted price

  category: { type: String, required: true },

  stock: { type: Number, required: true, default: 0 },
  sold: { type: Number, default: 0 },

  image: { type: String }, // array of image URLs

  ratings: {
    average: { type: Number, default: 0 }, // calculated average
    count: { type: Number, default: 0 },   // total reviews
  },

  reviews: [reviewSchema], // embedded reviews

  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

}, { timestamps: true });

export default mongoose.model("Product", productSchema);

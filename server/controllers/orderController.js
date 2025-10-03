// controllers/orderController.js
import Order from "../models/ordersModel.js";
import User from "../models/userModel.js";

export const createOrder = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate("cart.product");
    if (!user.cart.length) return res.status(400).json({ message: "Cart is empty" });

    const order = await Order.create({
      user: user._id,
      items: user.cart.map(item => ({
        product: item.product._id,
        quantity: item.quantity,
        price: item.product.price
      })),
      total: user.cart.reduce((sum, item) => sum + item.quantity * item.product.price, 0),
      status: "Pending"
    });

    user.cart = []; // clear cart after order
    await user.save();

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).populate("items.product");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

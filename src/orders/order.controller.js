// const Order = require("./order.model");

// const createAOrder = async (req, res) => {
//   try {
//     const newOrder = await Order(req.body);
//     const savedOrder = await newOrder.save();
//     res.status(200).json(savedOrder);
//   } catch (error) {
//     console.error("Error creating order", error);
//     res.status(500).json({ message: "Failed to create order" });
//   }
// };

// const getOrderByEmail = async (req, res) => {
//   try {
//     const { email } = req.params;
//     const orders = await Order.find({ email }).sort({ createdAt: -1 });
//     if (!orders) {
//       return res.status(404).json({ message: "Order not found" });
//     }
//     res.status(200).json(orders);
//   } catch (error) {
//     console.error("Error fetching orders", error);
//     res.status(500).json({ message: "Failed to fetch order" });
//   }
// };

// module.exports = {
//   createAOrder,
//   getOrderByEmail,
// };
const Order = require("./order.model");

const createAOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    console.log("Fetched orders:", orders);
    if (orders.length === 0) {
      return res.status(404).json({ message: "No orders found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders", error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
};

const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.error("Error fetching orders", error);
    res.status(500).json({ message: "Failed to fetch order" });
  }
};

module.exports = {
  createAOrder,
  getAllOrders,
  getOrderByEmail,
};

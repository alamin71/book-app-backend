const express = require("express");
const Order = require("./order.model");
const {
  createAOrder,

  getOrderByEmail,
  getAllOrders,
} = require("./order.controller");

const router = express.Router();

// create order endpoint
router.post("/", createAOrder);

// get all orders endpoint
router.get("/", getAllOrders);

// get orders by user email
router.get("/email/:email", getOrderByEmail);

module.exports = router;

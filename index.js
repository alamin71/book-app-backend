const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
require("dotenv").config();

//  Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://book-store-two-lime.vercel.app"],
    credentials: true,
  })
);

//  MongoDB Connect
async function main() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
  }
}
main();

// Routes Import
const bookRoutes = require("./src/books/book.route");
const ordersRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");
const reviewRoutes = require("./src/CustomerReview/review.route");

//  API Routes Setup
app.use("/api/books", bookRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/review", reviewRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("📚 Book Store Server is Running!");
});

//  Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

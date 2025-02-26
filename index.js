const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");

const port = process.env.PORT || 5000;
require("dotenv").config();
//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", "https://book-store-two-lime.vercel.app"],
    credentials: true,
  })
);

//router
const bookRoutes = require("./src/books/book.route");
const ordersRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books/", bookRoutes);
app.use("/api/orders/", ordersRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book store server is running .what a fillings");
  });
}
main()
  .then(() => console.log("mongodb connect successfully"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    bookId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "books",
      required: true,
    }, // কোন বইয়ের রিভিউ
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    }, // কে রিভিউ দিল
    rating: { type: Number, required: true, min: 1, max: 5 }, // ১-৫ স্টারের মধ্যে রেটিং
    comment: { type: String, required: true }, // রিভিউ টেক্সট
  },
  { timestamps: true }
); // টাইমস্ট্যাম্প যোগ করবে (createdAt, updatedAt)

const Review = mongoose.model("reviews", reviewSchema);
module.exports = Review;

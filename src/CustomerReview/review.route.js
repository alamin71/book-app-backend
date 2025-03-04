const express = require("express");
const {
  createReview,
  getAllReviews,
  getReviewsByBook,
} = require("./review.controller");

const router = express.Router();

router.post("/", createReview); // ✅ নতুন রিভিউ তৈরি
router.get("/", getAllReviews); // ✅ সব রিভিউ পাওয়া
router.get("/:bookId", getReviewsByBook); // ✅ নির্দিষ্ট বইয়ের রিভিউ

module.exports = router;

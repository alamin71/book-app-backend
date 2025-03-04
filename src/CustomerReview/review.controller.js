const Review = require("./review.model");

// ✅ নতুন রিভিউ তৈরি করা
exports.createReview = async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json({ message: "Review added successfully!", review });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ✅ সব রিভিউ পাওয়া
exports.getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate("bookId userId");
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ নির্দিষ্ট বইয়ের রিভিউ পাওয়া
exports.getReviewsByBook = async (req, res) => {
  try {
    const reviews = await Review.find({ bookId: req.params.bookId }).populate(
      "userId"
    );
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

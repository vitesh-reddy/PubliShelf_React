import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: "Buyer", required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true },
  author: { type: String, required: true, index: true },
  description: { type: String },
  genre: { type: String, index: true },
  price: { type: Number, required: true },
  quantity: { type: Number, default: 0 },
  image: { type: String },
  rating: { type: Number, default: 0 },
  publisher: { type: mongoose.Schema.Types.ObjectId, ref: "Publisher" },
  publishedAt: { type: Date, default: Date.now },
  reviews: [reviewSchema],
});

bookSchema.index({
  title: "text",
  author: "text",
  genre: "text",
  description: "text",
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
import Book from "../models/Book.js";

export const getAllBooks = async () => {
  return await Book.find();
};

export const getBookById = async (bookId) => {
  return await Book.findById(bookId).populate("reviews.buyer").populate("publisher");
};

export const addReviewToBook = async (bookId, review) => {
  const book = await Book.findById(bookId);

  if (!book) {
    throw new Error("Book not found");
  }

  book.reviews.push(review);

  
  const totalRatings = book.reviews.reduce((sum, review) => sum + review.rating, 0);
  book.rating = totalRatings / book.reviews.length;

  return await book.save();
};


export const createBook = async (bookData) => {
  const newBook = new Book(bookData);
  return await newBook.save();
};

export const searchBooks = async (query) => {
  if (!query) return [];

  let results = await Book.find(
    { $text: { $search: query } },
    { score: { $meta: "textScore" } }
  ).sort({ score: { $meta: "textScore" } });

  if (results.length === 0) {
    results = await Book.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } },
        { genre: { $regex: query, $options: "i" } },
      ],
    });
  }

  return results;
};

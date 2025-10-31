import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import BookCard from "./components/BookCard.jsx";
// Navbar and Footer are still static HTML

// 1. Add hardcoded data
const hardcodedNewly = [
  { _id: '1', title: 'New Book 1', author: 'Author A', price: 299, image: 'https://via.placeholder.com/150' },
  { _id: '2', title: 'New Book 2', author: 'Author B', price: 399, image: 'https://via.placeholder.com/150' },
];
const hardcodedMostSold = [
  { _id: '3', title: 'Sold Book 1', author: 'Author C', price: 499, image: 'https://via.placeholder.com/150', totalSold: 120 },
  { _id: '4', title: 'Sold Book 2', author: 'Author D', price: 599, image: 'https://via.placeholder.com/150', totalSold: 95 },
];
const hardcodedTrending = [
  { _id: '5', title: 'Trend Book 1', author: 'Author E', price: 699, image: 'https://via.placeholder.com/150' },
  { _id: '6', title: 'Trend Book 2', author: 'Author F', price: 799, image: 'https://via.placeholder.com/150' },
];

const Dashboard = () => {
  const navigate = useNavigate(); // 2. Initialize navigate

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Static Navbar HTML (unchanged) */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
       {/* ... navbar html ... */}
      </nav>

      {/* Main Content */}
      <section className="py-12 pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Newly Added Books</h2>
          <div className="book-carousel" id="topRatedCarousel">
            {/* 3. Map over hardcoded data and pass props */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hardcodedNewly.map((book) => (
                <BookCard key={book._id} book={book} onClick={() => navigate(`/buyer/product-detail/${book._id}`)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Most Sold Books</h2>
          <div className="book-carousel" id="mostSoldCarousel">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hardcodedMostSold.map((book) => (
                <BookCard key={book._id} book={book} onClick={() => navigate(`/buyer/product-detail/${book._id}`)} showSold />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Now</h2>
          <div className="book-carousel" id="trendingCarousel">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hardcodedTrending.map((book, idx) => (
                <BookCard key={book._id} book={book} onClick={() => navigate(`/buyer/product-detail/${book._id}`)} isTrending idx={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Static Footer HTML (unchanged) */}
      <footer className="bg-white border-t mt-auto p-4 text-center text-gray-600">
        © 2025 PubliShelf. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
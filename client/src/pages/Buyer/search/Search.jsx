import React, { useState } from "react"; // Import useState
import { Link } from "react-router-dom"; // Use Link for category
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import BookGrid from "./components/BookGrid.jsx";

const hardcodedBooks = [
  { _id: '1', title: 'Book One', author: 'Author A', price: 450, image: 'https://via.placeholder.com/300' },
  { _id: '2', title: 'Book Two', author: 'Author B', price: 599, image: 'https://via.placeholder.com/300' },
  { _id: '3', title: 'Book Three', author: 'Author C', price: 720, image: 'https://via.placeholder.com/300' }
];

const SearchPage = () => {
  // 1. Add state for filters
  const [currentCategory, setCurrentCategory] = useState("All Books");
  const [currentPriceFilter, setCurrentPriceFilter] = useState("all");
  const [currentSort, setCurrentSort] = useState("relevance");

  // 2. Add handler functions
  const handleCategoryClick = (category) => setCurrentCategory(category);
  const handlePriceRangeChange = (e) => setCurrentPriceFilter(e.target.value);
  const handleSortChange = (e) => setCurrentSort(e.target.value);
  const handleResetFilters = () => {
    setCurrentCategory("All Books");
    setCurrentPriceFilter("all");
    setCurrentSort("relevance");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="bg-white border-b border-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* 3. Wire up category links */}
            <div className="flex space-x-8 py-4">
              {["All Books", "Fiction", "Non-Fiction", "Mystery", "Science Fiction", "Romance", "Thriller", "Other"].map(category => (
                <Link key={category} to="#" 
                  className={`${currentCategory === category ? "text-purple-600 border-b-2 border-purple-600 pb-4 -mb-4" : "text-gray-600 hover:text-purple-600"}`} 
                  onClick={(e)=>{e.preventDefault(); handleCategoryClick(category);}}>{category}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xs px-4 py-3 transition-all">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 tracking-tight">Filter & Sort Books</h2>
              <p className="text-sm text-gray-500 hidden sm:block">Refine your results by price or sort preferences</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {/* 4. Wire up select elements */}
              <div className="relative">
                <select value={currentSort} onChange={handleSortChange} className="appearance-none px-4 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Rating: High to Low</option>
                  <option value="rating-asc">Rating: Low to High</option>
                  <option value="quantity-desc">Quantity: High to Low</option>
                  <option value="quantity-asc">Quantity: Low to High</option>
                  <option value="newest">Newest First</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-[15px] text-gray-500 pointer-events-none text-xs"></i>
              </div>
              <div className="relative">
                <select value={currentPriceFilter} onChange={handlePriceRangeChange} className="appearance-none px-4 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
                  <option value="all">All Prices</option>
                  <option value="under500">Under ₹500</option>
                  <option value="500-1000">₹500 - ₹1000</option>
                  <option value="1000-2000">₹1000 - ₹2000</option>
                  <option value="2000-3000">₹2000 - ₹3000</option>
                  <option value="over3000">Over ₹3000</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-[15px] text-gray-500 pointer-events-none text-xs"></i>
              </div>
              <button onClick={handleResetFilters} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition">
                Reset Filters
              </button>
            </div>
          </div>
          <BookGrid books={hardcodedBooks} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
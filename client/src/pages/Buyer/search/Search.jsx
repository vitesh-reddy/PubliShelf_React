import React from "react";
import Navbar from "../components/Navbar.jsx"; // Assuming Navbar is created
import Footer from "../components/Footer.jsx"; // Assuming Footer is created
import BookGrid from "./components/BookGrid.jsx"; // New!

const SearchPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar /> {/* Now a component */}
      
      <div className="pt-16">
        {/* Category Links (stays in SearchPage) */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 py-4">
              <a href="#" className="text-purple-600 border-b-2 border-purple-600 pb-4 -mb-4">All Books</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Fiction</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Non-Fiction</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Mystery</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Science Fiction</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Romance</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Thriller</a>
              <a href="#" className="text-gray-600 hover:text-purple-600">Other</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Filter/Sort Section (stays in SearchPage) */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm px-4 py-3 transition-all">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 tracking-tight">Filter & Sort Books</h2>
              <p className="text-sm text-gray-500 hidden sm:block">Refine your results by price or sort preferences</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <select id="sortSelect" className="appearance-none px-4 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Rating: High to Low</option>
                  <option value="rating-asc">Rating: Low to High</option>
                  <option value="quantity-desc">Quantity: High to Low</option>
                  <option value="quantity-asc">Quantity: Low to High</option>
                  <option value="newest">Newest First</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-3 text-gray-500 pointer-events-none text-xs"></i>
              </div>
              <div className="relative">
                <select id="priceRangeSelect" className="appearance-none px-4 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
                  <option value="all">All Prices</option>
                  <option value="under500">Under ₹500</option>
                  <option value="500-1000">₹500 - ₹1000</option>
                  <option value="1000-2000">₹1000 - ₹2000</option>
                  <option value="2000-3000">₹2000 - ₹3000</option>
                  <option value="over3000">Over ₹3000</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-3 text-gray-500 pointer-events-none text-xs"></i>
              </div>
              <button id="resetFiltersBtn" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition">
                <i className="fas fa-undo-alt text-sm"></i> Reset
              </button>
            </div>
          </div>

          {/* BookGrid is now a component */}
          <BookGrid /> 
        </div>
      </div>

      <Footer /> {/* Now a component */}
    </div>
  );
};

export default SearchPage;
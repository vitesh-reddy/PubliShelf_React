import React from "react";

const SearchPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar: Hardcoded for now */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/buyer/dashboard" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">PubliShelf</span>
              </a>
            </div>
            <div className="flex items-center md:space-x-8 relative">
              <a href="/buyer/cart/#wishlist-section" className="text-gray-700 hover:text-purple-600 hidden md:block">
                <i className="far fa-heart"></i>
              </a>
              <a href="/buyer/cart" className="text-gray-700 hover:text-purple-600 hidden md:block">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <button className="bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:-translate-y-[2px] transition-all duration-300  hidden md:block">
                Enter Auction
              </button>
              <div className="relative group">
                <button className="scale-0 md:scale-100 flex items-center space-x-2">
                  <img src="https://img.icons8.com/?size=100&id=zxB19VPoVLjK&format=png&color=000000" alt="Profile" className="w-5 h-5 rounded-full" />
                  {/* Hardcoded username */}
                  <span className="text-gray-700">Buyer Name</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        {/* Category Links */}
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
          {/* Filter/Sort Section */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm px-4 py-3 transition-all">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 tracking-tight">Filter & Sort Books</h2>
              <p className="text-sm text-gray-500 hidden sm:block">Refine your results by price or sort preferences</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <select id="sortSelect" className="appearance-none px-4 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
                  <option value="relevance">Sort by: Relevance</option>
                  {/* ... other options */}
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-3 text-gray-500 pointer-events-none text-xs"></i>
              </div>
              <div className="relative">
                <select id="priceRangeSelect" className="appearance-none px-4 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
                  <option value="all">All Prices</option>
                  {/* ... other options */}
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-3 text-gray-500 pointer-events-none text-xs"></i>
              </div>
              <button id="resetFiltersBtn" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 hover:text-purple-700 transition">
                <i className="fas fa-undo-alt text-sm"></i> Reset
              </button>
            </div>
          </div>

          {/* Book Grid: Static and hardcoded */}
          <div id="bookGrid" className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer">
              <img src="https" alt="Sample Book" className="w-full h-40 md:h-64 object-cover" />
              <div className="p-3 md:p-4">
                <h3 className="text-lg font-semibold mb-1 truncate">Sample Book Title</h3>
                <p className="text-gray-600 text-sm mb-2">by Sample Author</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-purple-600 text-sm">₹499</span>
                </div>
                <button className="bottom-3 right-3 wishlist-btn text-gray-600 hover:text-red-500" data-book-id="123">
                  <i className="far fa-heart text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer: Hardcoded for now */}
      <footer className="bg-white border-t mt-auto p-4 text-center text-gray-600">
        © 2025 PubliShelf. All rights reserved.
      </footer>
    </div>
  );
};

export default SearchPage;
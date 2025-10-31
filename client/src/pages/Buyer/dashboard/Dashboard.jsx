import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar: Hardcoded static HTML */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/buyer/dashboard" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">PubliShelf</span>
              </a>
            </div>
            <div className="flex items-center md:space-x-8 relative">
              <div className="relative">
                <form id="searchForm">
                  <input type="text" id="searchInput" name="q" placeholder="Search books..." className="w-[25vw] px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-600" />
                  <button type="submit" className="absolute right-3 top-2.5 text-gray-400">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
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
                  <span className="text-gray-700">Buyer Name</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="py-12 pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Newly Added Books</h2>
          <div className="book-carousel" id="topRatedCarousel">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Hardcoded Book Card */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg cursor-pointer">
                <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
                  <img src="https://via.placeholder.com/150" alt="Sample Book" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1 truncate">Sample Book Title</h3>
                  <p className="text-gray-600 text-sm mb-2">by Sample Author</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-purple-600 text-sm">₹500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Most Sold Books</h2>
          <div className="book-carousel" id="mostSoldCarousel">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Hardcoded Book Card (Most Sold) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg cursor-pointer">
                <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
                  <img src="https://via.placeholder.com/150" alt="Sample Book" className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1 truncate">Another Book</h3>
                  <p className="text-gray-600 text-sm mb-2">by Another Author</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 text-sm">Total Sold: 50</span>
                    <span className="font-bold text-purple-600 text-sm">₹700</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Now</h2>
          <div className="book-carousel" id="trendingCarousel">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Hardcoded Book Card (Trending) */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg cursor-pointer">
                <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
                  <img src="https://via.placeholder.com/150" alt="Sample Book" className="max-h-full max-w-full object-contain" />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                    #1
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-lg font-semibold mb-1 truncate">Trending Book</h3>
                  <p className="text-gray-600 text-sm mb-2">by Trend Author</p>
                  <div className="flex justify-between items-center">
                    <span className="text-purple-600 text-sm">Trending</span>
                    <span className="font-bold text-purple-600 text-sm">₹650</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer: Hardcoded static HTML */}
      <footer className="bg-white border-t mt-auto p-4 text-center text-gray-600">
        © 2025 PubliShelf. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
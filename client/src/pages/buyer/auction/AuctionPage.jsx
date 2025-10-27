// src/pages/buyer/AuctionPage.jsx
import React from "react";

const AuctionPage = () => {
  return (
    <div className="bg-gray-50">
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
              <button className="bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:-translate-y-[2px] transition-all duration-300 hidden md:block">
                Bookstore
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-2">
                  <img src="https://via.placeholder.com/20" alt="Profile" className="w-5 h-5 rounded-full" />
                  <span className="text-gray-700 hidden md:block">John Doe</span>
                </button>
                <div className="absolute top-[22px] right-0 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
                  <a href="/buyer/profile" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Your Profile</a>
                  <a href="/buyer/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Bookstore</a>
                  <a href="/buyer/cart/#wishlist-section" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Wishlist Page</a>
                  <a href="/buyer/cart" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Cart Page</a>
                  <a href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/buyer/dashboard" className="text-gray-700 hover:text-purple-600">
                  <i className="fas fa-home mr-2"></i> Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                  <span className="text-gray-500">Auctions</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="text-center py-12">
            <i className="fas fa-book-open text-5xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-semibold text-gray-700">No auctions available</h2>
            <p className="text-gray-500 mt-2">Check back later for new antique book auctions</p>
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">PubliShelf</span>
              <p className="text-sm mt-2">© 2025 PubliShelf. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <button className="text-gray-300 hover:text-purple-400 text-sm">Terms and Conditions</button>
              <button className="text-gray-300 hover:text-purple-400 text-sm">Privacy Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuctionPage;
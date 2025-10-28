// src/pages/buyer/auction/AuctionItemDetail.jsx
import React from "react";

const AuctionItemDetail = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
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
              <button className="bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:-translate-y-[2px] transition-all duration-300 hidden md:block">Logout</button>
              <div className="relative">
                <button className="scale-0 md:scale-100 flex items-center space-x-2">
                  <img src="https://img.icons8.com/?size=100&id=zxB19VPoVLjK&format=png&color=000000" alt="Profile" className="w-5 h-5 rounded-full" />
                  <span className="text-gray-700">John Doe</span>
                </button>
              </div>
              <div className="relative group">
                <button className="md:hidden flex items-center space-x-2">
                  <img src="https://img.icons8.com/?size=100&id=zxB19VPoVLjK&format=png&color=000000" alt="Profile" className="w-5 h-5 rounded-full" />
                </button>
                <div className="absolute top-full right-1 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
                  <a href="/buyer/profile" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Your Profile</a>
                  <a href="/buyer/cart/#wishlist-section" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Wishlist</a>
                  <a href="/buyer/cart" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Cart</a>
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
                  <i className="fas fa-home mr-2"></i>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                  <a href="/buyer/auction-page" className="text-gray-700 hover:text-purple-600">Auctions</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                  <span className="text-gray-500">The Great Gatsby</span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600" alt="The Great Gatsby" className="w-full h-96 object-cover transform transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">The Great Gatsby</h1>
                  <p className="text-base md:text-lg text-gray-600 mt-1">F. Scott Fitzgerald</p>
                  <p className="text-gray-600 text-sm">Genre: Classic Fiction</p>
                  <p className="text-gray-600 text-sm">Condition: Excellent</p>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <span className="text-green-600 font-medium">Active Auction</span>
                  <span className="text-gray-600">Ends in: <span className="font-semibold">2d 5h 30m 15s</span></span>
                </div>
                <div className="border-t border-b py-3">
                  <div className="flex items-baseline space-x-4">
                    <div>
                      <span className="text-3xl font-bold text-gray-900">₹2500</span>
                      <p className="text-gray-600 text-xs">Current Bid</p>
                    </div>
                    <div>
                      <span className="text-lg text-gray-600">₹1500</span>
                      <p className="text-gray-600 text-xs">Base Price</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Description</h3>
                  <p className="text-gray-600 text-sm">A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.</p>
                </div>
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 text-sm">
                  <i className="fas fa-gavel"></i>
                  <span>Join Auction</span>
                </button>
              </div>
            </div>
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

export default AuctionItemDetail;
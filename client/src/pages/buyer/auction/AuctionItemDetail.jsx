import React from "react";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
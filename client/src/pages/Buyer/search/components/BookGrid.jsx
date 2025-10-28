import React from "react";

const BookGrid = () => {
  return (
    <div id="bookGrid" className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* Still static and hardcoded */}
      <div className="relative bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer">
        <img src="https://via.placeholder.com/300" alt="Sample Book" className="w-full h-40 md:h-64 object-cover" />
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
  );
};

export default BookGrid;
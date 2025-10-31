import React from "react";

// This is the first, static version. It takes no props.
// It just returns the basic card structure.
const BookCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg cursor-pointer">
      <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
        <img src="https://via.placeholder.com/150" alt="Sample Book" className="max-h-full max-w-full object-contain" />
        {/* Conditional elements are not here yet */}
      </div>
      <div className="p-3">
        <h3 className="text-lg font-semibold mb-1 truncate">Sample Book Title</h3>
        <p className="text-gray-600 text-sm mb-2">by Sample Author</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="font-bold text-purple-600 text-sm">₹500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
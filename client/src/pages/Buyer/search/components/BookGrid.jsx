import React from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation

const BookGrid = ({ books }) => { // 1. Receive 'books' prop
  const navigate = useNavigate();

  return (
    <div id="bookGrid" className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {/* 2. Check if books array is empty */}
      {books.length === 0 ? (
        <div className="col-span-full text-center text-gray-500 py-10">
          No books found.
        </div>
      ) : (
        // 3. Map over the books array
        books.map((book) => (
          <div
            key={book._id} // Add unique key
            className="relative bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform cursor-pointer bookCardStyle"
            onClick={() => navigate(`/buyer/product-detail/${book._id}`)} // Add navigation
          >
            <div className="relative w-full h-40 md:h-64 bg-gray-100 flex items-center justify-center">
              <img
                src={book.image}
                alt={book.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-3 md:p-4 relative">
              <h3 className="text-lg font-semibold mb-1 truncate">{book.title}</h3>
              <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-bold text-purple-600 text-sm">
                    ₹{book.price}
                  </span>
                  {book.quantity <= 0 && (
                    <span className="text-red-600 text-xs font-semibold mt-1">
                      Out of Stock
                    </span>
                  )}
                </div>
                <button
                  className="absolute bottom-3 right-3 z-20 text-gray-600 hover:text-red-500 transition-colors duration-200"
                  data-book-id={book._id}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card click
                    alert('Add to wishlist clicked'); // Placeholder action
                  }}
                >
                  <i className="far fa-heart text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookGrid;
import React from "react";
import BookCard from "./components/BookCard.jsx"; // Import the new component

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Static Navbar HTML (unchanged) */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
       {/* ... navbar html ... */}
      </nav>

      {/* Main Content */}
      <section className="py-12 pt-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Newly Added Books</h2>
          <div className="book-carousel" id="topRatedCarousel">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Use the new component */}
              <BookCard />
              <BookCard />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Most Sold Books</h2>
          <div className="book-carousel" id="mostSoldCarousel">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Use the new component */}
              <BookCard />
              <BookCard />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Now</h2>
          <div className="book-carousel" id="trendingCarousel">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Use the new component */}
              <BookCard />
              <BookCard />
            </div>
          </div>
        </div>
      </section>
      
      {/* Static Footer HTML (unchanged) */}
      <footer className="bg-white border-t mt-auto p-4 text-center text-gray-600">
        © 2025 PubliShelf. All rights reserved.
      </footer>
    </div>
  );
};

export default Dashboard;
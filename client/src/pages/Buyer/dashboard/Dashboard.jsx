import React, { useState, useEffect } from "react"; // Import hooks
import { useNavigate } from "react-router-dom";
import { getDashboard } from "../../../services/buyer.services.js"; // Import API service
import BookCard from "./components/BookCard.jsx";
// Still using static Navbar/Footer

const Dashboard = () => {
  // 1. Add state for data, loading, and errors
  const [data, setData] = useState({ newlyBooks: [], mostSoldBooks: [], trendingBooks: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // 2. Add useEffect to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getDashboard();
        if (response.success) {
          setData(response.data);
        } else {
          setError(response.message);
        }
      } catch (err) {
        setError("Failed to fetch dashboard data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []); // Empty dependency array = runs once on mount

  // Loading/Error UI not yet added, will flicker or show empty
  
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
            {/* 3. Map over state data */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.newlyBooks.map((book) => (
                <BookCard key={book._id} book={book} onClick={() => navigate(`/buyer/product-detail/${book._id}`)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Most Sold Books</h2>
          <div className="book-carousel" id="mostSoldCarousel">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.mostSoldBooks.map((book) => (
                <BookCard key={book._id} book={book} onClick={() => navigate(`/buyer/product-detail/${book._id}`)} showSold />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trending Now</h2>
          <div className="book-carousel" id="trendingCarousel">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.trendingBooks.map((book, idx) => (
                <BookCard key={book._id} book={book} onClick={() => navigate(`/buyer/product-detail/${book._id}`)} isTrending idx={idx} />
              ))}
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
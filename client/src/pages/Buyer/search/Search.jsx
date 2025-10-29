import React, { useState, useEffect } from "react"; // Import useEffect
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import BookGrid from "./components/BookGrid.jsx";
// Assume searchBooks service exists
import { searchBooks } from "../../../services/buyer.services.js"; 

const SearchPage = () => {
  // 1. Add state for data fetching
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filter states (from previous step)
  const [currentCategory, setCurrentCategory] = useState("All Books");
  const [currentPriceFilter, setCurrentPriceFilter] = useState("all");
  const [currentSort, setCurrentSort] = useState("relevance");

  // 2. Add useEffect to fetch data
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        // We'll add the search query later. For now, fetch all.
        const response = await searchBooks(""); 
        if (response.success) {
          setAllBooks(response.data.books || []);
          setError("");
        } else {
          setAllBooks([]);
          setError(response.message);
        }
      } catch (err) {
        setAllBooks([]);
        setError("Failed to fetch books");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []); // Empty dependency array: runs once on mount

  const handleCategoryClick = (category) => setCurrentCategory(category);
  const handlePriceRangeChange = (e) => setCurrentPriceFilter(e.target.value);
  const handleSortChange = (e) => setCurrentSort(e.target.value);
  const handleResetFilters = () => {
    setCurrentCategory("All Books");
    setCurrentPriceFilter("all");
    setCurrentSort("relevance");
  };

  // 3. Add loading and error UI
  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16">
        <div className="bg-white border-b border-gray-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 py-4">
              {["All Books", "Fiction", "Non-Fiction", "Mystery", "Science Fiction", "Romance", "Thriller", "Other"].map(category => (
                <Link key={category} to="#" 
                  className={`${currentCategory === category ? "text-purple-600 border-b-2 border-purple-600 pb-4 -mb-4" : "text-gray-600 hover:text-purple-600"}`} 
                  onClick={(e)=>{e.preventDefault(); handleCategoryClick(category);}}>{category}</Link>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xs px-4 py-3 transition-all">
            <div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-800 tracking-tight">Filter & Sort Books</h2>
              <p className="text-sm text-gray-500 hidden sm:block">Refine your results by price or sort preferences</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative">
                <select value={currentSort} onChange={handleSortChange} className="appearance-none px-4 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
                  <option value="relevance">Sort by: Relevance</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating-desc">Rating: High to Low</option>
                  <option value="rating-asc">Rating: Low to High</option>
                  <option value="quantity-desc">Quantity: High to Low</option>
                  <option value="quantity-asc">Quantity: Low to High</option>
                  <option value="newest">Newest First</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-[15px] text-gray-500 pointer-events-none text-xs"></i>
              </div>
              <div className="relative">
                <select value={currentPriceFilter} onChange={handlePriceRangeChange} className="appearance-none px-4 py-2.5 pr-10 rounded-lg border border-gray-300 bg-white text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition">
                  <option value="all">All Prices</option>
                  <option value="under500">Under ₹500</option>
                  <option value="500-1000">₹500 - ₹1000</option>
                  <option value="1000-2000">₹1000 - ₹2000</option>
                  <option value="2000-3000">₹2000 - ₹3000</option>
                  <option value="over3000">Over ₹3000</option>
                </select>
                <i className="fas fa-chevron-down absolute right-3 top-[15px] text-gray-500 pointer-events-none text-xs"></i>
              </div>
              <button onClick={handleResetFilters} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition">
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* 4. Pass fetched books. Filtering not applied yet. */}
          <BookGrid books={allBooks} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";

const Dashboard = () => {
  const [data, setData] = useState({ newlyBooks: [], mostSoldBooks: [], trendingBooks: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="bg-gray-50">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          <Link to="/buyer/dashboard" className="text-2xl font-bold text-purple-600">PubliShelf</Link>
          <div className="flex items-center space-x-4">
            <Link to="/buyer/cart#wishlist-section"><FaHeart /></Link>
            <Link to="/buyer/cart"><FaShoppingCart /></Link>
            <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}><FaBars /></button>
          </div>
        </div>
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t">
            <Link to="/buyer/cart#wishlist-section" className="block px-4 py-2 text-gray-700">Wishlist</Link>
            <Link to="/buyer/cart" className="block px-4 py-2 text-gray-700">Cart</Link>
          </div>
        )}
      </nav>

      <section className="py-12 pt-20 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold mb-8">Newly Added Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.newlyBooks.map((b) => <div key={b._id} className="bg-white p-4 rounded-lg shadow">Book</div>)}
        </div>
      </section>

      <section className="py-12 bg-white px-6">
        <h2 className="text-3xl font-bold mb-8">Most Sold Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.mostSoldBooks.map((b) => <div key={b._id} className="bg-white p-4 rounded-lg shadow">Book</div>)}
        </div>
      </section>

      <section className="py-12 bg-gray-50 px-6">
        <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.trendingBooks.map((b) => <div key={b._id} className="bg-white p-4 rounded-lg shadow">Book</div>)}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

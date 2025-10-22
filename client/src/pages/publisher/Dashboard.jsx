import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBook, FaGavel } from "react-icons/fa";
import { getDashboard } from "../../../services/publisher.services.js";

const PublisherDashboard = () => {
  const [data, setData] = useState({
    publisher: { firstname: "", lastname: "", status: "approved" },
    analytics: { booksSold: 0, totalRevenue: 0, mostSoldBook: null, topGenres: [] },
    books: [],
    auctions: [],
    activities: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const response = await getDashboard();
      if (response.success) setData(response.data);
      else setError(response.message);
    } catch {
      setError("Failed to fetch dashboard");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="bg-gray-50">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">PubliShelf</Link>
          <span className="text-gray-700">{data.publisher.firstname} {data.publisher.lastname}</span>
        </div>
      </nav>

      <div className="pt-20 max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Publisher Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900">Books Sold</h3>
            <p className="text-2xl font-bold text-purple-600 mt-2">{data.analytics.booksSold}</p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Publications</h2>
          {data.books.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.books.map((b) => (
                <div key={b._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={b.image} alt={b.title} className="w-full h-80 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-1">{b.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-sm">No recent publications found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublisherDashboard;

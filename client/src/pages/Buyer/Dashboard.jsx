import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState({ newlyBooks: [], mostSoldBooks: [], trendingBooks: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
          <Link to="/logout" className="text-gray-700">Logout</Link>
        </div>
      </nav>

      <main className="pt-20 px-6">
        <h2 className="text-3xl font-bold mb-6">Newly Added Books</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {data.newlyBooks.map((b) => <div key={b._id} className="bg-white p-4 rounded-lg shadow">Book</div>)}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

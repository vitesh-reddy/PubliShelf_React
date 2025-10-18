import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PublisherDashboard = () => {
  const [data, setData] = useState({
    publisher: { firstname: "John", lastname: "Doe", status: "approved" },
    analytics: { booksSold: 0, totalRevenue: 0, mostSoldBook: null, topGenres: [] },
  });

  return (
    <div className="bg-gray-50">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">PubliShelf</Link>
          <span className="text-gray-700">{data.publisher.firstname} {data.publisher.lastname}</span>
        </div>
      </nav>

      <div className="pt-20 max-w-7xl mx-auto px-4">
        {data.publisher.status !== "approved" && (
          <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded-lg">
            <p className="font-medium">Approval Status: {data.publisher.status}</p>
          </div>
        )}

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Publisher Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900">Books Sold</h3>
            <p className="text-2xl font-bold text-purple-600 mt-2">{data.analytics.booksSold}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherDashboard;

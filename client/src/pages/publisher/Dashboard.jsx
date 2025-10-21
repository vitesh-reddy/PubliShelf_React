import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaGavel } from "react-icons/fa";

const PublisherDashboard = () => {
  const data = {
    publisher: { firstname: "John", lastname: "Doe", status: "approved" },
    analytics: { booksSold: 50, totalRevenue: 12000, mostSoldBook: { title: "Mystery Tales", count: 30 }, topGenres: [] },
  };

  return (
    <div className="bg-gray-50">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link to="/publisher/publish-book" className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="bg-purple-500 p-3 rounded-lg"><FaBook className="text-2xl" /></div>
              <div>
                <h3 className="text-lg font-semibold">Publish New Book</h3>
                <p className="text-purple-200">List your book for sale</p>
              </div>
            </div>
          </Link>

          <Link to="/publisher/sell-antique" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="bg-indigo-500 p-3 rounded-lg"><FaGavel className="text-2xl" /></div>
              <div>
                <h3 className="text-lg font-semibold">Sell Antique Book</h3>
                <p className="text-indigo-200">Start an auction</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PublisherDashboard;

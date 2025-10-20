import React from "react";
import { Link } from "react-router-dom";

const PublisherDashboard = () => {
  const data = {
    publisher: { firstname: "John", lastname: "Doe", status: "approved" },
    analytics: {
      booksSold: 50,
      totalRevenue: 12000,
      mostSoldBook: { title: "Mystery Tales", count: 30 },
      topGenres: [{ genre: "Fiction", count: 15 }, { genre: "Thriller", count: 10 }],
    },
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
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900">Total Revenue</h3>
            <p className="text-2xl font-bold text-purple-600 mt-2">₹{data.analytics.totalRevenue.toFixed(2)}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900">Most Sold Book</h3>
            <p className="text-lg font-bold text-purple-600 mt-2">{data.analytics.mostSoldBook.title}</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900">Top Genres</h3>
            <ul className="mt-2 text-sm text-gray-600">
              {data.analytics.topGenres.map((g) => <li key={g.genre}>{g.genre}: {g.count}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublisherDashboard;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PublisherDashboard = () => {
  const [data, setData] = useState({ publisher: { firstname: "", lastname: "" } });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData({ publisher: { firstname: "John", lastname: "Doe" } });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="bg-gray-50">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">PubliShelf</Link>
            <span className="text-gray-700">{data.publisher.firstname} {data.publisher.lastname}</span>
          </div>
        </div>
      </nav>
      <div className="pt-20 text-center text-3xl font-bold">Publisher Dashboard</div>
    </div>
  );
};

export default PublisherDashboard;

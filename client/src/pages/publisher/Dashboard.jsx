import React, { useState, useEffect } from "react";

const PublisherDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setData({});
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>Publisher Dashboard</h1>
    </div>
  );
};

export default PublisherDashboard;

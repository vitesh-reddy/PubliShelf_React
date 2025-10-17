//client/src/pages/buyer/dashboard/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaHeart, FaShoppingCart, FaUser, FaBookOpen, FaSearch, FaBars } from "react-icons/fa";
import { getDashboard } from "../../../services/buyer.services.js";
import BookCard from "./components/BookCard.jsx";

const Dashboard = () => {
  const [data, setData] = useState({ newlyBooks: [], mostSoldBooks: [], trendingBooks: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [buyerName, setBuyerName] = useState("Buyer"); // Assume from auth context
  const navigate = useNavigate();

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
  }, []);

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/auth/login");
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;

  return (
    <div className="bg-gray-50">
      
    </div>
  );
};

export default Dashboard;
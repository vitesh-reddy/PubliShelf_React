// client/src/pages/publisher/profile/Profile.jsx
import React, { useState, useEffect } from "react";
import { getDashboard } from "../../../services/publisher.services.js";

const Profile = () => {
  const [publisher, setPublisher] = useState(null);
  const [soldBooks, setSoldBooks] = useState([]);
  const [analytics, setAnalytics] = useState({ totalRevenue: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [editForm, setEditForm] = useState({ name: "", email: "", publishingHouse: "" });
  const [showBookEditModal, setShowBookEditModal] = useState(false);
  const [editBookForm, setEditBookForm] = useState({});
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await getDashboard();
      if (response.success) {
        setPublisher(response.data.publisher);
        setSoldBooks(response.data.books || []);
        setAnalytics(response.data.analytics || { totalRevenue: 0 });
        setEditForm({
          name: `${response.data.publisher.firstname} ${response.data.publisher.lastname}`,
          email: response.data.publisher.email,
          publishingHouse: response.data.publisher.publishingHouse,
        });
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  const openEditProfile = () => {
    setShowEditModal(true);
  };

  const handleEditProfileSubmit = async (e) => {
    e.preventDefault();
    alert("Profile updated!");
    setShowEditModal(false);
    fetchProfile();
  };

  const openEditBookModal = (book) => {
    setSelectedBook(book);
    setEditBookForm({
      title: book.title,
      author: book.author,
      description: book.description,
      genre: book.genre,
      basePrice: book.basePrice,
      totalQuantity: book.totalQuantity,
      images: book.images.join(","),
    });
    setShowBookEditModal(true);
  };

  const handleEditBookSubmit = async (e) => {
    e.preventDefault();
    alert("Book updated!");
    setShowBookEditModal(false);
    fetchProfile();
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  if (!publisher) return <div className="min-h-screen flex items-center justify-center">Profile not found</div>;

  return (
    <div className="bg-gray-50 font-sans pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-[350px_1fr] gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-purple-100">
          <div className="text-center pb-5">
            <div className="profile-pic" />
            <h2 className="text-2xl font-bold text-indigo-700">{publisher.firstname} {publisher.lastname}</h2>
            <p className="text-gray-600 text-sm">Member since {new Date(publisher.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 my-5 p-4 bg-gray-100 rounded-lg">
            <div className="text-center p-3 bg-white rounded-lg hover:scale-105 transition-transform">
              <span className="block text-purple-600 font-semibold text-lg">{soldBooks.length}</span>
              <span className="text-gray-600 text-sm">Books Sold</span>
            </div>
            <div className="text-center p-3 bg-white rounded-lg hover:scale-105 transition-transform">
              <span className="block text-purple-600 font-semibold text-lg">₹{analytics.totalRevenue.toFixed(2)}</span>
              <span className="text-gray-600 text-sm">Revenue</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="grid grid-cols-[120px_1fr] p-3 bg-white rounded-lg hover:bg-purple-50 transition-colors">
              <span className="text-indigo-700 font-semibold text-sm">Name:</span>
              <span className="text-gray-700 text-sm">{publisher.firstname} {publisher.lastname}</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] p-3 bg-white rounded-lg hover:bg-purple-50 transition-colors">
              <span className="text-indigo-700 font-semibold text-sm">Email:</span>
              <span className="text-gray-700 text-sm">{publisher.email}</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] p-3 bg-white rounded-lg hover:bg-purple-50 transition-colors">
              <span className="text-indigo-700 font-semibold text-sm">Publishing House:</span>
              <span className="text-gray-700 text-sm">{publisher.publishingHouse}</span>
            </div>
            <div className="grid grid-cols-[120px_1fr] p-3 bg-white rounded-lg hover:bg-purple-50 transition-colors">
              <span className="text-indigo-700 font-semibold text-sm">Status:</span>
              <span className="text-gray-700 text-sm">{publisher.status.charAt(0).toUpperCase() + publisher.status.slice(1)}</span>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={openEditProfile} className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:brightness-110 hover:-translate-y-1 transition-all font-semibold text-sm uppercase">
              Edit Profile
            </button>
            <button className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 hover:-translate-y-1 transition-all font-semibold text-sm uppercase">
              Logout
            </button>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            {soldBooks.length > 0 ? (
              soldBooks.map((book) => (
                <div key={book._id} className="grid md:grid-cols-[120px_1fr_200px] gap-6 p-5 mb-5
// client/src/pages/publisher/profile/Profile.jsx
import React, { useState, useEffect } from "react";

const Profile = () => {
  const [publisher, setPublisher] = useState(null);
  const [soldBooks, setSoldBooks] = useState([]);
  const [analytics, setAnalytics] = useState({ totalRevenue: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const shouldFail = false;
      if (shouldFail) {
        setError("Failed to fetch profile");
        setLoading(false);
      } else {
        setPublisher({
          firstname: "John",
          lastname: "Doe",
          email: "john@example.com",
          publishingHouse: "Doe Publishing",
          status: "active",
          createdAt: "2024-01-15T00:00:00.000Z"
        });
        setSoldBooks([
          {
            _id: "1",
            title: "The Great Adventure",
            author: "Jane Smith",
            description: "An epic journey across unknown lands.",
            genre: "Fiction",
            basePrice: 299,
            totalQuantity: 150,
            totalRevenue: 44850,
            images: ["https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=120"]
          }
        ]);
        setAnalytics({ totalRevenue: 44850 });
        setLoading(false);
      }
    }, 800);
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  if (!publisher) return <div className="min-h-screen flex items-center justify-center">Profile not found</div>;

  return (
    <div className="bg-gray-50 font-sans pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8 grid lg:grid-cols-[350px_1fr] gap-6">
        <div className="bg-white rounded-xl shadow-lg p-6 sticky top-20 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border border-purple-100">
          <div className="text-center pb-5">
            <div className="profile-pic" style={{
              width: '140px', height: '140px', background: 'linear-gradient(135deg, #8b5cf6, #6b48ff)', borderRadius: '50%',
              margin: '0 auto 15px', position: 'relative', overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '60px', fontWeight: 700 }}>
                {publisher.firstname.charAt(0)}
              </div>
            </div>
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
            <button className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-lg hover:brightness-110 hover:-translate-y-1 transition-all font-semibold text-sm uppercase">
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
                <div key={book._id} className="grid md:grid-cols-[120px_1fr_200px] gap-6 p-5 mb-5 bg-white rounded-lg shadow-md hover:shadow-xl hover:translate-x-2 transition-all slide-in border border-purple-100">
                  <img src={book.images[0] || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=120"} alt={book.title} className="w-32 h-40 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform" />
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-purple-600">{book.title}</h4>
                    <p className="text-gray-600 text-sm"><strong>Author:</strong> {book.author}</p>
                    <p className="text-gray-600 text-sm"><strong>Genre:</strong> {book.genre}</p>
                    <p className="text-gray-600 text-sm"><strong>Price:</strong> ₹{book.basePrice}</p>
                    <p className="text-gray-600 text-sm"><strong>Quantity Sold:</strong> {book.totalQuantity}</p>
                    <p className="text-gray-600 text-sm"><strong>Revenue:</strong> ₹{book.totalRevenue.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col gap-3 justify-center">
                    <button className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                      Edit Book
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-sm">No books sold yet.</p>
            )}
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">PubliShelf</span>
              <p className="text-sm mt-2">© 2025 PubliShelf. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/terms" className="text-gray-300 hover:text-purple-400 text-sm">Terms and Conditions</a>
              <a href="/privacy" className="text-gray-300 hover:text-purple-400 text-sm">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Profile;
// client/src/pages/buyer/profile/Profile.jsx
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => (
  <nav className="bg-white shadow-sm p-4 fixed top-0 left-0 right-0 z-50 border-b border-gray-100">
    <div className="max-w-[1400px] mx-auto flex justify-between items-center">
      <h1 className="text-[#6b48ff] text-2xl font-bold tracking-tight">PubliShelf</h1>
      <div className="flex gap-6">
        <span className="text-[#555] hover:text-[#6b48ff] transition-colors cursor-pointer text-sm font-medium">Home</span>
        <span className="text-[#555] hover:text-[#6b48ff] transition-colors cursor-pointer text-sm font-medium">Books</span>
        <span className="text-[#6b48ff] font-semibold text-sm">Profile</span>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-gradient-to-r from-[#6b48ff] to-[#8a4af3] text-white py-10 mt-24">
    <div className="max-w-[1400px] mx-auto text-center">
      <p className="text-sm opacity-90">© 2025 PubliShelf. All rights reserved.</p>
    </div>
  </footer>
);

const BuyerProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [formErrors, setFormErrors] = useState({
    emailError: "",
    currentPasswordError: "",
    passwordError: "",
    generalError: "",
  });
  const [isSaving, setIsSaving] = useState(false);
  const saveBtnRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const mockUser = {
        _id: "123",
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        createdAt: "2023-01-15T00:00:00.000Z",
        orders: [
          {
            _id: "o1",
            book: {
              title: "The Great Gatsby",
              author: "F. Scott Fitzgerald",
              genre: "Classic",
              price: 599,
              image: "https://m.media-amazon.com/images/I/61R+Cpm+HxL._SL1000_.jpg",
              description: "A classic American novel set in the Jazz Age."
            },
            quantity: 1,
            orderDate: "2025-03-10T00:00:00.000Z",
            delivered: true
          }
        ],
        wishlist: [
          {
            _id: "b1",
            title: "1984",
            author: "George Orwell",
            price: 399,
            image: "https://m.media-amazon.com/images/I/61R+Cpm+HxL._SL1000_.jpg"
          }
        ]
      };
      setUser(mockUser);
      setFormData({
        firstname: mockUser.firstname,
        lastname: mockUser.lastname,
        email: mockUser.email,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const getTimeAgo = (date) => {
    return `Member since ${new Date(date).toLocaleString("en-US", { month: "long", year: "numeric" })}`;
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({
      emailError: "",
      currentPasswordError: "",
      passwordError: "",
      generalError: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, currentPassword, newPassword, confirmPassword } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormErrors({ ...formErrors, generalError: "Please enter a valid email address." });
      return;
    }

    if (newPassword || confirmPassword) {
      if (!currentPassword) {
        setFormErrors({ ...formErrors, currentPasswordError: "Current password is required to change password." });
        return;
      }
      if (newPassword !== confirmPassword) {
        setFormErrors({ ...formErrors, passwordError: "New passwords do not match." });
        return;
      }
    }

    try {
      setIsSaving(true);
      saveBtnRef.current.innerText = "Saving...";
      saveBtnRef.current.disabled = true;

      await new Promise(resolve => setTimeout(resolve, 1000));

      setUser({
        ...user,
        firstname: formData.firstname.trim(),
        lastname: formData.lastname.trim(),
        email: formData.email.trim(),
      });
      setShowEditDialog(false);
      setFormData({
        ...formData,
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (err) {
      setFormErrors({ ...formErrors, generalError: "Something went wrong. Please try again." });
    } finally {
      setIsSaving(false);
      saveBtnRef.current.innerText = "Save Changes";
      saveBtnRef.current.disabled = false;
    }
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
    setFormErrors({
      emailError: "",
      currentPasswordError: "",
      passwordError: "",
      generalError: "",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fafafa] to-[#f0f0ff]">
        <div className="text-[#6b48ff] text-lg font-medium">Loading your profile...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#fafafa] to-[#f5f3ff] text-[#333] font-['Poppins',_sans-serif]">
      <Navbar />
      <div className="flex-1 mt-20">
        <div className="max-w-[1400px] mx-auto px-[20px] py-6 mb-[20px] grid grid-cols-[minmax(320px,360px)_1fr] gap-[30px] max-lg:grid-cols-[300px_1fr] max-md:grid-cols-1">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24 border border-purple-100 backdrop-blur-sm">
            <div className="text-center pb-6">
              <div className="w-36 h-36 bg-gradient-to-br from-[#8a4af3] to-[#6b48ff] rounded-full mb-4 mx-auto relative overflow-hidden border-4 border-white shadow-xl">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl font-bold">
                  {user.firstname[0].toUpperCase()}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#6b48ff] mb-2">
                {user.firstname} {user.lastname}
              </h2>
              <p className="text-[#777] text-sm">{getTimeAgo(user.createdAt)}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-[#f8f6ff] rounded-xl">
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <span className="block text-[#8a4af3] font-bold text-xl">{user.orders.length}</span>
                <span className="text-xs text-[#666]">Orders</span>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <span className="block text-[#8a4af3] font-bold text-xl">{user.wishlist.length}</span>
                <span className="text-xs text-[#666]">Wishlist</span>
              </div>
            </div>

            <div className="mt-6 space-y-2">
              {[
                { label: "First Name", value: user.firstname },
                { label: "Last Name", value: user.lastname },
                { label: "Email", value: user.email },
              ].map((item, idx) => (
                <div key={idx} className="grid grid-cols-[130px_1fr] p-3 bg-white rounded-lg border border-[#f0e6ff] text-sm">
                  <span className="text-[#6b48ff] font-medium">{item.label}:</span>
                  <span className="text-[#444] truncate">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-3">
              <button
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#8a4af3] to-[#6b48ff] text-white font-semibold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
                onClick={() => setShowEditDialog(true)}
              >
                Edit Profile
              </button>
              <button className="flex-1 py-3.5 rounded-xl bg-gray-100 text-gray-600 font-semibold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors">
                Logout
              </button>
            </div>
          </div>

          {/* Orders and Wishlist */}
          <div className="space-y-8">
            {/* Orders */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-50">
              <h3 className="text-[#6b48ff] mb-6 relative pb-3 text-2xl font-bold inline-block">
                Your Orders
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-[#8a4af3] to-[#6b48ff] rounded-full"></span>
              </h3>
              {user.orders.length > 0 ? (
                user.orders.map(order => (
                  <div key={order._id} className="flex flex-col md:flex-row justify-between bg-gradient-to-r from-[#fcfaff] to-white rounded-xl shadow-md p-6 mb-6 gap-6 border border-purple-100">
                    <div className="flex-1">
                      <h4 className="text-[#8a4af3] mb-3 text-lg font-bold">{order.book.title}</h4>
                      <div className="space-y-1 text-sm text-[#555]">
                        <p><strong className="text-[#6b48ff]">Author:</strong> {order.book.author}</p>
                        <p><strong className="text-[#6b48ff]">Genre:</strong> {order.book.genre}</p>
                        <p><strong className="text-[#6b48ff]">Price:</strong> ₹{order.book.price}</p>
                        <p><strong className="text-[#6b48ff]">Quantity:</strong> {order.quantity}</p>
                        <p><strong className="text-[#6b48ff]">Order Date:</strong> {new Date(order.orderDate).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric" })}</p>
                        <p><strong className="text-[#6b48ff]">Description:</strong> {order.book.description}</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <img
                        src={order.book.image}
                        alt={order.book.title}
                        className="w-44 h-60 object-cover rounded-lg shadow-md"
                      />
                      <span className={`mt-3 px-4 py-1.5 rounded-full text-sm font-medium ${order.delivered ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}>
                        {order.delivered ? "Delivered" : "Pending"}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-[#777] py-8">No orders yet.</p>
              )}
            </div>

            {/* Wishlist */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-purple-50">
              <h3 className="text-[#6b48ff] mb-6 relative pb-3 text-2xl font-bold inline-block">
                Your Wishlist
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-gradient-to-r from-[#8a4af3] to-[#6b48ff] rounded-full"></span>
              </h3>
              {user.wishlist.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                  {user.wishlist.map(book => (
                    <div key={book._id} className="group text-center p还原-4 bg-gradient-to-b from-white to-[#f9f7ff] rounded-xl shadow hover:shadow-lg transition-all duration-300 border border-purple-50">
                      <div className="mb-3 overflow-hidden rounded-lg">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-[#8a4af3] text-sm font-semibold line-clamp-1">{book.title}</h4>
                      <p className="text-xs text-[#666] mt-1">{book.author}</p>
                      <p className="text-[#6b48ff] font-bold text-sm mt-2">₹{book.price}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-[#777] py-8">Your wishlist is empty.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Dialog */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] transition-opacity duration-300 ${showEditDialog ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={closeEditDialog}
      >
        <div
          className={`bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl transition-transform duration-300 ${showEditDialog ? "scale-100" : "scale-90"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl font-bold text-[#6b48ff] mb-6 text-center">Edit Profile</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8a4af3] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8a4af3] focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8a4af3] focus:border-transparent transition-all"
              />
            </div>

            <div className="pt-4 border-t border-gray-100">
              <h4 className="text-[#6b48ff] font-semibold mb-4">Change Password</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8a4af3] focus:border-transparent transition-all"
                  />
                  <p className={`text-red-500 text-xs mt-1 ${formErrors.currentPasswordError ? "block" : "hidden"}`}>
                    {formErrors.currentPasswordError}
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8a4af3] focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8a4af3] focus:border-transparent transition-all"
                  />
                  <p className={`text-red-500 text-xs mt-1 ${formErrors.passwordError ? "block" : "hidden"}`}>
                    {formErrors.passwordError}
                  </p>
                </div>
              </div>
            </div>

            <p className={`text-red-500 text-sm text-center ${formErrors.generalError ? "block" : "hidden"}`}>
              {formErrors.generalError}
            </p>

            <div className="flex gap-3 mt-6">
              <button
                type="button"
                onClick={closeEditDialog}
                className="flex-1 py-3 rounded-xl bg-gray-100 text-gray-700 font-semibold text-sm uppercase tracking-wider hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                ref={saveBtnRef}
                disabled={isSaving}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#8a4af3] to-[#6b48ff] text-white font-semibold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BuyerProfile;
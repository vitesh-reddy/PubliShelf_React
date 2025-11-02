// client/src/pages/buyer/profile/Profile.jsx
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => (
  <nav className="bg-white shadow-md p-4 fixed top-0 left-0 right-0 z-50">
    <div className="max-w-[1400px] mx-auto flex justify-between items-center">
      <h1 className="text-[#6b48ff] text-2xl font-bold">PubliShelf</h1>
      <div className="flex gap-4">
        <span className="text-[#666]">Home</span>
        <span className="text-[#666]">Books</span>
        <span className="text-[#666]">Profile</span>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-[#6b48ff] text-white py-8 mt-20">
    <div className="max-w-[1400px] mx-auto text-center">
      <p>© 2025 PubliShelf. All rights reserved.</p>
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
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
    setFormData({
      ...formData,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] text-[#333] font-['Poppins',_sans-serif]">
      <Navbar />
      <div className="flex-1 mt-20">
        <div className="max-w-[1400px] mx-auto px-[20px] mb-[20px] grid grid-cols-[350px_1fr] gap-[25px] max-lg:grid-cols-[300px_1fr] max-md:grid-cols-1">
          {/* Profile Card */}
          <div className="bg-white rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-[30px] sticky top-[20px] border border-[rgba(138,74,243,0.1)]">
            <div className="text-center pb-[20px]">
              <div className="w-[140px] h-[140px] bg-[linear-gradient(135deg,#8a4af3,#6b48ff)] rounded-full mb-[15px] mx-auto relative overflow-hidden border-4 border-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[60px] font-bold">
                  {user.firstname[0].toUpperCase()}
                </span>
              </div>
              <h2 className="text-3xl font-bold text-[#6b48ff] mb-[10px]">
                {user.firstname} {user.lastname}
              </h2>
              <p className="text-[#666] text-[14px]">{getTimeAgo(user.createdAt)}</p>
            </div>

            <div className="grid grid-cols-2 gap-[15px] mt-[20px] p-[15px] bg-[#f5f5f5] rounded-[10px]">
              <div className="text-center p-[10px] bg-white rounded-[8px]">
                <span className="block text-[#8a4af3] font-semibold text-[18px]">{user.orders.length}</span>
                Orders
              </div>
              <div className="text-center p-[10px] bg-white rounded-[8px]">
                <span className="block text-[#8a4af3] font-semibold text-[18px]">{user.wishlist.length}</span>
                Wishlist
              </div>
            </div>

            <div>
              <div className="grid grid-cols-[130px_1fr] p-[15px] border-b border-[#f5f5f5] bg-white my-[5px] rounded-[8px]">
                <span className="text-[#6b48ff] font-semibold text-[14px]">First Name:</span>
                <span className="text-[#444] text-[14px]">{user.firstname}</span>
              </div>
              <div className="grid grid-cols-[130px_1fr] p-[15px] border-b border-[#f5f5f5] bg-white my-[5px] rounded-[8px]">
                <span className="text-[#6b48ff] font-semibold text-[14px]">Last Name:</span>
                <span className="text-[#444] text-[14px]">{user.lastname}</span>
              </div>
              <div className="grid grid-cols-[130px_1fr] p-[15px] border-b border-[#f5f5f5] bg-white my-[5px] rounded-[8px]">
                <span className="text-[#6b48ff] font-semibold text-[14px]">Email:</span>
                <span className="text-[#444] text-[14px]">{user.email}</span>
              </div>
            </div>

            <div className="mt-[25px] flex gap-[15px]">
              <button
                className="flex-1 p-[14px] border-none rounded-[8px] bg-[linear-gradient(135deg,#8a4af3,#6b48ff)] text-white font-semibold text-[14px] uppercase tracking-[0.5px]"
                onClick={() => setShowEditDialog(true)}
              >
                Edit Profile
              </button>
              <button className="flex-1 p-[14px] border-none rounded-[8px] bg-[#eee] text-[#666] font-semibold text-[14px] uppercase tracking-[0.5px]">
                Logout
              </button>
            </div>
          </div>

          {/* Orders and Wishlist */}
          <div>
            <div className="p-[20px] bg-white rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
              <h3 className="text-[#6b48ff] mb-[25px] relative pb-[10px] text-[24px] font-semibold">
                Your Orders
                <span className="absolute bottom-0 left-0 w-[60px] h-[4px] bg-[linear-gradient(135deg,#8a4af3,#6b48ff)] rounded-[2px]"></span>
              </h3>
              {user.orders.length > 0 ? (
                user.orders.map(order => (
                  <div key={order._id} className="flex justify-between bg-white rounded-[12px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-[20px] mb-[20px] gap-[25px] border border-[rgba(138,74,243,0.1)]">
                    <div>
                      <h4 className="text-[#8a4af3] mb-[12px] text-[18px] font-semibold">{order.book.title}</h4>
                      <p className="my-[8px] mx-0 text-[14px]"><strong className="text-[#6b48ff]">Author:</strong> {order.book.author}</p>
                      <p className="my-[8px] mx-0 text-[14px]"><strong className="text-[#6b48ff]">Genre:</strong> {order.book.genre}</p>
                      <p className="my-[8px] mx-0 text-[14px]"><strong className="text-[#6b48ff]">Price:</strong> ₹{order.book.price}</p>
                      <p className="my-[8px] mx-0 text-[14px]"><strong className="text-[#6b48ff]">Quantity:</strong> {order.quantity}</p>
                      <p className="my-[8px] mx-0 text-[14px]"><strong className="text-[#6b48ff]">Order Date:</strong> {new Date(order.orderDate).toLocaleString("en-US", { month: "short", day: "2-digit", year: "numeric" })}</p>
                      <p className="my-[8px] mx-0 text-[14px]"><strong className="text-[#6b48ff]">Description:</strong> {order.book.description}</p>
                    </div>
                    <div className="min-w-[23%]">
                      <img src={order.book.image} alt={order.book.title} className="w-[175px] h-[250px] object-cover rounded-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.1)]" />
                      <div className="mt-[10px] text-center">
                        <span className="block p-[12px] bg-[#f5f5f5] text-[#6b48ff] font-semibold rounded-[6px]">
                          {order.delivered ? "Delivered" : "Pending"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-[#666]">No orders yet.</p>
              )}
            </div>

            <div className="bg-white rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-[20px] mt-[25px]">
              <h3 className="text-[#6b48ff] mb-[25px] relative pb-[10px] text-[24px] font-semibold">
                Your Wishlist
                <span className="absolute bottom-0 left-0 w-[60px] h-[4px] bg-[linear-gradient(135deg,#8a4af3,#6b48ff)] rounded-[2px]"></span>
              </h3>
              {user.wishlist.length > 0 ? (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[20px] mt-[20px]">
                  {user.wishlist.map(book => (
                    <div key={book._id} className="text-center p-[15px] bg-white rounded-[10px]">
                      <img src={book.image} alt={book.title} className="mx-auto w-[100px] h-[130px] object-cover mb-[10px] rounded-[6px]" />
                      <h4 className="text-[#8a4af3] text-[14px] mb-[5px]">{book.title}</h4>
                      <p className="text-[12px] text-[#666]">{book.author}</p>
                      <p className="text-[12px] text-[#6b48ff] font-semibold">₹{book.price}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-[#666]">Your wishlist is empty.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Dialog */}
      <div
        className={`fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-[100] transition-opacity duration-300 ${showEditDialog ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={closeEditDialog}
      >
        <div
          className={`bg-white rounded-[12px] p-[30px] w-full max-w-[500px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-transform duration-300 ${showEditDialog ? "scale-100" : "scale-90"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-black mb-[20px] text-[20px] font-semibold">Edit Profile</h3>
          <form className="w-full flex flex-col justify-center items-center gap-[5px]">
            <div>
              <label htmlFor="firstname" className="block mb-[3px] text-[rgb(55,65,81)] text-[12px]">
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
                className="w-[440px] px-[12px] py-[10px] border border-[#f5f5f5] rounded-[6px] text-[14px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:border-[#8a4af3] focus:shadow-[0_0_0_3px_rgba(138,74,243,0.1)]"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block mb-[3px] text-[rgb(55,65,81)] text-[12px]">
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
                className="w-[440px] px-[12px] py-[10px] border border-[#f5f5f5] rounded-[6px] text-[14px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:border-[#8a4af3] focus:shadow-[0_0_0_3px_rgba(138,74,243,0.1)]"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-[3px] text-[rgb(55,65,81)] text-[12px]">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-[440px] px-[12px] py-[10px] border border-[#f5f5f5] rounded-[6px] text-[14px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:border-[#8a4af3] focus:shadow-[0_0_0_3px_rgba(138,74,243,0.1)]"
              />
            </div>
            <div className="w-full pt-[10px] border-t border-[#f5f5f5] mt-[15px]">
              <h4 className="text-[#6b48ff] mb-[15px] text-[16px]">Change Password</h4>
              <div>
                <label htmlFor="currentPassword" className="block mb-[3px] text-[rgb(55,65,81)] text-[12px]">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  className="w-[440px] px-[12px] py-[10px] border border-[#f5f5f5] rounded-[6px] text-[14px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:border-[#8a4af3] focus:shadow-[0_0_0_3px_rgba(138,74,243,0.1)]"
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block mb-[3px] text-[rgb(55,65,81)] text-[12px]">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className="w-[440px] px-[12px] py-[10px] border border-[#f5f5f5] rounded-[6px] text-[14px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:border-[#8a4af3] focus:shadow-[0_0_0_3px_rgba(138,74,243,0.1)]"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-[3px] text-[rgb(55,65,81)] text-[12px]">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-[440px] px-[12px] py-[10px] border border-[#f5f5f5] rounded-[6px] text-[14px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:border-[#8a4af3] focus:shadow-[0_0_0_3px_rgba(138,74,243,0.1)]"
                />
              </div>
            </div>
            <div className="flex gap-[10px] mt-[6px]">
              <button
                type="button"
                className="flex-1 border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-semibold uppercase tracking-[0.5px] p-[12px] text-[14px] bg-[#eee] text-[#666]"
                onClick={closeEditDialog}
              >
                Cancel
              </button>
              <button
                type="button"
                className="border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-semibold uppercase tracking-[0.5px] p-[12px] text-[14px] bg-[linear-gradient(135deg,#8a4af3,#6b48ff)] text-white"
                ref={saveBtnRef}
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
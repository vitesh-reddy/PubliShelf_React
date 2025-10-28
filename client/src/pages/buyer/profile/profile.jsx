// client/src/pages/buyer/profile/Profile.jsx
import React, { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BuyerProfile = () => {
  const [user] = useState({
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@example.com",
    createdAt: "2025-01-01T00:00:00Z",
    _id: "user123"
  });

  const [orders] = useState([
    {
      _id: "1",
      book: {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        price: 599,
        image: "https://m.media-amazon.com/images/I/61R+Cpm+HxL._SL1000_.jpg",
        description: "A classic American novel set in the Jazz Age."
      },
      quantity: 1,
      orderDate: "2025-10-15T10:00:00Z",
      delivered: true
    }
  ]);

  const [wishlist] = useState([
    {
      _id: "b1",
      title: "1984",
      author: "George Orwell",
      price: 499,
      image: "https://m.media-amazon.com/images/I/61R+Cpm+HxL._SL1000_.jpg"
    },
    {
      _id: "b2",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 649,
      image: "https://m.media-amazon.com/images/I/61R+Cpm+HxL._SL1000_.jpg"
    }
  ]);

  const getTimeAgo = (date) => {
    return `Member since ${new Date(date).toLocaleString("en-US", { month: "long", year: "numeric" })}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] text-[#333] leading-[1.6] overflow-x-hidden font-['Poppins',_sans-serif]">
      <Navbar />
     
      <div className="max-w-[1400px] mt-20 mb-[20px] mx-auto px-[20px] grid grid-cols-[350px_1fr] gap-[25px] max-lg:grid-cols-[300px_1fr] max-md:grid-cols-1">
        <div className="bg-white rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-[30px] sticky top-[20px] translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border border-[rgba(138,74,243,0.1)] hover:-translate-y-[8px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] max-md:static">
          <div className="text-center pb-[20px] relative">
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
          <div className="grid grid-cols-2 gap-[15px] mt-[5px] mb-[20px] p-[15px] bg-[#f5f5f5] rounded-[10px]">
            <div className="text-center p-[10px] bg-white rounded-[8px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105">
              <span className="block text-[#8a4af3] font-semibold text-[18px]">{orders.length}</span>
              Orders
            </div>
            <div className="text-center p-[10px] bg-white rounded-[8px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105">
              <span className="block text-[#8a4af3] font-semibold text-[18px]">{wishlist.length}</span>
              Wishlist
            </div>
          </div>
          <div>
            <div className="grid grid-cols-[130px_1fr] p-[15px] border-b border-[#f5f5f5] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white my-[5px] rounded-[8px] hover:bg-[rgba(138,74,243,0.05)]">
              <span className="text-[#6b48ff] font-semibold text-[14px]">First Name:</span>
              <span className="text-[#444] text-[14px]">{user.firstname}</span>
            </div>
            <div className="grid grid-cols-[130px_1fr] p-[15px] border-b border-[#f5f5f5] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white my-[5px] rounded-[8px] hover:bg-[rgba(138,74,243,0.05)]">
              <span className="text-[#6b48ff] font-semibold text-[14px]">Last Name:</span>
              <span className="text-[#444] text-[14px]">{user.lastname}</span>
            </div>
            <div className="grid grid-cols-[130px_1fr] p-[15px] border-b border-[#f5f5f5] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white my-[5px] rounded-[8px] hover:bg-[rgba(138,74,243,0.05)]">
              <span className="text-[#6b48ff] font-semibold text-[14px]">Email:</span>
              <span className="text-[#444] text-[14px]">{user.email}</span>
            </div>
          </div>
          <div className="mt-[25px] flex gap-[15px]">
            <button className="flex-1 p-[14px] border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-semibold text-[14px] uppercase tracking-[0.5px] bg-[linear-gradient(135deg,#8a4af3,#6b48ff)] text-white hover:brightness-110 hover:-translate-y-[2px]">
              Edit Profile
            </button>
            <button className="flex-1 p-[14px] border-none rounded-[8px] cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] font-semibold text-[14px] uppercase tracking-[0.5px] bg-[#eee] text-[#666] hover:bg-[#ddd] hover:-translate-y-[2px]">
              Logout
            </button>
          </div>
        </div>
        <div>
          <div className="p-[20px] bg-white rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
            <h3 className="text-[#6b48ff] mb-[25px] relative pb-[10px] text-[24px] font-semibold">
              Your Orders
              <span className="absolute bottom-0 left-0 w-[60px] h-[4px] bg-[linear-gradient(135deg,#8a4af3,#6b48ff)] rounded-[2px]"></span>
            </h3>
            {orders.length > 0 ? (
              orders.map((order) => (
                <div
                  key={order._id}
                  className="flex justify-between bg-white rounded-[12px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-[20px] mb-[20px] gap-[25px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] animate-[slideIn_0.5s_ease-out] border border-[rgba(138,74,243,0.1)] hover:translate-x-[8px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]"
                >
                  <div className="py-[10px] px-0">
                    <h4 className="text-[#8a4af3] mb-[12px] text-[18px] font-semibold">{order.book.title}</h4>
                    <p className="my-[8px] mx-0 text-[14px]">
                      <strong className="text-[#6b48ff]">Author:</strong> {order.book.author}
                    </p>
                    <p className="my-[8px] mx-0 text-[14px]">
                      <strong className="text-[#6b48ff]">Genre:</strong> {order.book.genre}
                    </p>
                    <p className="my-[8px] mx-0 text-[14px]">
                      <strong className="text-[#6b48ff]">Price:</strong> ₹{order.book.price}
                    </p>
                    <p className="my-[8px] mx-0 text-[14px]">
                      <strong className="text-[#6b48ff]">Quantity:</strong> {order.quantity}
                    </p>
                    <p className="my-[8px] mx-0 text-[14px]">
                      <strong className="text-[#6b48ff]">Order Date:</strong>{" "}
                      {new Date(order.orderDate).toLocaleString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                    <p className="my-[8px] mx-0 text-[14px] line-clamp-3">
                      <strong className="text-[#6b48ff]">Description:</strong>{" "}
                      {order.book.description}
                    </p>
                  </div>
                  <div className="min-w-[23%] space-y-2">
                    <img
                      src={order.book.image}
                      alt={order.book.title}
                      className="w-[175px] h-[250px] mx-auto object-cover rounded-[8px] shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105"
                    />
                    <div className="flex flex-col gap-[10px] justify-center items-stretch max-md:flex-row max-md:flex-wrap">
                      <span className="w-full text-center p-[12px] rounded-[6px] text-[14px] bg-[#f5f5f5] text-[#6b48ff] font-semibold">
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
            {wishlist.length > 0 ? (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-[20px] mt-[20px]">
                {wishlist.map((book) => (
                  <div
                    key={book._id}
                    className="text-center p-[15px] bg-white rounded-[10px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-[5px] hover:shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="mx-auto w-[100px] h-[130px] object-cover mb-[10px] rounded-[6px]"
                    />
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
      <Footer />
    </div>
  );
};

export default BuyerProfile;
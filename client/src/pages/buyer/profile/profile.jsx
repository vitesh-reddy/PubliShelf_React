// client/src/pages/buyer/profile/Profile.jsx
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BuyerProfile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa] text-[#333] leading-[1.6] overflow-x-hidden font-['Poppins',_sans-serif]">
      <Navbar />
     
      <div className="max-w-[1400px] mt-20 mb-[20px] mx-auto px-[20px] grid grid-cols-[350px_1fr] gap-[25px] max-lg:grid-cols-[300px_1fr] max-md:grid-cols-1">
        <div className="bg-white rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-[30px] sticky top-[20px] translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] border border-[rgba(138,74,243,0.1)] hover:-translate-y-[8px] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] max-md:static">
          <div className="text-center pb-[20px] relative">
            <div className="w-[140px] h-[140px] bg-[linear-gradient(135deg,#8a4af3,#6b48ff)] rounded-full mb-[15px] mx-auto relative overflow-hidden border-4 border-white shadow-[0_4px_15px_rgba(0,0,0,0.1)]">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[60px] font-bold">
                J
              </span>
            </div>
            <h2 className="text-3xl font-bold text-[#6b48ff] mb-[10px]">
              John Doe
            </h2>
            <p className="text-[#666] text-[14px]">Member since January 2025</p>
          </div>
          <div className="grid grid-cols-2 gap-[15px] mt-[5px] mb-[20px] p-[15px] bg-[#f5f5f5] rounded-[10px]">
            <div className="text-center p-[10px] bg-white rounded-[8px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105">
              <span className="block text-[#8a4af3] font-semibold text-[18px]">3</span>
              Orders
            </div>
            <div className="text-center p-[10px] bg-white rounded-[8px] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-105">
              <span className="block text-[#8a4af3] font-semibold text-[18px]">5</span>
              Wishlist
            </div>
          </div>
          <div>
            <div className="grid grid-cols-[130px_1fr] p-[15px] border-b border-[#f5f5f5] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white my-[5px] rounded-[8px] hover:bg-[rgba(138,74,243,0.05)]">
              <span className="text-[#6b48ff] font-semibold text-[14px]">First Name:</span>
              <span className="text-[#444] text-[14px]">John</span>
            </div>
            <div className="grid grid-cols-[130px_1fr] p-[15px] border-b border-[#f5f5f5] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white my-[5px] rounded-[8px] hover:bg-[rgba(138,74,243,0.05)]">
              <span className="text-[#6b48ff] font-semibold text-[14px]">Last Name:</span>
              <span className="text-[#444] text-[14px]">Doe</span>
            </div>
            <div className="grid grid-cols-[130px_1fr] p-[15px] border-b border-[#f5f5f5] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white my-[5px] rounded-[8px] hover:bg-[rgba(138,74,243,0.05)]">
              <span className="text-[#6b48ff] font-semibold text-[14px]">Email:</span>
              <span className="text-[#444] text-[14px]">john.doe@example.com</span>
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
            <p className="text-center text-[#666]">No orders yet.</p>
          </div>
          <div className="bg-white rounded-[16px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] p-[20px] mt-[25px]">
            <h3 className="text-[#6b48ff] mb-[25px] relative pb-[10px] text-[24px] font-semibold">
              Your Wishlist
              <span className="absolute bottom-0 left-0 w-[60px] h-[4px] bg-[linear-gradient(135deg,#8a4af3,#6b48ff)] rounded-[2px]"></span>
            </h3>
            <p className="text-center text-[#666]">Your wishlist is empty.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BuyerProfile;
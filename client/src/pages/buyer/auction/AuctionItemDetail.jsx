import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuctionItemDetail = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBook({
        _id: "1",
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic Fiction",
        condition: "Excellent",
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600",
        currentPrice: 2500,
        basePrice: 1500,
        description: "A classic American novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.",
        auctionEnd: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 5 * 60 * 60 * 1000 + 30 * 60 * 1000 + 15 * 1000).toISOString(),
        auctionStart: new Date(Date.now() - 1000 * 60 * 60).toISOString()
      });
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <div className="pt-16 pb-20 flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading auction item...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/buyer/dashboard" className="text-gray-700 hover:text-purple-600">
                  <i className="fas fa-home mr-2"></i>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                  <Link to="/buyer/auction-page" className="text-gray-700 hover:text-purple-600">Auctions</Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                  <span className="text-gray-500">{book.title}</span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <img src={book.image} alt={book.title} className="w-full h-96 object-cover transform transition-transform duration-500 hover:scale-105" />
                </div>
              </div>
              <div className="space-y-5">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{book.title}</h1>
                  <p className="text-base md:text-lg text-gray-600 mt-1">{book.author}</p>
                  <p className="text-gray-600 text-sm">Genre: {book.genre}</p>
                  <p className="text-gray-600 text-sm">Condition: {book.condition}</p>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <span className="text-green-600 font-medium">Active Auction</span>
                  <span className="text-gray-600">Ends in: <span className="font-semibold">2d 5h 30m 15s</span></span>
                </div>
                <div className="border-t border-b py-3">
                  <div className="flex items-baseline space-x-4">
                    <div>
                      <span className="text-3xl font-bold text-gray-900">₹{book.currentPrice || book.basePrice}</span>
                      <p className="text-gray-600 text-xs">Current Bid</p>
                    </div>
                    <div>
                      <span className="text-lg text-gray-600">₹{book.basePrice}</span>
                      <p className="text-gray-600 text-xs">Base Price</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Description</h3>
                  <p className="text-gray-600 text-sm">{book.description}</p>
                </div>
                <button className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 text-sm">
                  <i className="fas fa-gavel"></i>
                  <span>Join Auction</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuctionItemDetail;
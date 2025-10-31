import React, { useState, useEffect } from "react";

const Countdown = ({ target, type }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date(target);
      const diff = targetDate - now;
      if (diff <= 0) {
        setTimeLeft(type === "end" ? "Auction Ended" : "Auction Started");
        return true;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      return false;
    };

    if (calculateTimeLeft()) return;
    const intervalId = setInterval(() => {
      if (calculateTimeLeft()) {
        clearInterval(intervalId);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [target, type]);

  return <p className="text-sm font-semibold">{timeLeft}</p>;
};

const AuctionPage = () => {
  const [auctions, setAuctions] = useState({
    ongoingAuctions: [],
    futureAuctions: [],
    endedAuctions: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 800));
        setAuctions({
          ongoingAuctions: [
            {
              _id: "1",
              title: "The Great Gatsby",
              author: "F. Scott Fitzgerald",
              image: "https://via.placeholder.com/300x400",
              currentPrice: 850,
              basePrice: 500,
              auctionEnd: new Date(Date.now() + 86400000).toISOString(),
            },
          ],
          futureAuctions: [
            {
              _id: "2",
              title: "1984",
              author: "George Orwell",
              image: "https://via.placeholder.com/300x400",
              basePrice: 600,
              auctionStart: new Date(Date.now() + 172800000).toISOString(),
            },
          ],
          endedAuctions: [
            {
              _id: "3",
              title: "To Kill a Mockingbird",
              author: "Harper Lee",
              image: "https://via.placeholder.com/300x400",
              currentPrice: 1200,
            },
          ],
        });
      } catch (err) {
        setError("Failed to load auctions. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-lg text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <a href="/buyer/dashboard" className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">PubliShelf</span>
              </a>
            </div>
            <div className="flex items-center md:space-x-8 relative">
              <a href="/buyer/cart/#wishlist-section" className="text-gray-700 hover:text-purple-600 hidden md:block">
                <i className="far fa-heart"></i>
              </a>
              <a href="/buyer/cart" className="text-gray-700 hover:text-purple-600 hidden md:block">
                <i className="fas fa-shopping-cart"></i>
              </a>
              <button className="bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:-translate-y-[2px] transition-all duration-300 hidden md:block">
                Bookstore
              </button>
              <div className="relative group">
                <button className="flex items-center space-x-2">
                  <img src="https://via.placeholder.com/20" alt="Profile" className="w-5 h-5 rounded-full" />
                  <span className="text-gray-700 hidden md:block">John Doe</span>
                </button>
                <div className="absolute top-[22px] right-0 w-48 bg-white shadow-lg rounded-lg py-2 hidden group-hover:block">
                  <a href="/buyer/profile" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Your Profile</a>
                  <a href="/buyer/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Bookstore</a>
                  <a href="/buyer/cart/#wishlist-section" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Wishlist Page</a>
                  <a href="/buyer/cart" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Cart Page</a>
                  <a href="/logout" className="block px-4 py-2 text-gray-700 hover:bg-purple-50">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="/buyer/dashboard" className="text-gray-700 hover:text-purple-600">
                  <i className="fas fa-home mr-2"></i> Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <i className="fas fa-chevron-right text-gray-400 mx-2"></i>
                  <span className="text-gray-500">Auctions</span>
                </div>
              </li>
            </ol>
          </nav>

          {auctions.ongoingAuctions.length > 0 && (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Ongoing Auctions</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {auctions.ongoingAuctions.map(book => (
                  <div key={book._id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ease hover:translate-y-[-4px] hover:shadow-xl">
                    <div className="relative">
                      <img src={book.image} alt={book.title} className="w-full h-[260px] object-cover" />
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                      <p className="text-gray-600 text-sm">{book.author}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm">Current Bid</p>
                          <p className="text-lg font-bold text-purple-600">₹{book.currentPrice || book.basePrice}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Ends in</p>
                          <Countdown target={book.auctionEnd} type="end" />
                        </div>
                      </div>
                      <button className="mt-4 mb-1 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        View Auction
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {auctions.futureAuctions.length > 0 && (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-8">Upcoming Auctions</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {auctions.futureAuctions.map(book => (
                  <div key={book._id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ease hover:translate-y-[-4px] hover:shadow-xl">
                    <div className="relative">
                      <img src={book.image} alt={book.title} className="w-full h-[260px] object-cover" />
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                      <p className="text-gray-600 text-sm">{book.author}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm">Starting Bid</p>
                          <p className="text-lg font-bold text-purple-600">₹{book.basePrice}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Starts in</p>
                          <Countdown target={book.auctionStart} type="start" />
                        </div>
                      </div>
                      <button className="mt-4 mb-1 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {auctions.endedAuctions.length > 0 && (
            <>
              <h1 className="text-3xl font-bold text-gray-900 mt-12 mb-8">Past Auctions</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {auctions.endedAuctions.map(book => (
                  <div key={book._id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 ease hover:translate-y-[-4px] hover:shadow-xl">
                    <div className="relative">
                      <img src={book.image} alt={book.title} className="w-full h-[260px] object-cover" />
                    </div>
                    <div className="px-4 py-2">
                      <h3 className="text-lg font-semibold text-gray-900">{book.title}</h3>
                      <p className="text-gray-600 text-sm">{book.author}</p>
                      <div className="mt-2 flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm">Final Price</p>
                          <p className="text-lg font-bold text-purple-600">₹{book.currentPrice || "Not sold"}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Status</p>
                          <p className="text-sm font-semibold">{book.currentPrice ? "Sold" : "Not sold"}</p>
                        </div>
                      </div>
                      <button className="mt-4 mb-1 w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {auctions.ongoingAuctions.length === 0 && auctions.futureAuctions.length === 0 && auctions.endedAuctions.length === 0 && (
            <div className="text-center py-12">
              <i className="fas fa-book-open text-5xl text-gray-300 mb-4"></i>
              <h2 className="text-2xl font-semibold text-gray-700">No auctions available</h2>
              <p className="text-gray-500 mt-2">Check back later for new antique book auctions</p>
            </div>
          )}
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
              <button className="text-gray-300 hover:text-purple-400 text-sm">Terms and Conditions</button>
              <button className="text-gray-300 hover:text-purple-400 text-sm">Privacy Policy</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AuctionPage;
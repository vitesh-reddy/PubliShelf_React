import React from "react";
import { Link } from "react-router-dom";

const AuctionOngoing = () => {
  const book = {
    _id: "123",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    condition: "Good",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600",
    authenticationImage: ["https://images.unsplash.com/photo-1544716278-ca5e3f4ebf0c?auto=format&fit=crop&q=80&w=150"],
    auctionStart: "2025-11-01T00:00:00Z",
    auctionEnd: "2025-11-15T23:59:59Z",
    basePrice: 500,
    currentPrice: 1200,
    description: "A classic American novel about the jazz age.",
    biddingHistory: [
      { _id: "1", bidAmount: 1200, bidTime: "2025-11-10T12:00:00Z", bidder: { _id: "user1", firstname: "John", lastname: "Doe", email: "john@example.com" } },
      { _id: "2", bidAmount: 1100, bidTime: "2025-11-10T11:30:00Z", bidder: { _id: "user2", firstname: "Jane", lastname: "Smith", email: "jane@example.com" } }
    ]
  };
  const buyerId = "user1";
  const buyerName = "John Doe";
  const isActive = true;
  const authImages = Array.isArray(book.authenticationImage) ? book.authenticationImage : [book.authenticationImage];
  const sortedBids = [...book.biddingHistory].sort((a, b) => new Date(b.bidTime) - new Date(a.bidTime));
  const getTimeAgo = (date) => "Just now";

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
              <a href="/buyer/cart/#wishlist-section" className="text-gray-700 hover:text-purple-600 hidden md:block"><i className="far fa-heart"></i></a>
              <a href="/buyer/cart" className="text-gray-700 hover:text-purple-600 hidden md:block"><i className="fas fa-shopping-cart"></i></a>
              <button onClick={() => window.location.href='/logout'} className="bg-gradient-to-r hover:bg-gradient-to-l from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:-translate-y-[2px] transition-all duration-300 hidden md:block">Logout</button>
              <div className="relative">
                <button className="scale-0 md:scale-100 flex items-center space-x-2" onClick={() => window.location.href='/buyer/profile'}>
                  <img src="https://img.icons8.com/?size=100&id=zxB19VPoVLjK&format=png&color=000000" alt="Profile" className="w-5 h-5 rounded-full" />
                  <span className="text-gray-700">{buyerName}</span>
                </button>
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
                <Link to="/buyer/dashboard" className="text-gray-700 hover:text-purple-600"><i className="fas fa-home mr-2"></i>Home</Link>
              </li>
              <li><div className="flex items-center"><i className="fas fa-chevron-right text-gray-400 mx-2"></i><Link to='/buyer/auction-item-detail/123' className="text-gray-700 hover:text-purple-600">Auctions</Link></div></li>
              <li><div className="flex items-center"><i className="fas fa-chevron-right text-gray-400 mx-2"></i><span className="text-gray-500">{book.title}</span></div></li>
            </ol>
          </nav>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <img src={book.image} alt={book.title} className="w-full h-96 object-cover transform transition-transform duration-500 hover:scale-[1.01]" />
                  {isActive && <span className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold animate-pulse">Live</span>}
                </div>
                <div className="relative">
                  <div id="document-carousel" className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth space-x-3">
                    {authImages.map((img, index) => (
                      <img key={index} src={img} alt={`Document ${index + 1}`} className="h-24 w-24 rounded-lg object-cover snap-center cursor-pointer hover:opacity-90 transition-opacity" />
                    ))}
                  </div>
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
                  <span className={isActive ? "text-green-600" : "text-red-600"}>Active Auction</span>
                  <span className="text-gray-600">Ends in: <span id="countdown" className="font-semibold">14d 12h 30m 45s</span></span>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-gray-600 text-sm">
                    <span>Time Remaining</span><span id="progress-percent">50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div id="progress-bar" className="bg-purple-600 h-1.5 rounded-full transition-all duration-500" style={{ width: "50%" }}></div>
                  </div>
                </div>

                <div className="border-t border-b py-3">
                  <div className="flex items-baseline space-x-4">
                    <div>
                      <span className="text-3xl font-bold text-gray-900" id="current-bid">₹{book.currentPrice.toLocaleString("en-IN")}</span>
                      <p className="text-gray-600 text-xs">Current Bid</p>
                    </div>
                    <div>
                      <span className="text-lg text-gray-600">₹{book.basePrice.toLocaleString("en-IN")}</span>
                      <p className="text-gray-600 text-xs">Base Price</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 flex items-end gap-1">
                  <div className="relative w-full">
                    <label htmlFor="bid-amount" className="text-gray-600 text-sm">Your Bid(₹)</label>
                    <input type="number" id="bid-amount" min={book.currentPrice + 100} placeholder={`Enter bid (min ₹${book.currentPrice + 100})`} className="text-lg w-full px-3 py-3 mt-1 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                    <span className="absolute right-2 top-9 text-gray-400 cursor-pointer" title={`Bid must be at least ₹${book.currentPrice + 100}`}><i className="fas fa-info-circle text-xs"></i></span>
                  </div>
                  <button id="enter-bid" className="w-full bg-purple-600 text-white px-4 h-[45px] rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2 text-sm">
                    <i className="fas fa-gavel"></i><span>Place Bid</span>
                  </button>
                  <p id="error-message" className="text-red-600 text-xs hidden">Bid must be at least ₹{(book.currentPrice + 100)}(minimum ₹100 increment)</p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-semibold">Description</h3>
                  <p className="text-gray-600 text-sm">{book.description}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Bidding History</h3>
            <div className="bg-white rounded-xl shadow-lg p-5">
              <div className="flex justify-between items-center mb-4 pb-3 border-b">
                <div><p className="text-sm text-gray-600">Total Bids: <span className="font-semibold text-gray-800">{sortedBids.length}</span></p></div>
                <div><p className="text-sm text-gray-600">Highest Bid: <span className="font-bold text-purple-600">₹{Math.max(...sortedBids.map(b => b.bidAmount)).toLocaleString("en-IN")}</span></p></div>
              </div>
              <div id="bidding-history" className="space-y-3">
                {sortedBids.map((bid, index) => {
                  const bidder = bid.bidder || {};
                  const bidderName = `${bidder.firstname} ${bidder.lastname}`;
                  const isCurrentUser = bidder._id === buyerId;
                  return (
                    <div key={bid._id} className={`group flex items-center justify-between border-b pb-3 ${index === 0 ? 'bg-purple-50 rounded-md px-3 pt-2' : 'px-1'} hover:bg-gray-50 transition-all duration-200 ${isCurrentUser ? 'border-l-4 border-l-blue-400 pl-2' : ''}`}>
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(bidderName)}&background=${isCurrentUser ? '3b82f6' : 'random'}&color=ffffff`} alt={bidderName} className="w-10 h-10 rounded-full shadow-sm" />
                          {index === 0 && <span className="absolute -top-1 -right-1 bg-purple-600 rounded-full w-4 h-4 flex items-center justify-center"><span className="text-white text-xs">1</span></span>}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 group-hover:text-purple-700 transition-colors duration-200">
                            {bidderName} {isCurrentUser && <span className="text-blue-600 text-xs font-medium ml-1.5">(You)</span>} {index === 0 && <span className="text-purple-600 text-xs font-semibold ml-1.5">(Top Bidder)</span>}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs text-gray-500">
                            <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>{bidder.email}</p>
                            <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg><span>{getTimeAgo(bid.bidTime)}</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-purple-600 text-base group-hover:scale-110 transition-transform duration-200">₹{bid.bidAmount.toLocaleString("en-IN")}</p>
                        {index === 0 && <span className="text-xs text-purple-700 font-medium">Current highest</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionOngoing;
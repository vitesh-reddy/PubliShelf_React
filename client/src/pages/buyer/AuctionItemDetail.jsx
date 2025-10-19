import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";
import { getAuctionItemDetail } from "../../../services/antiqueBook.services.js";

const AuctionItemDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchAuctionItem();
  }, [id]);

  const fetchAuctionItem = async () => {
    try {
      setLoading(true);
      const response = await getAuctionItemDetail(id);
      if (response.success) {
        setBook(response.data.book);
      } else {
        setError(response.message);
      }
    } catch (err) {
      setError("Failed to fetch auction item");
    } finally {
      setLoading(false);
    }
  };

  const getAuctionStatus = () => {
    const now = new Date();
    if (now < new Date(book.auctionStart)) return "Upcoming";
    if (now > new Date(book.auctionEnd)) return "Ended";
    return "Active";
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  if (!book) return <div className="min-h-screen flex items-center justify-center">Auction item not found</div>;

  const status = getAuctionStatus();

  return (
    <div className="bg-gray-50">
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 font-semibold">Auction Detail</div>
      </nav>

      <div className="pt-16 pb-20 max-w-7xl mx-auto px-4">
        <nav className="flex mb-6">
          <ol className="inline-flex items-center space-x-1">
            <li>
              <Link to="/buyer/dashboard" className="text-gray-700 hover:text-purple-600 flex items-center">
                <FaHome className="mr-2" /> Home
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <FaChevronRight className="text-gray-400 mx-2" />
                <span className="text-gray-500">{book.title}</span>
              </div>
            </li>
          </ol>
        </nav>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            <div>
              <img
                src={book.image || "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=600"}
                alt={book.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-5">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
                <p className="text-lg text-gray-600 mt-1">{book.author}</p>
              </div>

              <div className="flex items-center space-x-3 text-sm">
                <span className={`font-medium ${status === "Active" ? "text-green-600" : status === "Ended" ? "text-red-600" : "text-yellow-600"}`}>
                  {status} Auction
                </span>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuctionItemDetail;

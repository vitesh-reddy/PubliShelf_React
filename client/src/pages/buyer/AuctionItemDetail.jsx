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

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
  if (!book) return <div className="min-h-screen flex items-center justify-center">Auction item not found</div>;

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

        <div className="bg-white rounded-xl shadow-lg p-6">Book detail section</div>
      </div>
    </div>
  );
};

export default AuctionItemDetail;
''
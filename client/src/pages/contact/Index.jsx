//client/src/pages/public/Contact.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <>
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-2xl font-bold">PubliShelf</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/auth/login" className="bg-purple-600 text-white px-4 py-2 rounded-lg">Join Now</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="min-h-screen pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you! Reach out to us with any questions or feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
              </div>
              <button type="submit" disabled={loading} className="w-full bg-purple-600 text-white py-3 rounded-lg">
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

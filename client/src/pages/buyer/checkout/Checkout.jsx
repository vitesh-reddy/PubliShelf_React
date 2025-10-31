// src/pages/buyer/checkout/Checkout.jsx
import React from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Checkout = () => {
    return (
        <div className="flex flex-col min-h-screen checkout-page">
            <Navbar />

            <div className="bg-gradient-to-b from-[#f3e8ff] to-white pt-20">
                <div className="max-w-[800px] mx-auto p-5 md:p-5">
                    <h1 className="text-3xl font-bold text-gray-800 mb-5">Checkout</h1>

                    <div className="bg-white rounded-lg shadow-md p-5 mb-5">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Shipping Address</h2>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex items-center gap-2.5 p-2.5 border rounded-lg">
                                <input type="radio" name="address" id="address1" checked className="ml-2 mr-2.5 accent-purple-600" />
                                <label htmlFor="address1" className="w-full">
                                    <strong className="text-gray-800">Vitesh Reddy</strong><br />
                                    <span className="text-gray-600">Mandapeta, East Godavari District, 532459</span><br />
                                    <span className="text-gray-600">Phone: +91 98765 43210</span>
                                </label>
                            </div>
                            <div className="flex items-center gap-2.5 p-2.5 border rounded-lg">
                                <input type="radio" name="address" id="address2" className="ml-2 mr-2.5 accent-purple-600" />
                                <label htmlFor="address2" className="w-full">
                                    <strong className="text-gray-800">Balayya Babu</strong><br />
                                    <span className="text-gray-600">Sri City, Tirupati District, 517425</span><br />
                                    <span className="text-gray-600">Phone: +91 80992 69269</span>
                                </label>
                            </div>
                            <button className="p-2.5 bg-gray-100 border border-dashed border-gray-200 rounded-lg text-center text-purple-600 font-medium hover:bg-gray-200 mt-2">
                                + Add New Address
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-5 mb-5">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Payment Method</h2>
                        <div className="flex flex-col gap-2.5">
                            <div className="flex items-center gap-2.5 p-2.5 border border-gray-200 rounded-lg cursor-pointer">
                                <div className="flex items-center gap-2">
                                    <img src="https://logos-world.net/wp-content/uploads/2004/09/Visa-Logo-2014.png" alt="Visa" className="h-5" />
                                    <img src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png" alt="MasterCard" className="h-5" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/RuPay-Logo.svg/2560px-RuPay-Logo.svg.png" alt="Rupay" className="h-5" />
                                    Credit/Debit Card
                                </div>
                            </div>
                            <div className="flex items-center gap-2.5 p-2.5 border border-gray-200 rounded-lg cursor-pointer">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png" alt="UPI" className="h-5" />
                                UPI
                            </div>
                            <div className="flex items-center gap-2.5 p-2.5 border border-gray-200 rounded-lg cursor-pointer">
                                <i className="fas fa-money-bill-wave"></i>
                                Cash on Delivery
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-5">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Order Summary</h2>
                        <div className="flex justify-between mb-3 text-sm text-gray-700">
                            <span>Subtotal</span>
                            <span>₹500</span>
                        </div>
                        <div className="flex justify-between mb-3 text-sm text-gray-700">
                            <span>Shipping</span>
                            <span>₹100</span>
                        </div>
                        <div className="flex justify-between mb-3 text-sm text-gray-700">
                            <span>Tax</span>
                            <span>₹10.00</span>
                        </div>
                        <div className="flex justify-between font-bold text-base text-gray-800 mb-3">
                            <span>Total</span>
                            <span>₹610.00</span>
                        </div>
                        <button className="w-full p-3 bg-purple-600 text-white rounded-lg text-base font-medium">
                            Place Your Order
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Checkout;
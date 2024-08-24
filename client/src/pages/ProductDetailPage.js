import React from "react";
import Navbar from "../features/common/Navbar";
import BookSection from "../features/common/BookComponent";
import NewsLetter from "../features/common/NewsLetter";
import Footer from "../features/common/Footer";

const ProductDetailsPage = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center">
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Mystery/Thriller
        </div>
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Adventure
        </div>
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Kids
        </div>
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Fantasy
        </div>
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Horror
        </div>
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Ayurvedic
        </div>
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Chilren's Book
        </div>
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Health and Fitness
        </div>
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Philosophy
        </div>
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Business and Economics
        </div>
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Cook
        </div>
        <div className="rounded-2xl text-xs bg-gray-100 w-fit h-fit p-1 m-3 px-1 hover:bg-gray-300 cursor-pointer">
          Spirituality
        </div>
      </div>
      <ProductDetail />
      <BookSection/>
      <NewsLetter/>
      <Footer/>
    </>
  );
};

export default ProductDetailsPage;

const ProductDetail = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <span>Home</span> &gt; <span>Product Details</span>
      </div>

      <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Product Image */}
        <div className="lg:w-1/3">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Product"
            className="w-full h-auto object-cover shadow-lg rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-2/3">
          <h1 className="text-2xl font-bold text-gray-800">
            The SILENT PATIENT
          </h1>
          <p className="text-sm text-gray-500">
            Author: <span className="text-red-500">David Baldacci</span>
          </p>
          <p className="text-sm text-gray-500">Binding: Paper Book</p>
          <p className="text-sm text-gray-500">Reward Points: 200</p>
          <p className="text-sm text-gray-500">Product Code: model1</p>
          <p className="text-sm text-green-600">Availability: In Stock</p>

          {/* Pricing Section */}
          <div className="flex items-center mt-4 space-x-2">
            <p className="text-3xl font-semibold text-red-600">₹239</p>
            <p className="text-lg text-gray-500 line-through">₹338</p>
            <p className="text-green-600 text-sm">30% OFF</p>
          </div>

          {/* Review Section */}
          <div className="flex items-center mt-2 space-x-2">
            <span className="flex text-yellow-500">
              {/* Dummy Stars for Rating */}
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
            </span>
            <span className="text-sm text-gray-600">(6 Reviews)</span>
            <button className="text-sm text-gray-500 underline">
              Write a Review
            </button>
          </div>

          {/* Product Description */}
          <p className="text-md text-gray-700 mt-4">
            "The Silent Patient" is a gripping psychological thriller that keeps
            readers on edge with its shocking twists and compelling narrative.
          </p>

          {/* Quantity and Action Buttons */}
          <div className="mt-6 flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button className="px-4 py-2 text-gray-600">-</button>
              <input
                type="number"
                defaultValue={1}
                className="w-12 text-center p-2 border-none focus:ring-0"
              />
              <button className="px-4 py-2 text-gray-600">+</button>
            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
              Add to Cart
            </button>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition">
              Buy Now
            </button>
          </div>

          {/* Wishlist */}
          <div className="mt-4">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition">
              <i className="fas fa-heart"></i>
              <span>Add to Wishlist</span>
            </button>
          </div>
        </div>
      </div>

      {/* Extra Info Section */}
      <div className="mt-8 flex space-x-8">
        <div className="text-center">
          <p className="text-gray-600 text-lg font-bold">7 Million +</p>
          <p className="text-gray-500">Happy Customers</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-lg font-bold">100% Original</p>
          <p className="text-gray-500">Products</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-lg font-bold">32 Points</p>
          <p className="text-gray-500">Quality Check</p>
        </div>
      </div>
    </div>
  );
};

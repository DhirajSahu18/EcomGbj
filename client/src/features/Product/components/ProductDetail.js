import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductByIdAsync , selectProduct} from '../ProductSlice';

export function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL params
  const dispatch = useDispatch();
  const product = useSelector(selectProduct); // Assuming your product slice has a selector called selectProduct

  useEffect(() => {
    if (id) {
      dispatch(getProductByIdAsync(id)); // Dispatch to get the product by ID
    }
  }, [id, dispatch]);

  if (!product) {
    return <div>Loading...</div>; // Loading state
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-8">
        {/* Product Image */}
        <div className="md:w-1/3">
          <img
            className="w-full h-auto object-cover shadow-lg rounded-lg"
            src={product.imageUrl}
            alt={product.title}
          />
        </div>

        {/* Product Details */}
        <div className="md:w-2/3">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-600">Author: {product.author}</p>
          <p className="text-lg text-gray-600">Binding: {product.binding}</p>
          <p className="text-lg text-gray-600">Reward Points: {product.rewardPoints}</p>
          <p className="text-lg text-gray-600">Product Code: {product.code}</p>
          <p className="text-lg text-gray-600">
            Availability: <span className="text-green-600">{product.availability}</span>
          </p>
          <p className="text-3xl font-semibold text-red-600 mt-4">
            ₹ {product.price}{' '}
            <span className="text-gray-600 line-through text-lg">
              ₹ {product.originalPrice}
            </span>
            <span className="text-green-500 text-lg"> {product.discount}% OFF</span>
          </p>

          {/* Review Section */}
          <div className="flex items-center mt-4 space-x-2">
            <span className="flex text-yellow-500">
              {/* Rating Stars */}
              {[...Array(product.rating)].map((_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </span>
            <span className="text-gray-600">({product.reviewsCount} Reviews)</span>
          </div>

          {/* Product Description */}
          <p className="text-md text-gray-700 mt-4">{product.description}</p>

          {/* Quantity and Action Buttons */}
          <div className="mt-6 flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <input
                type="number"
                defaultValue={1}
                className="w-16 text-center p-2 border-none focus:ring-0"
              />
            </div>
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
              Add to Cart
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
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

      {/* Additional Info Section */}
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
}

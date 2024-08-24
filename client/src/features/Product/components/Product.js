import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAsync, selectProducts } from '../ProductSlice';

export function ProductGrid() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts); // Assuming your product slice has a selector called selectProducts

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Latest Arrivals</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative bg-white shadow rounded-lg overflow-hidden"
            >
              {/* Sale Tag */}
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold uppercase rounded">
                  New
                </span>
              )}
              {/* Product Image */}
              <img
                className="w-full h-48 object-cover"
                src={product.imageUrl}
                alt={product.title}
              />
              {/* Product Info */}
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  {product.title}
                </h3>
                <p className="text-sm text-gray-500">{product.author}</p>
                <p className="text-lg font-bold text-gray-800">₹{product.price}</p>
              </div>
              {/* Action buttons */}
              <div className="absolute bottom-0 right-0 p-2">
                <button className="bg-red-500 text-white rounded-full p-2">
                  <i className="fas fa-heart"></i>
                </button>
                <button className="bg-black text-white rounded-full p-2 ml-2">
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* View More Button */}
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

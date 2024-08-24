import React from 'react'

function NewsLetter() {
    return (
        <div className="bg-white py-16">
          <div className="text-center mb-8">
            <h2 className="text-green-500 font-semibold">SUBSCRIBE</h2>
            <h1 className="text-3xl font-bold">
              Subscribe To Get The Latest News About Us
            </h1>
            <p className="text-gray-500 mt-4">
              Please Drop Your Email Below To Get Daily Updates About What We Do
            </p>
          </div>
          <div className="flex justify-center">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="px-4 py-3 border border-gray-300 rounded-l-md focus:outline-none"
            />
            <button className="bg-pink-500 text-white px-6 py-3 rounded-r-md font-semibold hover:bg-pink-600">
              Subscribe
            </button>
          </div>
        </div>
      );
}

export default NewsLetter

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUserAsync, selectUser } from '../AuthSlice';
import { Link , Navigate } from 'react-router-dom';

export default function Signup() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  // State to collect form data
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUserAsync(formData));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {user && <Navigate to="/" replace={true} />}
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-3/4 flex-col md:flex-row">
        {/* Left Side - Form Section */}
        <div className="md:w-1/2 w-full p-8">
          <h1 className="text-2xl font-bold mb-4">LOGO</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <button type="submit" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                Signup
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
        {/* Right Side - Image Section */}
        <div className="md:w-1/2 bg-gray-100 p-8 flex items-center justify-center w-full">
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Illustration"
              className="mb-4"
            />
            <h2 className="text-xl font-semibold">Your plan includes</h2>
            <ul className="mt-4 text-gray-600 space-y-2">
              <li>• Unlimited projects and resources</li>
              <li>• Unlimited templates</li>
              <li>• Unlimited storage</li>
              <li>• List, Board, and Calendar Views...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

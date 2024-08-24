import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAsync, selectUser } from '../AuthSlice';
import { Link, Navigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  // State to collect form data
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    delete formData.rememberMe;
    dispatch(loginUserAsync(formData));
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
              <label className="block text-gray-700">Email address or user name</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Email or Username"
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
              <div className="mt-2 flex justify-between items-center">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Remember me</span>
                </label>
                <a href="#" className="text-sm text-indigo-600 hover:underline">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs text-gray-600">
                By continuing you agree to the{' '}
                <a href="#" className="text-indigo-600 hover:underline">
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href="#" className="text-indigo-600 hover:underline">
                  Privacy Policy
                </a>.
              </p>
            </div>
            <div className="mb-4">
              <button type="submit" className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
                Log in
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-indigo-600 hover:underline">
                Sign up
              </Link>
            </p>
            <div className="mt-4">
              <p className="text-gray-600 text-sm mb-2">Or continue with</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-700">
                  <i className="fab fa-facebook-f"></i> F
                </a>
                <a href="#" className="text-gray-700">
                  <i className="fab fa-google"></i> G
                </a>
                <a href="#" className="text-gray-700">
                  <i className="fab fa-twitter"></i> T
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Image Section */}
        <div className="md:w-1/2 w-full bg-gray-100 p-8 flex items-center justify-center">
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

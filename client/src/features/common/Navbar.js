import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../Auth/AuthSlice';

const Navbar = () => {
  const user = useSelector(selectUser)
  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-3xl font-bold">LOGO</div>
      
      {/* Links */}
      <div className="flex space-x-6">
        <a href="#" className="text-gray-800 hover:text-red-500 border-b-2 border-red-500">WordPress Templates</a>
        <a href="#" className="text-gray-800 hover:text-red-500">e-Books</a>
        <a href="#" className="text-gray-800 hover:text-red-500">Themes</a>
        <a href="#" className="text-gray-800 hover:text-red-500">Plugins</a>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-gray-100 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Buttons */}
      {!user ? <div className="flex space-x-4">
        <a href="#" className="text-gray-800 px-4 py-2">Login</a>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">Sign Up</button>
      </div> :
      <div className="flex space-x-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-full">Logout</button>
      </div>}
    </nav>
  );
};

export default Navbar;

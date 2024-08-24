import React, { useState } from 'react';

// Dummy data for the tabs
const tabData = {
  description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic doloremque ipsum, incidunt, neque repudiandae beatae nisi velit totam magni aperiam aspernatur voluptas repellendus laudantium excepturi. Impedit commodi tempora excepturi modi laborum consequuntur rem. Nesciunt consequuntur velit blanditiis nihil illum assumenda autem aperiam libero, commodi nisi voluptatibus ipsum laborum ab, saepe vel. Velit, assumenda deserunt.",
  reviews: `This book has an average rating of 4.5 stars with over 2000 reviews. People are calling it one of the best 
  psychological thrillers in recent years.`
};

// Dummy data for similar books
const booksData = [
  { id: 1, title: "Gall Avalon", author: "Sail Desai", price: "₹239.00", image: "https://via.placeholder.com/150", badge: "New" },
  { id: 2, title: "Amityville Horror", author: "Gaur Opal Das", price: "₹236.00", image: "https://via.placeholder.com/150", badge: "Hot" },
  { id: 3, title: "Stephen King", author: "Sidharth Maheshwari", price: "₹233.00", image: "https://via.placeholder.com/150", badge: "New" },
  { id: 4, title: "The Sound of the Hours", author: "Karen Campbell", price: "₹239.00", image: "https://via.placeholder.com/150", badge: "New" },
  { id: 5, title: "Philosophy And Religion", author: "Max Charlesworth", price: "₹236.00", image: "https://via.placeholder.com/150", badge: "New" },
];

const BookSection = () => {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <div className="p-8">
      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-6 justify-center">
        <button
          className={`text-xl font-semibold pb-2 border-b-2 ${activeTab === 'description' ? 'border-red-500 text-red-500' : 'border-transparent'}`}
          onClick={() => setActiveTab('description')}
        >
          Description
        </button>
        <button
          className={`ml-8 text-xl font-semibold pb-2 border-b-2 ${activeTab === 'reviews' ? 'border-red-500 text-red-500' : 'border-transparent'}`}
          onClick={() => setActiveTab('reviews')}
        >
          Reviews (1)
        </button>
      </div>

      {/* Tab Content */}
      <div className="text-gray-700 text-lg mb-8">
        {tabData[activeTab]}
      </div>

      {/* Similar Books Section */}
      <h2 className="text-2xl font-bold mb-6">Similar Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {booksData.map(book => (
          <div key={book.id} className="bg-white shadow-lg rounded-lg p-4 relative">
            {/* Badge */}
            {book.badge && (
              <div className="absolute top-2 left-2 bg-red-500 text-white text-sm px-2 py-1 rounded-full">
                {book.badge}
              </div>
            )}

            {/* Book Image */}
            <img src={book.image} alt={book.title} className="w-full h-40 object-cover mb-4 rounded-lg" />

            {/* Book Details */}
            <h3 className="text-lg font-semibold">{book.title}</h3>
            <p className="text-sm text-gray-600">{book.author}</p>
            <p className="text-xl font-bold mt-2">{book.price}</p>

            {/* Icons Placeholder */}
            <div className="mt-4 flex justify-end">
              {/* Replace icons with appropriate SVGs or icon libraries */}
              <div className="bg-gray-100 p-2 rounded-full cursor-pointer">
                <span>🔍</span>
              </div>
              <div className="bg-gray-100 p-2 rounded-full ml-2 cursor-pointer">
                <span>🛒</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-red-500 text-white px-8 py-3 rounded-full text-lg hover:bg-red-600">
          View More
        </button>
      </div>
    </div>
  );
};

export default BookSection;

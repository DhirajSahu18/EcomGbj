import React, { useEffect } from "react";
import Navbar from "../features/common/Navbar";
import heroImg from "../assets/heroImg.jpeg";
import Footer from "../features/common/Footer";
import { getAllProductsAsync, selectProducts } from "../features/Product/ProductSlice";
import { useDispatch, useSelector } from "react-redux";

function Homepage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProductsAsync())
  }, []);

  return (
    <div>
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
      <TextWithImage />
      <ProductList />
      <CognitiveBenefits />
      <BooksOfTheMonth />
      <Testimonials />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Homepage;

const TextWithImage = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 p-8">
      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col justify-center items-start p-20">
        <h1 className="text-3xl font-bold mb-4">
          A room without books is like a body without a soul.
        </h1>
        <p className="text-gray-700 mb-6">
          Picture a place where shelves stand empty, void of the stories,
          knowledge, and dreams that books hold. Without books, a room loses its
          ability to inspire, educate, and transport us to distant realms. They
          are the lifeblood of any space, infusing it with character, wisdom,
          and imagination.
        </p>
        <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-600">
          Shop Now
        </button>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src={heroImg}
          alt="Books Room"
          className="w-full rounded-lg shadow-lg h-96 object-cover"
        />
      </div>
    </div>
  );
};

// const books = [
//   {
//     title: "Energize your mind",
//     author: "Gaur Gopal Das",
//     price: "₹239.00",
//     img: "https://via.placeholder.com/150",
//     discount: "30% Off",
//   },
//   {
//     title: "The Housemaid",
//     author: "Freida McFadden",
//     price: "₹239.00",
//     img: "https://via.placeholder.com/150",
//     discount: "30% Off",
//   },
//   {
//     title: "Veil of Shadows",
//     author: "Siddharth Maheshwari",
//     price: "₹239.00",
//     img: "https://via.placeholder.com/150",
//     discount: "20% Off",
//   },
//   {
//     title: "THE SILENT PATIENT",
//     author: "Alex Michaelides",
//     price: "₹239.00",
//     img: "https://via.placeholder.com/150",
//     discount: "20% Off",
//   },
//   {
//     title: "The Housemaid",
//     author: "Freida McFadden",
//     price: "₹239.00",
//     img: "https://via.placeholder.com/150",
//     discount: "30% Off",
//   },
// ];



function ProductList() {
  const books = useSelector(selectProducts)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl mb-6">Latest Arrivals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {books && books.map((book, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden relative"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{book.title}</h2>
              <p className="text-gray-600">{book.author}</p>
              <p className="text-red-500 font-bold mt-2">{book.price.original}</p>
            </div>
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {book.price.discounted} 
            </div>
            <div className="absolute bottom-2 right-2 flex flex-col items-center gap-2">
              <button className="bg-black text-white p-1 px-2 rounded-full">
                +
              </button>
              <button className="bg-black text-white p-1 rounded-full ml-2">
                ❤️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CognitiveBenefits() {
  return (
    <div className="flex flex-col md:flex-row bg-white p-10">
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          The Cognitive Benefits of Book Reading
        </h2>
        <p className="text-gray-600 mb-6">
          Reading books stimulates the brain, enhancing cognitive functions such
          as concentration, critical thinking, and problem-solving. Engaging
          with complex narratives and diverse perspectives expands mental
          faculties and nurtures intellectual growth. This mental exercise can
          lead to improved memory retention and a sharper mind.
        </p>
        <ul className="space-y-3">
          <li className="flex items-center text-red-500">
            <span className="mr-2">✔</span> Improve Focus
          </li>
          <li className="flex items-center text-red-500">
            <span className="mr-2">✔</span> Exercise Brain
          </li>
          <li className="flex items-center text-red-500">
            <span className="mr-2">✔</span> Enjoy Entertainment
          </li>
          <li className="flex items-center text-red-500">
            <span className="mr-2">✔</span> Improve Memory
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 flex justify-center items-center relative">
        <div className="bg-pink-100 p-2 rounded-lg">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Reading in nature"
            className="w-64 h-48 object-cover rounded-lg mb-4"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Reading on couch"
            className="w-64 h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

const bookes = [
  {
    title: "Daydream",
    author: "Hannah Grace",
    price: "₹239.00",
    img: "https://via.placeholder.com/150",
    rating: 4,
    details: ["For youth", "First published January 30, 2024"],
  },
  {
    title: "The Teacher",
    author: "Freida McFadden",
    price: "₹300.00",
    img: "https://via.placeholder.com/150",
    rating: 4,
    details: ["For youth", "First published February 6, 2024"],
  },
];

function BooksOfTheMonth() {
  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold mb-6">Books Of The Month</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bookes.map((book, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex">
              <img
                src={book.img}
                alt={book.title}
                className="w-1/3 object-cover"
              />
              <div className="p-4 w-2/3">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">{book.title}</h3>
                  <div className="text-yellow-500">
                    {"★".repeat(book.rating)}
                    {"☆".repeat(5 - book.rating)}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">By: {book.author}</p>
                <ul className="text-sm text-gray-500 mb-4">
                  {book.details.map((detail, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-red-500 mr-2">✔</span> {detail}
                    </li>
                  ))}
                </ul>
                <p className="text-red-500 font-bold mb-4">{book.price}</p>
                <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "Rahul Mandal",
    feedback:
      "I love this e-book website! The selection is vast and the download process is super easy.",
    img: "https://via.placeholder.com/80",
  },
  {
    name: "Snehal Barska",
    feedback:
      "Great platform for book lovers, the user interface is clean and easy, making browsing a pleasure.",
    img: "https://via.placeholder.com/80",
  },
];

function Testimonials() {
  return (
    <div className="bg-gray-50 p-10">
      <h2 className="text-2xl font-bold text-center mb-10">
        Why Our Customers Love Us
      </h2>
      <div className="relative">
        <img
          src="https://via.placeholder.com/800x300"
          alt="Reading background"
          className="w-full h-64 object-cover rounded-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-around items-center p-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg max-w-xs"
            >
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mb-4 mx-auto"
              />
              <p className="text-red-500 font-bold mb-2">{testimonial.name}</p>
              <p className="text-gray-600 text-center">
                {testimonial.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Subscription = () => {
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
};

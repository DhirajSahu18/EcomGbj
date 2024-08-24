import React from 'react';

const Footer = () => {
  return (
    <div className="bg-pink-100 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly">
        <div className="mb-8 md:mb-0 w-[30%]">
          <h2 className="text-2xl font-bold mb-4">LOGO</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-600">
              <li>WordPress Themes</li>
              <li>WooCommerce Themes</li>
              <li>HTML5 Templates</li>
              <li>Shopify Themes</li>
              <li>ZenCart</li>
              <li>Magento</li>
              <li>PrestaShop</li>
              <li>VirtueMart</li>
              <li>Joomla</li>
              <li>Drupal</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Topics</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Business & Services</li>
              <li>Fashion & Beauty</li>
              <li>Home & Family</li>
              <li>Design & Photography</li>
              <li>Real Estate</li>
              <li>Cars & Motorcycles</li>
              <li>Medical</li>
              <li>Sports, Outdoors & Travel</li>
              <li>Food & Restaurant</li>
              <li>Electronics</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-600">
              <li>About Us</li>
              <li>Licenses</li>
              <li>Blog</li>
              <li>Promocode/Coupons</li>
              <li>Free Website Hosting</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

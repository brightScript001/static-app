// src/components/Navbar.js

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-white text-lg font-bold">My React App</span>
          </div>
          <div className="flex items-center">
            <a href="#" className="text-white hover:text-gray-300 mr-4">
              Home
            </a>
            <a href="#" className="text-white hover:text-gray-300 mr-4">
              About
            </a>
            <a href="#" className="text-white hover:text-gray-300 ">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

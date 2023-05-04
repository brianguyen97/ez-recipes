import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              EZRecipes
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/search"
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <FaSearch className="h-5 w-5 text-gray-700" />
            </Link>
            <Link
              to="/signin"
              className="py-2 px-4 rounded-lg text-gray-800 font-medium ml-4 hover:bg-gray-200"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="py-2 px-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium ml-2"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

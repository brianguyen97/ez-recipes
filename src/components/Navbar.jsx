import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaUser, FaSignOutAlt } from "react-icons/fa";
import { auth } from "../firebase";
import { UserAuth } from "../context/AuthContext";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { logout } = UserAuth();

  useEffect(() => {
    // Set up listener for Firebase auth state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    // Clean up listener on unmount
    return () => unsubscribe();
  }, [isAuthenticated]);

  const handleLogout = () => {
    // logic to log out the user goes here
    logout();
    setIsAuthenticated(false);
  };

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
            {isAuthenticated ? (
              <>
                <Link
                  to="/account"
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 ml-4"
                >
                  <FaUser className="h-5 w-5 text-gray-700" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="py-2 px-4 rounded-lg text-gray-800 font-medium ml-4 hover:bg-gray-200"
                >
                  Logout <FaSignOutAlt className="inline-block h-4 w-4 ml-2" />
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

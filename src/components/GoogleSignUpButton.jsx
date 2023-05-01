import React from "react";
import GoogleLogo from "../assets/google-logo.svg";

function GoogleSignUpButton() {
  return (
    <div className="inline-block">
      <button className="flex items-center bg-white rounded-md shadow-sm hover:shadow-lg px-4 py-2 text-base font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border">
        <img src={GoogleLogo} alt="Google logo" className="w-5 h-5 mr-2" />
        Google Sign In
      </button>
    </div>
  );
}

export default GoogleSignUpButton;

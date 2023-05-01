import React from "react";
import GoogleLogo from "../assets/google-logo.svg";

function GoogleSignInButton() {
  const handleGoogleSignIn = () => {
    console.log("Sign in with Google");
  };
  return (
    <button
      className="bg-white hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
      type="button"
      onClick={handleGoogleSignIn}
    >
      <img src={GoogleLogo} alt="Google Logo" className="w-5 h-5 mr-2" />
      Sign In with Google
    </button>
  );
}

export default GoogleSignInButton;

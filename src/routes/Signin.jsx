import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import GoogleSignInButton from "../components/GoogleSignInButton";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting email ${email} and password ${password}`);
  };

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-3xl font-bold mb-6 text-center">Sign In</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <FiMail className="absolute top-3 left-3 text-gray-500" size="20" />
            <input
              className="appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <FiLock className="absolute top-3 left-3 text-gray-500" size="20" />
            <input
              className="appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4"
              type="submit"
            >
              Sign In
            </button>
            <GoogleSignInButton />
          </div>
          <div className="flex justify-center mt-6 text-sm">
            <a className="text-blue-500 hover:text-blue-700" href="#">
              Don't have an account? Click here to sign up.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;

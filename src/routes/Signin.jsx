import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import GoogleSignInButton from "../components/GoogleSignInButton";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    signIn(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((e) => {
        setError(e.message);
      });
  };

  const handleGoogleSignIn = () => {
    console.log("Signing in with Google");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full mx-auto px-4">
        <div className="bg-white rounded-lg shadow-xl p-6">
          <div className="text-3xl font-bold mb-6 text-center">Sign In</div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 relative">
              <FiMail
                className="absolute top-3 left-3 text-gray-500"
                size="20"
              />
              <input
                className="appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4 relative">
              <FiLock
                className="absolute top-3 left-3 text-gray-500"
                size="20"
              />
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
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
                role="alert"
              >
                <p className="font-bold">Error</p>
                <p>{error}</p>
              </div>
            )}
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="flex justify-center mt-6 text-sm">
            <Link to="/signup" className="text-blue-500 hover:text-blue-700">
              Don't have an account? Click here to sign up.
            </Link>
          </div>
          <div className="flex justify-center mt-6">
            <GoogleSignInButton onClick={handleGoogleSignIn} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;

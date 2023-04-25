import { useState } from "react";

function Signup() {
  // Set initial states for email, password, error message, and showError flag
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  // Function to handle login
  const handleLogin = (e) => {
    e.preventDefault();
    // Check if email or password is empty
    if (!email || !password) {
      // Set error message and showError flag
      setErrorMessage("Please fill in all fields");
      setShowError(true);
    } else {
      // Code to handle login
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleLogin}
      >
        {/* Show error message if showError is true */}
        {showError && <p className="text-red-500 mb-4"> {errorMessage} </p>}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            {" "}
            Email{" "}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-bold mb-2"
          >
            {" "}
            Password{" "}
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {" "}
          Sign In{" "}
        </button>
      </form>
    </div>
  );
}

export default Signup;

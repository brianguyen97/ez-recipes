import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  return (
    <div>
      <Link to="/">
        <h1>EZRecipes</h1>
      </Link>
      <div>
        <ThemeToggle />
      </div>
      <div>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
      {/* Menu Icon */}
      <div>
        <AiOutlineMenu />
      </div>
      {/* Mobile Menu */}
      <div>
        <ul>
          <li>
            <Link to="/Home"></Link>
          </li>
          <li>
            <Link to="/Account"></Link>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <div>
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

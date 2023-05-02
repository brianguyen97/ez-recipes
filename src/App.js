import React from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import RecipeSearchBasic from "./routes/RecipeSearchBasic";
import SpecificRecipe from "./routes/SpecificRecipe";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<RecipeSearchBasic />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/recipe/:RecipeId" element={<SpecificRecipe />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

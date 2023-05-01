import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import RecipesContainer from "../components/RecipesContainer";

// Defining constants for the API key, host, and URL
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const API_HOST = process.env.REACT_APP_RAPID_API_HOST;
const API_URL =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch";

function RecipeSearchBasic() {
  // State hooks to manage search term, search results, and loading status
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Set isLoading to true when making the API call
      setIsLoading(true);

      const res = await axios.get(API_URL, {
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST,
        },
        params: {
          query: searchTerm,
          number: "32",
        },
      });
      setResults(res.data.results);
    } catch (error) {
      console.error(error);
    } finally {
      // Set isLoading to false when the API call is finished
      setIsLoading(false);
    }
  };

  // Function to handle changes to the search input field
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div>
        {/* Render SearchBar component with relevant props */}
        <SearchBar
          searchTerm={searchTerm}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
      {/* Render the spinner if isLoading is true */}
      {isLoading && (
        <div className="flex justify-center items-center mt-8">
          <FaSpinner className="animate-spin text-6xl text-blue-500 flex justify-center items-center" />
        </div>
      )}
      {/* Render RecipesContainer component with results as prop, only if results are available */}
      {results && <RecipesContainer results={results} />}
    </div>
  );
}

export default RecipeSearchBasic;

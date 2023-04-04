import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import RecipesContainer from "../components/RecipesContainer";
import RecipesContainerItem from "../components/RecipesContainerItem";

// Defining constants for the API key, host, and URL
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const API_HOST = process.env.REACT_APP_RAPID_API_HOST;
const API_URL =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch";

function RecipeSearchBasic() {
  // State hooks to manage search term and search results
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchTerm);

    try {
      const res = await axios.get(API_URL, {
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST,
        },
        params: {
          query: searchTerm,
          number: "25",
        },
      });
      setResults(res.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle changes to the search input field
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div>
        {/* Render SearchBar component with relevant props */}
        <SearchBar
          searchTerm={searchTerm}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </div>
      {/* Render RecipesContainer component with results as prop, only if results are available */}
      {results && <RecipesContainer results={results} />}
    </div>
  );
}

export default RecipeSearchBasic;

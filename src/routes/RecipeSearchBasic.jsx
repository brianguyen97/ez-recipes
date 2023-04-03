import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";

// Defining constants for the API key, host, and URL
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const API_HOST = process.env.REACT_APP_RAPID_API_HOST;
const API_URL =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch";

function RecipeSearchBasic() {
  const [searchTerm, setSearchTerm] = useState("");

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(searchTerm);

    try {
      const response = await axios.get(API_URL, {
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": API_HOST,
        },
        params: {
          query: searchTerm,
          number: "100",
        },
      });
      console.log(response.data);
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
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </div>
  );
}

export default RecipeSearchBasic;

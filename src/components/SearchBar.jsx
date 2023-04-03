import React, { useState } from "react";
import axios from "axios";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);

    const options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch",
      params: {
        query: searchTerm,
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          className="w-64 px-3 py-2 mr-2 bg-primary border border-input rounded-2xl shadow-xl"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Find Recipes"
        />
        <button
          className="px-3 py-2 bg-button text-btnText rounded-2xl shadow-xl"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

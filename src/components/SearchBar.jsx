import { useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const API_HOST = process.env.REACT_APP_RAPID_API_HOST;
const API_URL =
  "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

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
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex justify-center items-center mt-6">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          className="w-64 px-3 py-2 mr-2 bg-primary border border-input rounded-2xl shadow"
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Find Recipes"
        />
        <button
          className="px-3 py-2 bg-button text-btnText rounded-2xl shadow"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Defining constants for the API key, host, and URL
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;
const API_HOST = process.env.REACT_APP_RAPID_API_HOST;

function SpecificRecipe() {
  const { RecipeId } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${RecipeId}/information`,
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
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
  }, []);

  return <div>SpecificRecipe</div>;
}

export default SpecificRecipe;

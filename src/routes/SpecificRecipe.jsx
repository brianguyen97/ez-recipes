import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_KEY = process.env.REACT_APP_RAPID_API_KEY; // Define API key constant
const API_HOST = process.env.REACT_APP_RAPID_API_HOST; // Define API host constant

function SpecificRecipe() {
  const { RecipeId } = useParams(); // Retrieve RecipeId from URL parameter
  const [recipeData, setRecipeData] = useState(null); // Initialize recipeData state to null

  const parser = new DOMParser(); // Create new instance of DOMParser to parse HTML string

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
        setRecipeData(response.data); // Update recipeData state with API response data
        console.log(response.data); // Log API response data to console for debugging purposes
      })
      .catch(function (error) {
        console.error(error); // Log any errors to console for debugging purposes
      });
  }, []); // Run useEffect hook only once when component mounts

  return (
    <div className="rounded-div">
      {/* Render recipe title if recipeData is not null, otherwise show loading message */}
      {recipeData ? <h2>{recipeData.title}</h2> : <p>Loading...</p>}

      {/* Render rating and review count */}
      <div>5 Stars | 15 Reviews |</div>

      {/* Render recipe summary if recipeData is not null */}
      {recipeData ? (
        <div
          dangerouslySetInnerHTML={{
            __html: parser.parseFromString(recipeData.summary, "text/html").body
              .innerHTML,
          }}
        />
      ) : null}
    </div>
  );
}

export default SpecificRecipe;

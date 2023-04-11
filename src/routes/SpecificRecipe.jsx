import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HiArrowSmDown } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import CookingTime from "../components/CookingTime";

const API_KEY = process.env.REACT_APP_RAPID_API_KEY; // Define API key constant
const API_HOST = process.env.REACT_APP_RAPID_API_HOST; // Define API host constant

function SpecificRecipe() {
  const { RecipeId } = useParams(); // Retrieve RecipeId from URL parameter
  const [recipeData, setRecipeData] = useState(null); // Initialize recipeData state to null
  // const parser = new DOMParser(); // Create new instance of DOMParser to parse HTML string

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
  }, [RecipeId]); // Run useEffect hook only when RecipeId paramter changes

  return (
    <div className="p-3 mx-auto max-w-screen-lg">
      <div className="border border-secondary rounded-2xl shadow-xl bg-primary grid md:grid-cols-2 grid-rows-2 gap-4">
        {/* Render rating and review count */}
        <div className="p-4">
          {recipeData ? (
            <h2 className="font-bold text-3xl">{recipeData.title}</h2>
          ) : null}
          <div className="flex items-center mb-2">
            <AiFillStar size={20} className="text-yellow-500 mr-1" />
            <AiFillStar size={20} className="text-yellow-500 mr-1" />
            <AiFillStar size={20} className="text-yellow-500 mr-1" />
            <AiFillStar size={20} className="text-yellow-500 mr-1" />
            <AiFillStar size={20} className="text-yellow-500 mr-2" />
            <span className="text-gray-500">(15)</span>
          </div>
          <button className="flex items-center text-gray-500 hover:text-black transition duration-300 ease-in-out mb-2">
            Read Reviews <HiArrowSmDown size={25} className="ml-1" />
          </button>
          <div className="grid grid-cols-3 gap-2 bg-gray-200 rounded-lg p-3 mt-5">
            <div className="bg-white rounded-md p-2 text-center">
              Prep Mins: 30
            </div>
            <div className="bg-white rounded-md p-2 text-center">
              Cook Mins: 30
            </div>
            <div className="bg-white rounded-md p-2 text-center">
              Servings: 30
            </div>
          </div>
        </div>

        {/* Render main image if recipeData is not null */}
        {recipeData ? (
          <div>
            <div className="hidden md:block h-full w-full">
              <img
                src={recipeData.image}
                alt={recipeData.title}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
            <div className="md:hidden h-60">
              <img
                src={recipeData.image}
                alt={recipeData.title}
                className="h-full w-full object-cover rounded-2xl"
              />
            </div>
          </div>
        ) : null}
      </div>
      {/* Box with prepMins, cookMins and the amount of servings */}
      {/* Equipment needed */}
    </div>
  );
}

export default SpecificRecipe;

//  {/* Render recipe summary if recipeData is not null */}
//  {recipeData ? (
//   <div
//     dangerouslySetInnerHTML={{
//       __html: parser.parseFromString(recipeData.summary, "text/html").body
//         .innerHTML,
//     }}
//   />
// ) : null}

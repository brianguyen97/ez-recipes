import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HiArrowSmDown } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

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
  }, [RecipeId]); // Run useEffect hook only when RecipeId paramter changes

  return (
    <div>
      <div className="border border-secondary rounded-2xl shadow-xl bg-primary p-3  mx-[5%] mt-1 h-screen grid sm:grid-cols-2 grid-rows-2">
        {/* Render rating and review count */}
        {/* Render recipe title if recipeData is not null, otherwise show loading message */}
        <div className="flex flex-col justify-center items-center">
          {recipeData ? (
            <h2 className="font-bold text-3xl">{recipeData.title}</h2>
          ) : null}

          <div className="flex items-center">
            <AiFillStar size={20} /> <AiFillStar size={20} />{" "}
            <AiFillStar size={20} /> <AiFillStar size={20} />{" "}
            <AiFillStar size={20} />| (15){" "}
          </div>
          <div className="flex items-center">
            Read Reviews <HiArrowSmDown size={25} />
          </div>
          <div className="grid grid-cols-3 gap-2 p-3 bg-gray-200 rounded-lg mt-5">
            <div className="bg-white rounded-md p-2 text-center">
              Prep Mins: 30
            </div>
            <div className="bg-white rounded-md p-2 text-center">
              Cook Mins: 60
            </div>
            <div className="bg-white rounded-md p-2 text-center">
              Servings: 4
            </div>
          </div>
        </div>

        {/* Render main image if recipeData is not null */}
        {recipeData ? (
          <div>
            <div className="border-t-2 border-gray-300 py-3 md:hidden"></div>
            <img
              src={recipeData.image}
              alt={recipeData.title}
              className="md:h-screen max-h-[90%] md:mt-0 mt-12"
            />
          </div>
        ) : null}
      </div>
      {/* Box with prepMins, cookMins and the amount of servings */}
      {/* Step by step instructions  */}
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

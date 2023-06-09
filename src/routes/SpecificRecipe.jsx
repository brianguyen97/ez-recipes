import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { HiArrowSmDown } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import CookingTime from "../components/CookingTime";
import NutritionFacts from "../components/NutritionFacts";
import Ingredients from "../components/Ingredients";
import RecipeInstructions from "../components/RecipeInstructions";
import RecipeSummary from "../components/RecipeSummary";

const API_KEY = process.env.REACT_APP_RAPID_API_KEY; // Define API key constant
const API_HOST = process.env.REACT_APP_RAPID_API_HOST; // Define API host constant

function SpecificRecipe() {
  const { RecipeId } = useParams(); // Retrieve RecipeId from URL parameter
  const [recipeData, setRecipeData] = useState(null); // Initialize recipeData state to null
  const [ingredients, setIngredients] = useState(null);
  const [nutritionFacts, setNutritionFacts] = useState(null);
  const [summary, setSummary] = useState(null);
  const [analyzedInstructions, setAnalyzedInstructions] = useState(null);
  const [instructions, setInstructions] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${RecipeId}/information`,
      params: { includeNutrition: "true" },
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setRecipeData(response.data); // Update recipeData state with API response data
        setIngredients(response.data.extendedIngredients);
        setNutritionFacts(response.data.nutrition);
        setSummary(response.data.summary);
        setAnalyzedInstructions(response.data.analyzedInstructions);
        setInstructions(response.data.instructions);
        console.log(response.data); // Log API response data to console for debugging purposes
      })
      .catch(function (error) {
        console.error(error); // Log any errors to console for debugging purposes
      });
  }, [RecipeId]); // Run useEffect hook only when RecipeId paramter changes

  return (
    <div className="p-3 mx-auto max-w-screen-lg">
      <div className="border border-secondary rounded-2xl shadow-xl bg-primary">
        {/* Render rating and review count */}
        <div className="p-4">
          {recipeData ? (
            <h2 className="font-bold text-3xl flex items-center justify-center">
              {recipeData.title}
            </h2>
          ) : null}
          <div className="flex items-center justify-center mb-2">
            <AiFillStar size={20} className="text-yellow-500 mr-1" />
            <AiFillStar size={20} className="text-yellow-500 mr-1" />
            <AiFillStar size={20} className="text-yellow-500 mr-1" />
            <AiFillStar size={20} className="text-yellow-500 mr-1" />
            <AiFillStar size={20} className="text-yellow-500 mr-2" />
            <span className="text-gray-500">(15)</span>
          </div>
          <div className="flex items-center justify-center text-gray-500 hover:text-black transition duration-300 ease-in-out mb-2">
            Read Reviews <HiArrowSmDown size={25} className="ml-1" />
          </div>
          <CookingTime recipeData={recipeData} />
        </div>

        {/* Render main image if recipeData is not null */}
        {recipeData ? (
          <div className="flex justify-center border-b-2">
            <img
              src={recipeData?.image}
              alt={recipeData?.title}
              className="h-300 w-400 object-cover rounded-2xl p-5"
            />
          </div>
        ) : null}

        <RecipeSummary summary={summary} />
        <NutritionFacts nutritionFacts={nutritionFacts} />
        <Ingredients ingredients={ingredients} />
        <RecipeInstructions
          instructions={instructions}
          analyzedInstructions={analyzedInstructions}
        />
      </div>
    </div>
  );
}

export default SpecificRecipe;

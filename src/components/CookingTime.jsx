import React from "react";

function CookingTime({ recipeData }) {
  return (
    <div className="grid grid-cols-3 gap-2 p-3 bg-gray-200 rounded-lg mt-5">
      <div className="bg-white rounded-md p-2 text-center">
        Prep Mins: {recipeData?.preparationMinutes || "N/A"}
      </div>
      <div className="bg-white rounded-md p-2 text-center">
        Cook Mins: {recipeData?.cookingMinutes || "N/A"}
      </div>
      <div className="bg-white rounded-md p-2 text-center">
        Servings: {recipeData?.servings || "N/A"}
      </div>
    </div>
  );
}

export default CookingTime;

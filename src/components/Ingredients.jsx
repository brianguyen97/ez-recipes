import React from "react";

function Ingredients(props) {
  // Log props.ingredients to console for debugging purposes
  console.log(props.ingredients);

  // Check if props.ingredients is undefined or null
  if (!props.ingredients) {
    // Return null to avoid rendering anything
    return null;
  }

  // Render the ingredients list
  return (
    <div className="bg-white p-5 mt-5 mx-auto border-b-2">
      <p className="text-2xl font-medium text-gray-700 mb-3">Ingredients</p>
      <ul className="list-disc pl-0 text-gray-600 leading-relaxed ">
        {/* Map through each ingredient in props.ingredients */}
        {props.ingredients.map((ingredient, index) => (
          <li key={index} className="flex">
            <span className="mr-2">&#8226;</span>
            <span className="">
              {/* Round the amount property of the ingredient to the nearest ten */}
              {Math.round(ingredient?.measures.metric.amount / 10) * 10}{" "}
              {/* Use the unitShort property of the metric object */}
              {ingredient?.measures.metric.unitShort} {ingredient?.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;

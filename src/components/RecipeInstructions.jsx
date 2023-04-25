import React from "react";
import { v4 as uuidv4 } from "uuid";

function RecipeInstructions({ analyzedInstructions, instructions }) {
  // If there are no analyzed instructions or instructions, display a message
  if (!analyzedInstructions || !instructions) {
    return <p className="text-gray-700">No recipe data available.</p>;
  }

  const data = analyzedInstructions[0].steps;

  return (
    <ol className="list-inside bg-gray-100 rounded-md p-4 md:p-6 lg:p-8">
      {data.map((step) => (
        <li key={uuidv4()} className="mb-4 flex items-center">
          <div className="w-8 h-8 mr-2 flex justify-center items-center bg-gray-300 rounded-full text-gray-700 font-bold">
            {step.number}.
          </div>
          <p className="text-gray-700">{step.step}</p>
        </li>
      ))}
    </ol>
  );
}

export default RecipeInstructions;

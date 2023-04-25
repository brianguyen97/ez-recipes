import React from "react";
import { v4 as uuidv4 } from "uuid";

function RecipeInstructions({ analyzedInstructions, instructions }) {
  // If there are no analyzed instructions, don't render anything
  if (!analyzedInstructions) return null;
  if (!instructions) return null;

  // Get the list of steps from the analyzed instructions
  const data = analyzedInstructions[0].steps;

  // Loop through each step and display it in a list item
  return (
    <ol className="list-inside p-4 md:p-6 lg:p-8">
      {data.map((step) => (
        // Use the uuidv4 package to generate a unique key for each list item
        <li key={uuidv4()} className="mb-4 flex items-center">
          {/* Display the step number followed by a dot */}
          <div className="mr-2 text-lg font-medium">{step.number}.</div>
          {/* Display the step text */}
          <p className="text-gray-700">{step.step}</p>
        </li>
      ))}
    </ol>
  );
}

export default RecipeInstructions;

import React from "react";
import { v4 as uuidv4 } from "uuid";

function RecipeInstructions({ analyzedInstructions, instructions }) {
  if (!analyzedInstructions) return null;

  const data = analyzedInstructions[0].steps;
  console.log(data, "data");

  return (
    <ol className="list-inside">
      {data.map((step) => (
        <li key={uuidv4()} className="mb-4">
          <p className="text-lg font-medium">{step.number}</p>
          <p className="text-gray-700">{step.step}</p>
        </li>
      ))}
    </ol>
  );
}

export default RecipeInstructions;

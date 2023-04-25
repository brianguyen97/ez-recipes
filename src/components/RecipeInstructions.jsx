import React from "react";

function RecipeInstructions({ analyzedInstructions, instructions }) {
  if (!analyzedInstructions) return null;

  console.log(
    analyzedInstructions[0].steps,
    instructions,
    "from reccipeInsturctions"
  );
  return <div>RecipeInstructions</div>;
}

export default RecipeInstructions;

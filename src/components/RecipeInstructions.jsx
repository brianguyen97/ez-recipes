import React from "react";

function RecipeInstructions({ analyzedInstructions, instructions }) {
  console.log(
    analyzedInstructions[0].steps,
    instructions,
    "from reccipeInsturctions"
  );
  return <div>RecipeInstructions</div>;
}

export default RecipeInstructions;

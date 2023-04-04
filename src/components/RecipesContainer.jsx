import React from "react";
import RecipesContainerItem from "./RecipesContainerItem";

function RecipesContainer(props) {
  const { results } = props;

  return (
    <div className="mt-5 rounded-div grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {results.length !== 0 && // Use conditional rendering to only render when results array is not empty
        results.map((recipe) => (
          <RecipesContainerItem key={recipe.id} {...recipe} />
        ))}
    </div>
  );
}

export default RecipesContainer;

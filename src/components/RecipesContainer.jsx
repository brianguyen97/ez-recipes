import React from "react";
import RecipesContainerItem from "./RecipesContainerItem";

function RecipesContainer(props) {
  const { results } = props;

  return (
    <div className="flex flex-wrap justify-center mt-8 gap-8">
      {results.map((recipe) => (
        <RecipesContainerItem key={recipe.id} {...recipe} />
      ))}
    </div>
  );
}

export default RecipesContainer;

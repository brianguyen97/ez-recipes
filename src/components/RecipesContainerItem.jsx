import React from "react";

function RecipesContainerItem() {
  return (
    <div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="h-48 w-full object-contain"
        src="https://spoonacular.com/recipeImages/1812031-312x231.jpg"
        alt="Card image cap"
      />
      <div className="p-4">
        <h3 className="text-gray-900 font-semibold text-lg">Card title</h3>
        <p className="mt-2 text-gray-600">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a
          href="#"
          className="mt-2 text-lg font-medium text-indigo-500 hover:text-indigo-600"
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default RecipesContainerItem;

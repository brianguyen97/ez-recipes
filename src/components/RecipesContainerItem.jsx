import React from "react";
import { Link } from "react-router-dom";

function RecipesContainerItem(props) {
  // Destructure the image, title, and id props from the props object
  const { image, title, id } = props;

  return (
    <div className="rounded-div w-full max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Display the recipe image */}
      <img
        className="h-48 w-full object-contain"
        src={image}
        alt="Card image cap"
      />
      <div className="p-4">
        {/* Display the recipe title */}
        <h3 className="text-gray-900 font-semibold text-lg text-center">
          {title}
        </h3>

        {/* Create a link to view the recipe using the Link component */}
        <Link
          to={`/recipe/${id}`} // Set the link URL dynamically using a template literal
          className="mt-2 text-lg font-medium text-indigo-500 hover:text-indigo-600 flex justify-center"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipesContainerItem;

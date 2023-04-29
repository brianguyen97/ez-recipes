import React from "react";
import { Link } from "react-router-dom";

function RecipesContainerItem(props) {
  const { image, title, id } = props;

  return (
    <div className="rounded-div w-full max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden transition duration-200 transform hover:-translate-y-1">
      <img className="h-48 w-full object-contain" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-gray-900 font-semibold text-lg text-center">
          {title}
        </h3>
        <Link
          to={`/recipe/${id}`}
          className="mt-2 text-lg font-medium text-indigo-500 hover:text-indigo-600 flex justify-center"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipesContainerItem;

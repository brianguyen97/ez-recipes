import React from "react";
import { Link } from "react-router-dom";

function RecipesContainerItem(props) {
  const { image, title, id } = props;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 transition duration-200 transform hover:-translate-y-1 hover:shadow-lg">
      <img className="h-48 w-full object-cover" src={image} alt={title} />
      <div className="p-4">
        <h3 className="text-gray-800 font-semibold text-lg">{title}</h3>
        <Link
          to={`/recipe/${id}`}
          className="mt-4 bg-indigo-500 text-white text-center px-4 py-2 rounded-lg block font-medium hover:bg-indigo-600 transition-colors duration-300"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
}

export default RecipesContainerItem;

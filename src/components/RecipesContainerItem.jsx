import React from "react";

function RecipesContainerItem(props) {
  const { image, title } = props;

  return (
    <div className="rounded-div w-full max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img
        className="h-48 w-full object-contain"
        src={image}
        alt="Card image cap"
      />
      <div className="p-4">
        <h3 className="text-gray-900 font-semibold text-lg text-center">
          {title}
        </h3>

        <a
          href="#"
          className="mt-2 text-lg font-medium text-indigo-500 hover:text-indigo-600 flex justify-center"
        >
          View Recipe
        </a>
      </div>
    </div>
  );
}

export default RecipesContainerItem;

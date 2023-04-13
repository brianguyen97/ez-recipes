import React from "react";

function Ingredients() {
  const ingredients = [
    "1 pound elbow macaroni",
    "4 tablespoons unsalted butter",
    "1/4 cup all-purpose flour",
    "3 cups whole milk",
    "1/2 teaspoon garlic powder",
    "1/2 teaspoon onion powder",
    "1/2 teaspoon mustard powder",
    "1/4 teaspoon cayenne pepper",
    "8 ounces grated cheddar cheese",
    "4 ounces grated Gruyere cheese",
    "4 ounces cream cheese, softened",
    "1/2 cup panko bread crumbs",
    "2 tablespoons chopped fresh parsley",
    "Salt and pepper, to taste",
  ];

  return (
    <div className="bg-white rounded-lg p-5 shadow-md mt-5">
      <p className="text-2xl font-medium text-gray-700 mb-3">Ingredients</p>
      <ul className="list-disc pl-0 text-gray-600 leading-relaxed">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex">
            <span className="mr-2">&#8226;</span>
            <span className="">{ingredient}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ingredients;

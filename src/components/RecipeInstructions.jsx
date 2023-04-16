import React from "react";

function RecipeInstructions() {
  const instructions = [
    "Preheat oven to 375°F.",
    "Cook macaroni according to package instructions. Drain and set aside.",
    "In a large saucepan, melt butter over medium heat. Whisk in flour and cook for 1 minute, stirring constantly.",
    "Gradually whisk in milk until smooth. Stir in garlic powder, onion powder, mustard powder, and cayenne pepper.",
    "Cook sauce over medium heat, stirring constantly, until thickened, about 5 minutes.",
    "Stir in cheddar cheese, Gruyere cheese, and cream cheese until melted and smooth.",
    "Add cooked macaroni to the sauce and stir until well coated.",
    "Pour macaroni and cheese into a large baking dish.",
    "In a small bowl, combine bread crumbs and parsley. Sprinkle over macaroni and cheese.",
    "Bake for 25-30 minutes, or until golden brown and bubbly.",
    "Let cool for a few minutes before serving.",
  ];

  return (
    <div className="bg-white p-5 shadow-md mt-5">
      <p className="text-2xl font-medium text-gray-700 mb-3">Instructions</p>
      <ol className="list-decimal pl-5 text-gray-600 leading-relaxed">
        {instructions.map((instruction, index) => (
          <li key={index} className="mb-3">
            {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeInstructions;

import React from "react";

function NutritionFacts({ nutritionFacts }) {
  // If there is no nutrition data display a message
  if (!nutritionFacts) {
    return <p className="text-gray-700">No nutrition data available.</p>;
  }
  const servingSize = "1 bowl (240g)";
  const calories = "290";
  const carbs = "35g";
  const fat = "12g";
  const protein = "10g";

  console.log(nutritionFacts, "nF");

  return (
    <div className="flex flex-col items-center justify-center bg-yellow-100 p-5">
      <p className="text-lg font-medium text-gray-700 mb-3 text-center">
        Nutrition Facts
      </p>
      <table className="w-full text-center">
        <tbody>
          <tr>
            <td className="font-medium text-gray-700 py-1 border-b border-gray-300">
              Serving Size
            </td>
            <td className="text-gray-600 py-1 border-b border-gray-300">
              {servingSize}
            </td>
          </tr>
          <tr>
            <td className="font-medium text-gray-700 py-1 border-b border-gray-300">
              Calories
            </td>
            <td className="text-gray-600 py-1 border-b border-gray-300">
              {calories}
            </td>
          </tr>
          <tr>
            <td className="font-medium text-gray-700 py-1 border-b border-gray-300">
              Total Carbs
            </td>
            <td className="text-gray-600 py-1 border-b border-gray-300">
              {carbs}
            </td>
          </tr>
          <tr>
            <td className="font-medium text-gray-700 py-1 border-b border-gray-300">
              Total Fat
            </td>
            <td className="text-gray-600 py-1 border-b border-gray-300">
              {fat}
            </td>
          </tr>
          <tr>
            <td className="font-medium text-gray-700 py-1">Protein</td>
            <td className="text-gray-600 py-1">{protein}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NutritionFacts;

import React from "react";

function NutritionFacts({ nutritionFacts }) {
  // If there is no nutrition data display a message
  if (!nutritionFacts) {
    return <p className="text-gray-700">No nutrition data available.</p>;
  }
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
              {nutritionFacts.weightPerServing.amount}
              {nutritionFacts.weightPerServing.unit}
            </td>
          </tr>
          <tr>
            <td className="font-medium text-gray-700 py-1 border-b border-gray-300">
              {nutritionFacts.nutrients[0].name}
            </td>
            <td className="text-gray-600 py-1 border-b border-gray-300">
              {Math.floor(nutritionFacts.nutrients[0].amount)}
            </td>
          </tr>
          <tr>
            <td className="font-medium text-gray-700 py-1 border-b border-gray-300">
              Total Carbs
            </td>
            <td className="text-gray-600 py-1 border-b border-gray-300">26g</td>
          </tr>
          <tr>
            <td className="font-medium text-gray-700 py-1 border-b border-gray-300">
              Total Fat
            </td>
            <td className="text-gray-600 py-1 border-b border-gray-300">15g</td>
          </tr>
          <tr>
            <td className="font-medium text-gray-700 py-1">Protein</td>
            <td className="text-gray-600 py-1">25g</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default NutritionFacts;

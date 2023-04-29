import React from "react";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-300">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-purple-900">
          Welcome to RecipeFinder!
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1612432549954-8c654f087458"
            alt="Appetizers"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Appetizers</h2>
            <p className="text-gray-700">
              Need some inspiration for your next party? Check out our
              collection of delicious appetizers!
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1503024779300-a6a5c5b7e5d3"
            alt="Main Dishes"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Main Dishes
            </h2>
            <p className="text-gray-700">
              Looking for a tasty dinner option? Check out our collection of
              mouth-watering main dishes!
            </p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            className="w-full h-48 object-cover"
            src="https://images.unsplash.com/photo-1467531546069-67f207684c0e"
            alt="Desserts"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Desserts</h2>
            <p className="text-gray-700">
              Need something sweet to satisfy your cravings? Check out our
              collection of delectable desserts!
            </p>
          </div>
        </div>
      </div>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-16">
        Search for Recipes
      </button>
    </div>
  );
}

export default LandingPage;

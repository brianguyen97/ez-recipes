import React from "react";

function CookingTime(props) {
  return (
    <div className="grid grid-cols-3 gap-2 p-3 bg-gray-200 rounded-lg mt-5">
      <div className="bg-white rounded-md p-2 text-center">Prep Mins: 30</div>
      <div className="bg-white rounded-md p-2 text-center">Cook Mins: 60</div>
      <div className="bg-white rounded-md p-2 text-center">Servings: 4</div>
    </div>
  );
}

export default CookingTime;

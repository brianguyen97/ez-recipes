import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  // Set up state to track the width of the screen
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Update the state with the width of the screen on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine the number of columns for the grid based on screen width
  const numColumns = screenWidth > 768 ? 3 : 1;

  // Define the images for the grid items
  const images = [
    {
      src: "https://images.unsplash.com/photo-1611759650297-9fd869c36f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Appetizers",
    },
    {
      src: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      alt: "Main Dishes",
    },
    {
      src: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80",
      alt: "Desserts",
    },
  ];

  // Define the grid items
  const gridItems = [
    {
      title: "Appetizers",
      description:
        "Need some inspiration for your next party? Check out our collection of delicious appetizers!",
    },
    {
      title: "Main Dishes",
      description:
        "Looking for a tasty dinner option? Check out our collection of mouth-watering main dishes!",
    },
    {
      title: "Desserts",
      description:
        "Need something sweet to satisfy your cravings? Check out our collection of delectable desserts!",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-blue-500">
          Welcome to EZRecipes!
        </h1>
      </div>
      <div className={`grid grid-cols-${numColumns} gap-8`}>
        {gridItems.map((item, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <img
              className="w-full h-48 object-cover"
              src={images[index].src}
              alt={images[index].alt}
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/search"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-16"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        Search for Recipes
      </Link>
    </div>
  );
}

export default LandingPage;

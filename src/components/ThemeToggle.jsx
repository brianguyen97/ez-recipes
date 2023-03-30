import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  // Use the useContext hook to access the theme and setTheme values from ThemeContext
  const { theme, setTheme } = useContext(ThemeContext);

  // Determine if the current theme is dark or not
  const isDarkMode = theme === "dark";

  // Define a function to toggle the theme between dark and light
  const toggleTheme = () => setTheme(isDarkMode ? "light" : "dark");

  // Define the icon to be displayed based on the current theme
  const icon = isDarkMode ? (
    <HiSun className="text-primary text-2xl mr-2" />
  ) : (
    <HiMoon className="text-primary text-2xl mr-2" />
  );

  // Define the label to be displayed based on the current theme
  const label = isDarkMode ? "Light Mode" : "Dark Mode";

  // Render the component with the icon, label, and click handler
  return (
    <div className="p-2">
      <div className="flex items-center cursor-pointer" onClick={toggleTheme}>
        {icon} {label}
      </div>
    </div>
  );
};

export default ThemeToggle;

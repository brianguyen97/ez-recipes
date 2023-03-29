import React, { useState, useEffect, createContext } from "react";

// This function checks the user's preference for a theme
const getInitialTheme = () => {
  // Check if localStorage is available (won't be available during server-side rendering)
  if (typeof window !== "undefined" && window.localStorage) {
    // Get the color theme preference from localStorage if it exists
    const storedPrefs = window.localStorage.getItem("color-theme");
    if (typeof storedPrefs === "string") {
      return storedPrefs;
    }

    // Check if user has a preference for a dark theme using their operating system settings
    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  // Return 'light' as the default theme
  return "light";
};

// Create a new context object to share data across React components
export const ThemeContext = createContext();

// This component provides the theme to its child components via the ThemeContext
export const ThemeProvider = ({ initialTheme, children }) => {
  // Use the getInitialTheme function to initialize the theme state variable
  const [theme, setTheme] = useState(getInitialTheme);

  // Helper function to apply the theme preference to the HTML root element and save it to local storage
  const rawSetTheme = (theme) => {
    const root = window.document.documentElement;
    const isDark = theme === "dark";

    // Remove any existing theme class from the HTML root element and add the new one
    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(theme);

    // Save the theme preference to local storage
    localStorage.setItem("color-theme", theme);
  };

  // If an initialTheme prop is provided, apply it when the component is first rendered
  if (initialTheme) {
    rawSetTheme(initialTheme);
  }

  // Use the useEffect hook to apply the current theme whenever the theme state variable changes
  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  // Return the ThemeContext.Provider component with the theme and setTheme values as its value
  // The child components are wrapped by this provider
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React from "react";

function RecipeSummary({ summary }) {
  // Create new instance of DOMParser to parse HTML string
  const parser = new DOMParser();

  // Check if summary is undefined, null or falsy
  if (!summary) {
    // Return a div element with text "No summary available" to avoid rendering anything
    return (
      <div className="max-w-3xl mx-auto py-2 px-4">No summary available</div>
    );
  }

  // Render the div element with parsed HTML content and padding values
  return (
    <div
      className="max-w-3xl mx-auto py-1 px-2 sm:py-2 sm:px-4 md:py-4 md:px-6 lg:py-6 lg:px-8 xl:py-8 xl:px-10"
      dangerouslySetInnerHTML={{
        __html: parser.parseFromString(summary, "text/html").body.innerHTML,
      }}
    />
  );
}

export default RecipeSummary;

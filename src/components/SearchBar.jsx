import React from "react";

function SearchBar(props) {
  return (
    <div className="flex justify-center items-center mt-6">
      <form className="flex items-center" onSubmit={props.handleSubmit}>
        <input
          className="w-64 px-3 py-2 mr-2 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          type="text"
          placeholder="Find Recipes"
          value={props.searchTerm}
          onChange={props.handleChange}
        />
        <button
          className="px-4 py-2 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

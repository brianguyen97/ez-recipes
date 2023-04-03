import React from "react";

function SearchBar(props) {
  return (
    <div className="flex justify-center items-center mt-6">
      <form className="flex items-center" onSubmit={props.handleSubmit}>
        <input
          className="w-64 px-3 py-2 mr-2 bg-primary border border-input rounded-2xl shadow"
          type="text"
          placeholder="Find Recipes"
          value={props.searchTerm}
          onChange={props.handleChange}
        />
        <button
          className="px-3 py-2 bg-button text-btnText rounded-2xl shadow"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;

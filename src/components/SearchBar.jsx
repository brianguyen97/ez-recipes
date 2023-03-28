import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Do something with the search term, such as search for data
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="flex flex-col items-center border rounded-full">
      <div className="flex items-center">
        <input
          type="search"
          name="search"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          className="bg-transparent py-2 px-4 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-full px-6 py-2 mx-2 hover:bg-blue-600 focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

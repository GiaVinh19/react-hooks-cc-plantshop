import React from "react";

function Search({query, onUpdateQuery}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={query}
        onChange={onUpdateQuery}
        // onChange={(e) => console.log("Searching...")}
      />
    </div>
  );
}

export default Search;

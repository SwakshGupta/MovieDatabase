import React from "react";

function SearchBox(props) {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search..."
        className="border p-2 rounded-lg"
        value={props.value}
        onChange={(e) => props.setSearch(e.target.value)} // when we write anything on search bar then this onchange function will get activate and will update the value
      />
      <button className="bg-green-700 text-white p-2 rounded-lg">Search</button>
    </div>
  );
}

export default SearchBox;

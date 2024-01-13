import "./index.css";
import React, { useState } from "react";
import Search from "./components/searchbar";

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="App">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Here..."
          className="search-box"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* {console.log(query)} */}
      <div>
        <Search query={query} />
      </div>
    </div>
  );
}

import "Styles/Search.css";
import React, { useContext } from "react";
import { DataContext } from "Context/DataProvider";
import { Search, Voice } from "react-iconly";
export default function InputSearch() {
  const value = useContext(DataContext);
  const handleSearch = value.handleSearch;

  return (
    <div className="Search">
      <div className="Header-Search">
        <i className="Icon">
          <Search />
        </i>
      </div>
      <input
        className="Header-Input"
        type="text"
        placeholder="Sabor de guajolota, bebida..."
        onChange={handleSearch}
      />
      <span></span>
      <button className="Header-Voice">
        <i className="Icon">
          <Voice />
        </i>
      </button>
    </div>
  );
}

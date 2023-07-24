import React, { useState } from "react";

function CategoryFilter({ categories, onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState("");

  function handleFilteredBy(category) {
    setSelectedFilter(category);
    onFilterChange(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleFilteredBy(category)}
          className={selectedFilter === "All" ? "selected" : ""}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
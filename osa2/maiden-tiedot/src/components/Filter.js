import React from "react";

export const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      Find countries: <input value={filter} onChange={handleFilterChange} />
    </div>
  );
};

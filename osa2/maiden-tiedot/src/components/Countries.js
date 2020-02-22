import React from "react";
import { Country } from "./Country";

export const Countries = ({ countries, filter, handleShowCountry }) => {
  const rows = () => {
    if (filter === "") {
      return "";
    } else {
      const filtered = countries.filter(country =>
        country.name.toLowerCase().includes(filter.toLowerCase())
      );

      if (filtered.length >= 10) {
        return "Too many matches, please specify another filter";
      }
      if (filtered.length === 1) {
        return <Country country={filtered[0]} />;
      } else {
        return filtered.map(country => (
          <div key={country.name}>
            {country.name}
            <button onClick={handleShowCountry} country={country.name}>
              show
            </button>
          </div>
        ));
      }
    }
  };
  return <div>{rows()}</div>;
};

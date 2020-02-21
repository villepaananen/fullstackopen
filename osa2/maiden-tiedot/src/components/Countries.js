import React from "react";

const Country = ({ country }) => {
  const languages = () => {
    return country.languages.map(language => (
      <li key={language.name}>{language.name}</li>
    ));
  };
  return (
    <>
      <h2>{country.name}</h2>
      <div>Capital: {country.capital}</div>
      <div>Population: {country.population}</div>
      <h3>Languages:</h3>
      <ul> {languages()} </ul>
      <img src={country.flag} alt="Flag" width="100px"></img>
    </>
  );
};

export const Countries = ({ countries, filter }) => {
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
        return filtered.map(country => <div>{country.name}</div>);
      }
    }
  };
  return <div>{rows()}</div>;
};

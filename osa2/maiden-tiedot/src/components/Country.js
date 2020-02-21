import React from "react";

export const Country = ({ country }) => {
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

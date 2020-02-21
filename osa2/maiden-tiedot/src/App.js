import React, { useState, useEffect } from "react";
import axios from "axios";
import { Filter } from "./components/Filter";
import { Countries } from "./components/Countries";
import "./App.css";

function App() {
  const [filter, setCountryFilter] = useState("");
  const [countries, setCountries] = useState("");

  const handleFilterChange = event => setCountryFilter(event.target.value);

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(response => {
      console.log("promise fulfilled");
      setCountries(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Countries countries={countries} filter={filter} />
    </div>
  );
}

export default App;

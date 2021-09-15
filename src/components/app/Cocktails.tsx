import React, { useState } from "react";
import { useQuery } from "react-query";
import mealFinderAPI from "../Fetch/MealFinderAPI";
import CocktailDetails from "./CocktailDetails";

export interface CocktailsProps {}

const Cocktails = ({}: CocktailsProps) => {
  const [drinksName, setDrinksName] = useState("margarita");
  const [searchTerm, setSearchTerm] = useState("");
  const [apiSearchType, setAPISearchType] = useState("search.php?s=");
  const { data, status } = useQuery(
    [
      "cocktail",
      "https://www.thecocktaildb.com/api/json/v1/1/",
      `${apiSearchType}`,
      `${drinksName}`,
    ],
    mealFinderAPI
  );

  const apiTypicalSearch = "search.php?s=";
  const apiRandomSearch = "random.php";

  const updateSearch = (valuedrinks: string, searchType: string) => {
    const drinksNameUpdate = valuedrinks.replaceAll(" ", "_");
    setDrinksName(drinksNameUpdate);
    setAPISearchType(searchType);
  };

  const cleanUp = () => {
    setSearchTerm("Arrabiat");
    setAPISearchType(apiTypicalSearch);
  };

  return (
    <div id="MealFinder">
      <h3 id="MealTitle"> Cocktail Searcher</h3>
      <div className="MealHeader">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search API"
          id="inputSearchTerm"
          className="filterBuddydetail"
        />
        <section className="buttonSection">
          <div
            className="button"
            onClick={() => updateSearch(searchTerm, apiTypicalSearch)}
          >
            Search
          </div>
          <div
            className="button"
            onClick={() => updateSearch("", apiRandomSearch)}
          >
            Random Drink!
          </div>
        </section>
      </div>
      {status === "error" && (
        <div>
          Error Fetching Data{" "}
          <button className="button" onClick={() => cleanUp()}>
            Clear
          </button>
        </div>
      )}
      {status === "loading" && (
        <div className="cssAcquaintances">Loading Data....</div>
      )}
      {status === "success" && (
        <div className="mealFinderContainer ">
          {data.drinks &&
            data.drinks.length >= 1 &&
            data.drinks.map((drinks: any, drinksIndex: number) => (
              <div key={drinksIndex} className="cssAcquaintances">
                <CocktailDetails drinks={drinks} />
              </div>
            ))}
          {data.drinks == null && (
            <div className="cssAcquaintances boldFont">
              Sorry no cocktails named {drinksName} found!
            </div>
          )}
        </div>
      )}
      <div>
        Data from{" "}
        <a
          href="https://www.thecocktaildb.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          TheCocktailDB API
        </a>{" "}
      </div>
    </div>
  );
};

export default Cocktails;

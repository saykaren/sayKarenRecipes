import React, { useState } from "react";
import { useQuery } from "react-query";
import mealFinderAPI from "../Fetch/MealFinderAPI";
import MealDetails from "./MealDetails";

export interface MealFinderProps {}

const MealFinder = ({}: MealFinderProps) => {

  const [mealName, setMealName] = useState("Arrabiat");
  const [searchTerm, setSearchTerm] = useState("");
  const {data, status} = useQuery(
    [
      "meal",
      "https://www.themealdb.com/api/json/v1/1/",
      "search.php?s=",
      `${mealName}`,
    ],
    mealFinderAPI
  );

  const updateSearch = (valueMeal: string) => {
    const mealNameUpdate = valueMeal.replaceAll(" ", "_");
    setMealName(mealNameUpdate);
  };

  return (
    <div id="MealFinder">
     <h3 id="MealTitle"> Meal Searcher</h3>
      <div className="MealHeader">
           <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search API"
          id="inputSearchTerm"
          className="filterBuddydetail"
        />
        <div className="button" onClick={() => updateSearch(searchTerm)}>
          Search
        </div>
      </div>
      {status === "error" && (
    <div>
      Error Fetching Data <button onClick={() => console.log('clean up')}>Clear</button>
    </div>
  )}
  {status === "loading" && <div className="cssAcquaintances">Loading Data....</div>}
  {status === "success" && ( 
      <div className="mealFinderContainer ">
        {data.meals && data.meals.length >= 1 &&
          data.meals.map((meal: any, mealIndex: number) => (
            <div key={mealIndex} className="cssAcquaintances">
              <MealDetails meal={meal} />
            </div>
          ))} 
                 { data.meals == null && (
         <div className="cssAcquaintances boldFont">Sorry no meals with {mealName} found!
            </div>
          )} 
        </div>
      )}
    </div>
  );
};

export default MealFinder;

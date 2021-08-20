import React, { useState } from "react";
import { useQuery } from "react-query";
import mealFinderAPI from "../Fetch/MealFinderAPI";
import MealDetails from "./MealDetails";

export interface MealFinderProps {}

const MealFinder = ({}: MealFinderProps) => {
  const [mealName, setMealName] = useState("Arrabiat");
  const [searchTerm, setSearchTerm] = useState("");
  const mealData = useQuery(
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
      <h3> Meal Searcher</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Page"
        id="inputSearchTerm"
      />
      <div className="button" onClick={() => updateSearch(searchTerm)}>
        submit {mealName}
      </div>
      {mealData.status === "success" && (
        <div className="mealFinderContainer">
          {mealData.data.meals.length > 0 &&
            mealData.data.meals.map((meal: any, mealIndex: number) => (
              <div key={mealIndex}>
                <MealDetails meal={meal} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MealFinder;

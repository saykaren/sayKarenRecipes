import React, { useState } from "react";
import { useQuery } from "react-query";
import mealFinderAPI from "../Fetch/MealFinderAPI";

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
      Meal Searcher here Status: {mealData.status}
      {mealData.status === "success" && (
        <ul>
          {mealData.data.meals.length > 0 && (
            <>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Page"
                id="inputSearchTerm"
              />
              <div onClick={(e: any) => updateSearch(searchTerm)}>
                submit {mealName}
              </div>
              <li>{mealData.data.meals[0].strMeal} </li>
              <li>{mealData.data.meals[0].strCategory} </li>
              <li>{mealData.data.meals[0].strArea} </li>
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default MealFinder;

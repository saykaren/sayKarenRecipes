import * as React from "react";
import { useQuery } from "react-query";
import mealFinderAPI from "../Fetch/MealFinderAPI";

export interface MealFinderProps {}

const MealFinder = ({}: MealFinderProps) => {
  const mealData = useQuery(
    [
      "meal",
      "https://www.themealdb.com/api/json/v1/1/",
      "search.php?s=",
      "Arrabiat",
    ],
    mealFinderAPI
  );

  console.log({ mealData });
  return (
    <div id="MealFinder">
      Meal Searcher here Status:{mealData.status}
      <ul>
        {/* {mealData.data.meals.length > 0 &&  {mealData.data.meals.map((mealMe:any, mealIndex:number)=>(
           <li>{mealMe.idMeal} </li>
       ))} } */}
        {mealData.data.meals.length > 0 && (
          <>
            <li>{mealData.data.meals[0].strMeal} </li>
            <li>{mealData.data.meals[0].strCategory} </li>
            <li>{mealData.data.meals[0].strArea} </li>
          </>
        )}
      </ul>{" "}
    </div>
  );
};

export default MealFinder;

import * as React from "react";

export interface MealDetailsProps {
  meal: any;
}

const ingredientArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const MealDetails = ({ meal }: MealDetailsProps) => {
  return (
    <div className="mealDetails">
      <div className="mealHeader">
        {meal.strMealThumb && (
          <img
            src={meal.strMealThumb}
            alt="Meal picture"
            className="mealPicture"
          />
        )}
        {meal.strMeal && <h3>Name: {meal.strMeal}</h3>}
      </div>
      {meal.strCategory && <p>Category: {meal.strCategory}</p>}
      {meal.strInstructions && (
        <details>
          <summary>Instructions:</summary>
          {meal.strInstructions}
        </details>
      )}
      <details>
        <summary>Ingredients</summary>
        {ingredientArray.map((numberArray, indexArray) => (
          <div key={indexArray}>
            {" "}
            {meal[`strIngredient${numberArray}`] &&
              meal[`strIngredient${numberArray}`].length > 1 && (
                <li>
                  {meal[`strIngredient${numberArray}`]}:{" "}
                  {meal[`strMeasure${numberArray}`]}
                </li>
              )}
          </div>
        ))}
      </details>
      {meal.strYoutube && (
        <p>
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
            {" "}
            YouTube Video
          </a>
        </p>
      )}
    </div>
  );
};

export default MealDetails;

import * as React from "react";

export interface MealDetailsProps {
  meal: any;
}

const ingredientArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const MealDetails = ({ meal }: MealDetailsProps) => {
  return (
    <div className="mealDetails cssFriends">
      <div className="mealHeader cssCloseFriends">
        {meal.strMealThumb && (
          <img
            src={meal.strMealThumb}
            alt="Meal picture"
            className="mealPicture cssBestFriends"
          />
        )}
        {meal.strMeal && (
          <h3 className="cssBestFriends">Name: {meal.strMeal}</h3>
        )}
      </div>
      {meal.strCategory && (
        <div className="cssBestFriends">
          <span className="boldFont">Category:</span> {meal.strCategory}
        </div>
      )}
      <details className="cssBestFriends">
        <summary className="cssBestFriends boldFont">Ingredients</summary>
        {ingredientArray.map((numberArray, indexArray) => (
          <div key={indexArray}>
            {" "}
            {meal[`strIngredient${numberArray}`] &&
              meal[`strIngredient${numberArray}`].length > 0 &&
              meal[`strIngredient${numberArray}`] !== "" && (
                <li className="cssBestFriends">
                  {meal[`strIngredient${numberArray}`]}:{" "}
                  {meal[`strMeasure${numberArray}`]}
                </li>
              )}
          </div>
        ))}
      </details>
      {meal.strInstructions && (
        <details className="cssBestFriends">
          <summary className="cssBestFriends boldFont">Instructions:</summary>
          {meal.strInstructions}
        </details>
      )}
      {meal.strYoutube && (
        <div className="cssBestFriends">
          <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">
            {" "}
            YouTube Video
          </a>
        </div>
      )}
    </div>
  );
};

export default MealDetails;

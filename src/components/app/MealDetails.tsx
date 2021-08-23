import * as React from "react";

export interface MealDetailsProps {
  meal: any;
}

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

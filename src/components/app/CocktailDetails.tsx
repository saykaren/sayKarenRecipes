import * as React from "react";

export interface CocktailDetailsProps {
  drinks: any;
}

const ingredientArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 
];

const CocktailDetails = ({ drinks }: CocktailDetailsProps) => {
  return (
    <div className="mealDetails cssFriends">
      <div className="mealHeader cssCloseFriends">
        {drinks.strDrinkThumb && (
          <img
            src={drinks.strDrinkThumb}
            alt="Drink picture"
            className="mealPicture cssBestFriends"
          />
        )}
        {drinks.strMeal && (
          <h3 className="cssBestFriends">Name: {drinks.strMeal}</h3>
        )}
      </div>
      {drinks.strCategory && (
        <div className="cssBestFriends">
          <span className="boldFont">Category:</span> {drinks.strCategory}
        </div>
      )}
      {drinks.strInstructions && (
        <details className="cssBestFriends">
          <summary className="cssBestFriends boldFont">Instructions:</summary>
          {drinks.strInstructions}
        </details>
      )}
      <details className="cssBestFriends">
        <summary className="cssBestFriends boldFont">Ingredients</summary>
        {ingredientArray.map((numberArray, indexArray) => (
          <div key={indexArray} >
            {" "}
            {drinks[`strIngredient${numberArray}`] &&
              drinks[`strIngredient${numberArray}`].length > 0 &&
              drinks[`strIngredient${numberArray}`] !== "" && (
                <li className="cssBestFriends">
                  {drinks[`strIngredient${numberArray}`]}:{" "}
                  {drinks[`strMeasure${numberArray}`]}
                </li>
              )}
          </div>
        ))}
      </details>
      {drinks.strYoutube && (
        <div className="cssBestFriends">
          <a href={drinks.strYoutube} target="_blank" rel="noopener noreferrer">
            {" "}
            YouTube Video
          </a>
        </div>
      )}
    </div>
  );
};

export default CocktailDetails;

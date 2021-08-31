export interface mealsInterface {
  idMeal: null | string | undefined;
  strMeal: null | string | undefined;
  strDrinkAlternate: null | string | undefined;
  strCategory: null | string | undefined;
  strArea: null | string | undefined;
  strInstructions: null | string | undefined;
  strMealThumb: null | string | undefined;
  strTags: null | string | undefined;
  strYoutube: null | string | undefined;
  [strIngredient1: string]: null | string | undefined;
  strIngredient2: null | string | undefined;
  strIngredient3: null | string | undefined;
  strIngredient4: null | string | undefined;
  strIngredient5: null | string | undefined;
  strIngredient6: null | string | undefined;
  strIngredient7: null | string | undefined;
  strIngredient8: null | string | undefined;
  strIngredient9: null | string | undefined;
  strIngredient10: null | string | undefined;
  strIngredient11: null | string | undefined;
  strIngredient12: null | string | undefined;
  strIngredient13: null | string | undefined;
  strIngredient14: null | string | undefined;
  strIngredient15: null | string | undefined;
  strIngredient16: null | string | undefined;
  strIngredient17: null | string | undefined;
  strIngredient18: null | string | undefined;
  strIngredient19: null | string | undefined;
  strIngredient20: null | string | undefined;
  strMeasure1: null | string | undefined;
  strMeasure2: null | string | undefined;
  strMeasure3: null | string | undefined;
  strMeasure4: null | string | undefined;
  strMeasure5: null | string | undefined;
  strMeasure6: null | string | undefined;
  strMeasure7: null | string | undefined;
  strMeasure8: null | string | undefined;
  strMeasure9: null | string | undefined;
  strMeasure10: null | string | undefined;
  strMeasure11: null | string | undefined;
  strMeasure12: null | string | undefined;
  strMeasure13: null | string | undefined;
  strMeasure14: null | string | undefined;
  strMeasure15: null | string | undefined;
  strMeasure16: null | string | undefined;
  strMeasure17: null | string | undefined;
  strMeasure18: null | string | undefined;
  strMeasure19: null | string | undefined;
  strMeasure20: null | string | undefined;
  strSource: null | string | undefined;
  strImageSource: null | string | undefined;
  strCreativeCommonsConfirmed: null | string | undefined;
  dateModified: null | string | undefined;
}

export interface MealDataInterface {
  meals: Array<mealsInterface>;
}

export default MealDataInterface;

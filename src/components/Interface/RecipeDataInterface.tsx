export interface IngredientInterface {
  type: string;
  amount: string;
  section: string;
}
export interface RecipeDataInterface {
  recipeTitle: string;
  ingredients: Array<IngredientInterface>;
  preparationTime: number;
  preparationMeasurement: string;
  requiredInstruments: Array<string>;
  instructions: Array<string>;
  active: boolean;
  lillyRating?: number;
  mealType?: string;
  week?: number;
  groceryList?: boolean,
  calories?: number;
  protein?: number;
  goToLink?: string;
  linkItHere?: string;
  resource?: string;
  resourceLink?: string;
  otherRecipeLink?: string;
  otherRecipeLink2?: string;
}

export default RecipeDataInterface;

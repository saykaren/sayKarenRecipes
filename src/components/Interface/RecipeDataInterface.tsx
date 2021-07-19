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
  week?: number;
  groceryList?: boolean,
  calories?: number;
}

export default RecipeDataInterface;

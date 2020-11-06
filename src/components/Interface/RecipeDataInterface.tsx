
export interface IngredientInterface{
    type: string;
    amount: string;
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

}

export default RecipeDataInterface;
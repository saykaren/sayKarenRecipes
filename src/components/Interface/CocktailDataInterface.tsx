export interface drinkInterface {
    idDrink: null | string | undefined;
strDrink: null | string | undefined;
strDrinkAlternate: null | string | undefined;
strTags: null | string | undefined;
strVideo: null | string | undefined;
strCategory: null | string | undefined;
strIBA: null | string | undefined;
strAlcoholic: null | string | undefined;
strGlass: null | string | undefined;
strInstructions: null | string | undefined;
strInstructionsES: null | string | undefined;
strInstructionsDE: null | string | undefined;
strInstructionsFR: null | string | undefined;
strInstructionsIT: null | string | undefined;
// strInstructionsZH-HANS: null
// strInstructionsZH-HANT: null
strDrinkThumb: null | string | undefined;
[strIngredient1 : string]: null | string | undefined;
strIngredient2:  null | string | undefined;
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
strImageSource: null | string | undefined;
strImageAttribution: null | string | undefined;
strCreativeCommonsConfirmed: null | string | undefined;
dateModified: null | string | undefined;
}

export interface CocktailDetaInterface {
    drinks: Array<drinkInterface>;
}

export default CocktailDetaInterface;
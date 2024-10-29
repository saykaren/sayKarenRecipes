import React, { useState, useEffect } from "react";
import RecipeData from "../data/data";
import RecipeDataInterface from "../Interface/RecipeDataInterface";
import Lilly_Good from "../assests/Lilly_Good.jpg";
import Lilly_Bad from "../assests/Lilly_Bad.jpg";
import Lilly_Okay from "../assests/Lilly_Okay.jpg";
import Navigation from "./Navigation";
import Groceries from "./Groceries";
import cartImage from "../assests/shoppingCart.png";
import basket from "../assests/basket.png";
import toggleOn from "../assests/toggle_on.png";
import toggleOff from "../assests/toggle_off.png";

interface RecipeSectionProps {
  ratingShow: boolean;
  setRatingShow: (arg1: boolean) => void;
}

const RecipeSection = ({ ratingShow, setRatingShow }: RecipeSectionProps) => {
  const [data, setData] = useState<RecipeDataInterface[]>(RecipeData);
  const [loading, setLoading] = useState(false);
  const [filteredWeek, setFilteredWeek] = useState<number>(0);
  const [filteredMealType, setFilteredMealType] = useState<string>("");
  const [activeAllStatus, setActiveAllStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setLoading(false);
  }, []);

  const updateState = (selectedRecipeName: string, setValue: boolean) => {
    const newData = [...data];
    newData.forEach((recipe) => {
      if (recipe.recipeTitle === selectedRecipeName) {
        recipe.active = setValue;
      }
    });
    setData(newData);
  };

  const updateGrocery = (indexNumber: number) => {
    setLoading(true);
    const activity = data[indexNumber].groceryList;
    const newData = data;
    newData[indexNumber].groceryList = !activity;
    setData(newData);
  };

  const clearFilter = () => {
    setFilteredWeek(0);
    setSearchTerm("");
    setFilteredMealType("");
  };

  const updateActive = (change: boolean) => {
    setLoading(true);
    const newData = RecipeData;
    newData.map((data) => (data.active = change));
    setActiveAllStatus(change);
  };

  return (
    <>
      <header className="App-header">
        <Navigation
          ratingShow={ratingShow}
          setRatingShow={setRatingShow}
          clearFilter={clearFilter}
          updateActive={updateActive}
          activeAllStatus={activeAllStatus}
        />
      </header>
      {loading && <h2>LOADING</h2>}
      <div id="FilterBuddySection">
        <div className="FilterBuddy">
          <h4>Search Receipe Titles</h4>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            placeholder="Search for Recipe"
            className="filterBuddydetail"
          />
        </div>
        <div className="FilterBuddy">
          <h4>Search Week</h4>
          <select
            id="WeekFilter"
            value={filteredWeek}
            onChange={(e) =>
              setFilteredWeek(parseInt(e.currentTarget.value, 10))
            }
            placeholder="Search for Recipe"
            className="filterBuddydetail"
          >
            <option value={0}>Select One</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </div>
        <div className="FilterBuddy">
          <h4>Recipe Type</h4>
          <select
            id="WeekFilter"
            value={filteredMealType}
            onChange={(e) => setFilteredMealType(e.currentTarget.value)}
            placeholder="Search for Recipe"
            className="filterBuddydetail"
          >
            <option value={""}>Select One</option>
            <option value={"meal"}>Full meal</option>
            <option value={"side"}>Side</option>
            <option value={"salad"}>Salad</option>
            <option value={"soup"}>Soup</option>
            <option value={"dessert"}>Dessert</option>
            <option value={"smoothie"}>Smoothie</option>
            <option value={"dressing"}>Dressing</option>
            <option value={"veggie"}>Veggie Meal</option>
          </select>
          <button onClick={() => clearFilter()} className="buttonClear">
            Clear Filter
          </button>
        </div>
      </div>
      <div className="RecipeSection">
        {data &&
          data
            .filter((item) =>
              item.recipeTitle
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            )
            .filter((weekNumber) =>
              filteredWeek > 0 ? weekNumber.week === filteredWeek : weekNumber
            )
            .filter((meal) =>
              filteredMealType.length > 1
                ? meal.mealType === filteredMealType
                : meal
            )
            .sort((a, b) => a.recipeTitle.localeCompare(b.recipeTitle))
            .map((num, index) => (
              <div className="recipeCard cssFriends" key={`recipeCard${index}`}>
                <div className="cssCloseFriends">
                  <img
                    className="cssBestFriends"
                    alt="toggle"
                    src={num.active ? toggleOn : toggleOff}
                    onClick={() => updateState(num.recipeTitle, !num.active)}
                  />
                  {num && (
                    <h2
                      key={`recipeTitle${index}`}
                      className="cssBestFriends"
                      id={num.recipeTitle}
                    >
                      {num.recipeTitle}
                    </h2>
                  )}
                </div>
                {num.active && (
                  <>
                    <div className={`ingredients cssCloseFriends`}>
                      {ratingShow && num.lillyRating && (
                        <img
                          className="LillyRating cssBestFriends"
                          src={
                            num.lillyRating === 1
                              ? Lilly_Bad
                              : num.lillyRating === 3
                              ? Lilly_Good
                              : Lilly_Okay
                          }
                          alt="rating"
                        />
                      )}

                      <h3 className="cssBestFriends">Ingredients</h3>
                      {num.ingredients
                        .sort((a, b) => a.type.localeCompare(b.type))
                        .map((ingred, indexIngred) => (
                          <div key={indexIngred}>
                            &#9832; {ingred.type} <b>:</b> {ingred.amount}
                          </div>
                        ))}
                    </div>
                    <div className={`instructions cssCloseFriends`}>
                      <h3 className="cssBestFriends">Instructions</h3>
                      {num.instructions.map((instr, indexInstru) => (
                        <div className="cssBestFriends">
                          <b>{indexInstru + 1}.</b> {instr}
                        </div>
                      ))}
                    </div>
                    <div className="ingredients cssCloseFriends">
                      <b>Time:</b> {num.preparationTime}{" "}
                      {num.preparationMeasurement}
                    </div>
                    {num.requiredInstruments.length > 0 && (
                      <div className="ingredients cssCloseFriends">
                        <b>Required Supplies: </b>{" "}
                        {num.requiredInstruments.map((inst, indexInstru) => (
                          <div key={indexInstru}>{inst}</div>
                        ))}
                      </div>
                    )}
                    {num.week && (
                      <div className="ingredients cssCloseFriends">
                        <b>Week:</b> {num.week}
                      </div>
                    )}
                    {num.calories && (
                      <div className={`instructions cssCloseFriends`}>
                        <div>
                          <b>Calories: </b>
                          {num.calories}
                        </div>
                      </div>
                    )}
                    {num.protein && (
                      <div className={`instructions cssCloseFriends`}>
                        <div>
                          <b>Protein: </b>
                          {num.protein}
                        </div>
                      </div>
                    )}
                    {num.goToLink && (
                      <div className={`instructions cssCloseFriends`}>
                        <div onClick={() => setSearchTerm(`${num.goToLink}`)}>
                          <b>Second Recipe Link: </b>
                          {num.goToLink}
                        </div>
                      </div>
                    )}
                    {num.otherRecipeLink && (
                      <div
                        onClick={() => setSearchTerm(`${num.otherRecipeLink}`)}
                      >
                        <b>Third Recipe Link: </b>
                        {num.otherRecipeLink}
                      </div>
                    )}
                  </>
                )}
                {num.resource && (
                  <div>
                    <b>Resource: </b>
                    {num.resourceLink ? (
                      <a
                        href={num.resourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {num.resource}
                      </a>
                    ) : (
                      <span>{num.resource}</span>
                    )}
                  </div>
                )}
                {num.groceryList ? (
                  <div onClick={() => updateGrocery(index)}>
                    <img src={basket} alt="Added" />
                  </div>
                ) : (
                  <div onClick={() => updateGrocery(index)}>
                    <img src={cartImage} alt="Add Grocery List" />
                  </div>
                )}
                {num.active && (
                  <div
                    className="closeButton"
                    onClick={() => updateState(num.recipeTitle, !num.active)}
                  >
                    &#8682;
                  </div>
                )}
              </div>
            ))}
      </div>
      <Groceries />
    </>
  );
};

export default RecipeSection;

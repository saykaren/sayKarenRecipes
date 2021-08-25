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
  const [filteredWeek, setFilteredWeek] = useState(0);
  const [activeAllStatus, setActiveAllStatus] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(false);
  });

  const updateState = (selectedRecipeName: string, setValue: boolean) => {
    const newData = [...data];
    newData.map((recipe) => {
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
    setLoading(true);
    setFilteredWeek(0);
    setSearchTerm("");
  };

  const updateActive = (change: boolean) => {
    setLoading(true);
    const newData = RecipeData;
    newData.map((data) => (data.active = change));
    setActiveAllStatus(change);
  };

  const filterBoolean = (weekNumber: number) => {
    if (weekNumber > 0) {
      const newFiltered = RecipeData.filter(
        (sectionName) => sectionName.week === weekNumber
      );
      setFilteredWeek(weekNumber);
    }
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
            onChange={(e) => filterBoolean(parseInt(e.currentTarget.value, 10))}
            placeholder="Search for Recipe"
            className="filterBuddydetail"
          >
            <option value={0}>Select One</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
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
            .sort((a, b) => a.recipeTitle.localeCompare(b.recipeTitle))
            .map((num, index) => (
              <div className="recipeCard cssFriends" key={`recipeCard${index}`}>
                <div className="cssCloseFriends">
                <img
                  className="cssBestFriends"
                  src={num.active ? toggleOn : toggleOff}
                  onClick={() => updateState(num.recipeTitle, !num.active)}
                />
                {num && <h2 key={`recipeTitle${index}`} className="cssBestFriends">{num.recipeTitle}</h2>}
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
                      <h3 className="cssBestFriends"
                      >Instructions</h3>
                      {num.instructions.map((instr, indexInstru) => (
                        <div className="cssBestFriends">
                          <b>{indexInstru + 1}.</b> {instr}
                        </div>
                      ))}
                    </div>
                    <div className="ingredients cssCloseFriends" >
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
                  </>
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

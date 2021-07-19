import React, { useState, useEffect } from "react";
import RecipeData from "../data/data";
// import RecipeDataInterface from '../Interface/RecipeDataInterface';
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
  // data: Array<RecipeDataInterface>;
  ratingShow: boolean;
  setRatingShow: (arg1: boolean) => void;
  // setData: (arg1:  Array<RecipeDataInterface>) => void;
}

const RecipeSection = ({ ratingShow, setRatingShow }: RecipeSectionProps) => {
  const [data, setData] = useState(RecipeData);
  const [loading, setLoading] = useState(false);
  const [filteredWeek, setFilteredWeek] = useState(0);
  const [activeAllStatus, setActiveAllStatus] = useState(false);

  const [filterView, setFilterView] = useState(RecipeData);
  const [searchTerm, setSearchTerm] = useState("");

  console.log({ searchTerm });

  const editSearch = (e: string) => {
    setSearchTerm(e);
    setFilterView(
      RecipeData.filter((name) =>
        name.recipeTitle
          .toLocaleLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      )
    );
  };

  console.log(filteredWeek);

  useEffect(() => {
    setLoading(false);
  });

  const updateState = (indexNumber: number) => {
    toggle(indexNumber);
  };
  const toggle = (indexNumber: number) => {
    setLoading(true);
    const activity = filterView[indexNumber].active;
    const newData = filterView;
    newData[indexNumber].active = !activity;
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
    setFilterView(RecipeData);
    setFilteredWeek(0);
    setSearchTerm("");
  };

  const updateActive = (change: boolean) => {
    setLoading(true);
    const newData = RecipeData;
    newData.map((data) => (data.active = change));
    setFilterView(newData);
    setActiveAllStatus(change);
  };

  const filterBoolean = (weekNumber: number) => {
    if (weekNumber > 0) {
      const newFiltered = RecipeData.filter(
        (sectionName) => sectionName.week === weekNumber
      );
      setFilteredWeek(weekNumber);
      setFilterView(newFiltered);
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
            onChange={(e) => editSearch(e.currentTarget.value)}
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
        {filterView &&
          filterView
            .sort((a, b) => a.recipeTitle.localeCompare(b.recipeTitle))
            .map((num, index) => (
              <div className="recipeCard" key={`recipeCard${index}`}>
                {num.active ? (
                  <img src={toggleOn} onClick={() => updateState(index)} />
                ) : (
                  <img src={toggleOff} onClick={() => updateState(index)} />
                )}
                {num && <h2 key={`recipeTitle${index}`}> {num.recipeTitle}</h2>}

                {num.active && (
                  <>
                    <div className={`ingredients ${index}`}>
                      {ratingShow && num.lillyRating && (
                        <img
                          className="LillyRating"
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

                      <h3>Ingredients</h3>
                      {num.ingredients
                        .sort((a, b) => a.type.localeCompare(b.type))
                        .map((ingred, indexIngred) => (
                          <div key={indexIngred}>
                            &#9832;{ingred.type} <b>:</b> {ingred.amount}
                          </div>
                        ))}
                    </div>
                    <div className={`instructions ${index}`}>
                      <h3>Instructions</h3>
                      {num.instructions.map((instr, indexInstru) => (
                        <div>
                          <b>{indexInstru + 1}.</b> {instr}
                          <br />
                          <br />
                        </div>
                      ))}
                    </div>
                    <div className="ingredients">
                      <b>Time:</b> {num.preparationTime}{" "}
                      {num.preparationMeasurement}
                    </div>
                    {num.requiredInstruments.length > 0 && (
                      <div className="ingredients">
                        <b>Required Supplies: </b>{" "}
                        {num.requiredInstruments.map((inst, indexInstru) => (
                          <div key={indexInstru}>{inst}</div>
                        ))}
                      </div>
                    )}
                    {num.week && (
                      <div className="ingredients">
                        <b>Week:</b> {num.week}
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
                    onClick={() => updateState(index)}
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

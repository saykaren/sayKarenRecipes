import React, { useState, useEffect } from "react";
import RecipeData from "../data/data";
// import RecipeDataInterface from '../Interface/RecipeDataInterface';
import Lilly_Good from "../assests/Lilly_Good.jpg";
import Lilly_Bad from "../assests/Lilly_Bad.jpg";
import Lilly_Okay from "../assests/Lilly_Okay.jpg";
import Navigation from "./Navigation";
import Groceries from './Groceries';
import FilterBuddy from './FilterBuddy';

interface RecipeSectionProps {
  // data: Array<RecipeDataInterface>;
  ratingShow: boolean;
  setRatingShow: (arg1: boolean) => void;
  // setData: (arg1:  Array<RecipeDataInterface>) => void;
}

const RecipeSection = ({ ratingShow, setRatingShow }: RecipeSectionProps) => {
  const [data, setData] = useState(RecipeData);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState("");
  const [activeAllStatus, setActiveAllStatus] = useState(false);

  const [filterView, setFilterView] = useState(RecipeData);
  const [serachTerm, setSearchTerm] = useState('');
  // const [activeIngredients, setActiveIngredients] = useState([]);
  // const [grocery, setGrocery] = useState(false);

  const editSearch = (e:string)=>{
    setSearchTerm(e)
}

const dynamicSearch = ()=>{
  return filterView.filter((name)=> name.recipeTitle.toLocaleLowerCase().includes(serachTerm.toLocaleLowerCase()))
}
  useEffect(() => {
    setLoading(false);
  },);

  const updateState = (indexNumber: number) => {
    toggle(indexNumber);
  };
  const toggle = (indexNumber: number) => {
    setLoading(true);
    const activity = data[indexNumber].active;
    const newData = data;
    newData[indexNumber].active = !activity;
    setData(newData);
  };

  const updateGrocery = (indexNumber: number) => {
    setLoading(true);
    const activity = data[indexNumber].groceryList;
    const newData = data;
    newData[indexNumber].groceryList = !activity;  
    setData(newData);
  }

  const clearFilter = () => {
    setLoading(true);
    setData(RecipeData);
  };

  const updateActive = (change: boolean) => {
    setLoading(true);
    const newData = RecipeData;
    newData.map((data) => (data.active = change));
    setData(newData);
    setActiveAllStatus(change);
  };

  const filterData = (title: string) => {
    const newFiltered = RecipeData.filter(
      (titleName) => titleName.recipeTitle === title
    );
    newFiltered[0].active = true;
    setData(newFiltered);
  };

  const filterBoolean = (weekNumber: number) => {
    if (weekNumber > 0) {
      const newFiltered = RecipeData.filter(
        (sectionName) => sectionName.week === weekNumber
      );
      setData(newFiltered);
    }
  };

  return (
    <>
      <header className="App-header">
       
        <Navigation
          ratingShow={ratingShow}
          setRatingShow={setRatingShow}
          data={dynamicSearch()}
          filtered={filtered}
          setFiltered={setFiltered}
          filterData={filterData}
          clearFilter={clearFilter}
          filterBoolean={filterBoolean}
          updateActive={updateActive}
          activeAllStatus={activeAllStatus}
        />
      </header>
      {loading && <h2>LOADING</h2>}
      <div className="FilterBuddy">
        <h4>Search Receipe Titles</h4>
        <input type="text" value={serachTerm} onChange={(e)=>editSearch(e.currentTarget.value)} placeholder="Search for Recipe" className="filterBuddydetail"/>
       
        </div>  
      <div className="RecipeSection">
      {/* <FilterBuddy/> */}
  
        {dynamicSearch() &&
          dynamicSearch()
            .sort((a, b) => a.recipeTitle.localeCompare(b.recipeTitle))
            .map((num, index) => (
              <div className="recipeCard" key={`recipeCard${index}`}>
                
                {num && <h2 key={`recipeTitle${index}`}> {num.recipeTitle}</h2>}
                <button onClick={() => updateState(index)}>Toggle</button>
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
                      {num.ingredients.map((ingred, indexIngred) => (
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
                {num.groceryList ? <div
                onClick={()=>updateGrocery(index)} >Added</div> : <div onClick={()=>updateGrocery(index)}>ADD: Grocery List</div>}
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

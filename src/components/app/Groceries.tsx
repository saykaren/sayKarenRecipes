import React, { useState, useEffect } from "react";
import RecipeData from "../data/data";
 import RecipeDataInterface from '../Interface/RecipeDataInterface';


interface GroceriesProp {
   //data: Array<RecipeDataInterface>;
  //   ratingShow: boolean;
  //   setRatingShow: (arg1: boolean) => void;
  // setData: (arg1:  Array<RecipeDataInterface>) => void;
}

const Groceries = ({}: GroceriesProp) => {
  const [data, setData] = useState(RecipeData);

  // const [groceryList, setGroceryList] = useState(RecipeData);

  // const setNew = data.map((x, index)=>{
  //   const newest = x.ingredients.sort((a,b)=> a.type.localeCompare(b.type));
  // });
  // data.map((x,index)=>{
  //   x.ingredients.sort((a,b)=> a.type.localeCompare(b.type));
  // });

  // console.log(groceryList);
  //   const [loading, setLoading] = useState(false);
  //   const [filtered, setFiltered] = useState("");
  //   const [activeAllStatus, setActiveAllStatus] = useState(false);
  //   const [grocery, setGrocery] = useState(false);

  //   useEffect(() => {
  //     setLoading(false);
  //   },);

  //   const updateState = (indexNumber: number) => {
  //     toggle(indexNumber);
  //   };
  //   const toggle = (indexNumber: number) => {
  //     setLoading(true);
  //     const activity = data[indexNumber].active;
  //     const newData = data;
  //     newData[indexNumber].active = !activity;
  //     setData(newData);
  //   };

  //   const updateGrocery = (indexNumber: number) => {
  //     setLoading(true);
  //     const activity = data[indexNumber].groceryList;
  //     const newData = data;
  //     newData[indexNumber].groceryList = !activity;
  //     setData(newData);
  //   }

  //   const clearFilter = () => {
  //     setLoading(true);
  //     setData(RecipeData);
  //   };

  //   const updateActive = (change: boolean) => {
  //     setLoading(true);
  //     const newData = RecipeData;
  //     newData.map((data) => (data.active = change));
  //     setData(newData);
  //     setActiveAllStatus(change);
  //   };

  //   const filterData = (title: string) => {
  //     const newFiltered = RecipeData.filter(
  //       (titleName) => titleName.recipeTitle === title
  //     );
  //     newFiltered[0].active = true;
  //     setData(newFiltered);
  //   };

  //   const filterBoolean = (weekNumber: number) => {
  //     if (weekNumber > 0) {
  //       const newFiltered = RecipeData.filter(
  //         (sectionName) => sectionName.week === weekNumber
  //       );
  //       setData(newFiltered);
  //     }
  //   };

  return (
    <div className="GroceriesSection">
      <h2>Groceries</h2>
      {data.map((dataItem, index) => (
        <div key={index}>
    
          {dataItem.groceryList && (
            <div className="groceryTableContainer">
              {dataItem.ingredients
                .sort((a, b) => a.type.localeCompare(b.type))
                .map((ingred, ingredIndex) => (
                  <span
                    key={ingredIndex}
                    className="rowGrocery grocery columnOne"
                  >
                    {ingred.type} {ingred.amount} 
                  </span>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Groceries;

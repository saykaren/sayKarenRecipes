import React, { useState, useEffect } from "react";
import RecipeData from "../data/data";
import RecipeDataInterface from "../Interface/RecipeDataInterface";

interface GroceriesProp {
  //data: Array<RecipeDataInterface>;
  //   ratingShow: boolean;
  //   setRatingShow: (arg1: boolean) => void;
  // setData: (arg1:  Array<RecipeDataInterface>) => void;
}

const Groceries = ({}: GroceriesProp) => {
  const [data, setData] = useState(RecipeData);


  return (
    <div className="GroceriesSection">
      <h2>Groceries</h2>
    <section className="ContainerGroceryTable">
      {data.map((dataItem, index) => (
        <div key={index}>
          {dataItem.groceryList && (
            <div >
              {dataItem.ingredients
                .sort((a, b) => a.type.localeCompare(b.type))
                .filter((item) => item.section === "Produce")
                .map((ingred, ingredIndex) => (
                  <span key={ingredIndex} className="rowGrocery grocery ">
                    {ingred.type} {ingred.amount}
                  </span>
                ))}
            </div>
          )}
        </div>
      ))}
    {data.map((dataItem, index) => (
        <div key={index}>
          {dataItem.groceryList && (
            <div >
              {dataItem.ingredients
                .sort((a, b) => a.type.localeCompare(b.type))
                .filter((item) => item.section === "Bread")
                .map((ingred, ingredIndex) => (
                  <span key={ingredIndex} className="rowGrocery grocery ">
                    {ingred.type} {ingred.amount}
                  </span>
                ))}
            </div>
          )}
        </div>
      ))}
      {data.map((dataItem, index) => (
        <div key={index}>
          {dataItem.groceryList && (
            <div >
              {dataItem.ingredients
                .sort((a, b) => a.type.localeCompare(b.type))
                .filter((item) => item.section === "NonPerishables")
                .map((ingred, ingredIndex) => (
                  <span key={ingredIndex} className="rowGrocery grocery ">
                    {ingred.type} {ingred.amount}
                  </span>
                ))}
            </div>
          )}
        </div>
      ))}

      {data.map((dataItem, index) => (
        <div key={index}>
          {dataItem.groceryList && (
            <div >
              {dataItem.ingredients
                .sort((a, b) => a.type.localeCompare(b.type))
                .filter((item) => item.section === "Meat")
                .map((ingred, ingredIndex) => (
                  <span key={ingredIndex} className="rowGrocery grocery ">
                    {ingred.type} {ingred.amount}
                  </span>
                ))}
            </div>
          )}
        </div>
      ))}

    {data.map((dataItem, index) => (
        <div key={index}>
          {dataItem.groceryList && (
            <div >
              {dataItem.ingredients
                .sort((a, b) => a.type.localeCompare(b.type))
                .filter((item) => item.section === "Personal Care")
                .map((ingred, ingredIndex) => (
                  <span key={ingredIndex} className="rowGrocery grocery ">
                    {ingred.type} {ingred.amount}
                  </span>
                ))}
            </div>
          )}
        </div>
      ))}
  {data.map((dataItem, index) => (
        <div key={index}>
          {dataItem.groceryList && (
            <div >
              {dataItem.ingredients
                .sort((a, b) => a.type.localeCompare(b.type))
                .filter((item) => item.section === "Dairy")
                .map((ingred, ingredIndex) => (
                  <span key={ingredIndex} className="rowGrocery grocery ">
                    {ingred.type} {ingred.amount}
                  </span>
                ))}
            </div>
          )}
        </div>
      ))}

{data.map((dataItem, index) => (
        <div key={index}>
          {dataItem.groceryList && (
            <div >
              {dataItem.ingredients
                .sort((a, b) => a.type.localeCompare(b.type))
                .filter((item) => item.section === "Frozen")
                .map((ingred, ingredIndex) => (
                  <span key={ingredIndex} className="rowGrocery grocery ">
                    {ingred.type} {ingred.amount}
                  </span>
                ))}
            </div>
          )}
        </div>
      ))}
</section>
    </div>
  );
};

export default Groceries;

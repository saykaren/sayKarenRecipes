import React, { useState } from 'react';
import RecipeData from '../data/data';
import RecipeDataInterface from '../Interface/RecipeDataInterface';

interface RecipeSectionProps {
  data: Array<RecipeDataInterface>;
}

const RecipeSection = () => {
  console.log(RecipeData);
  const [data, setData] = useState(RecipeData);
  const [active, setActive] = useState(true);

  const toggle = (indexNumber: number)=>{
    const activity = data[indexNumber].active
    console.log({activity});
    // Need to set data point here
  }

  return (
    <>
      {data &&
        data.map((num, index) => (
          <div className="recipeCard">
            {num.active && <h2 key={`recipeTitle${index}`}> {num.recipeTitle}</h2>}
            <button onClick={()=>toggle(index)}>Toggle</button>
          </div>
        ))}
    </>
  );
};

export default RecipeSection;

import React, { useState, useEffect } from 'react';
import RecipeData from '../data/data';
import RecipeDataInterface from '../Interface/RecipeDataInterface';

interface RecipeSectionProps {
  data: Array<RecipeDataInterface>;
}

const RecipeSection = () => {
  const [data, setData] = useState(RecipeData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  });

  const updateState = (indexNumber: number) => {
    toggle(indexNumber);
  };
  const toggle = (indexNumber: number) => {
    const activity = data[indexNumber].active;
    const newData = data;
    newData[indexNumber].active = !activity;
    setData(newData);
    setLoading(true);
  };

  return (
    <>
      {loading && <h2>LOADING</h2>}
      {data &&
        data.map((num, index) => (
          <div className="recipeCard">
            {num && <h2 key={`recipeTitle${index}`}> {num.recipeTitle}</h2>}
            {num.active && <p>{num.ingredients[0].type}</p>}
            <button onClick={() => updateState(index)}>Toggle</button>
          </div>
        ))}
    </>
  );
};

export default RecipeSection;

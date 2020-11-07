import React, { useState, useEffect } from 'react';
import RecipeData from '../data/data';
import RecipeDataInterface from '../Interface/RecipeDataInterface';
import Lilly_Good from '../assests/Lilly_Good.jpg';
import Lilly_Bad from '../assests/Lilly_Bad.jpg';

interface RecipeSectionProps {
  data?: Array<RecipeDataInterface>;
  ratingShow: boolean;
}

const RecipeSection = ({ ratingShow }: RecipeSectionProps) => {
  const [data, setData] = useState(RecipeData);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState('');

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

  const handleChange = (e: string)=>{
    setFiltered(e);
  }

  return (
    <>
      {loading && <h2>LOADING</h2>}

      <label >Filter by Recipe</label>
      {/*<select value={'false'} onChange={()=>console.log()} name='RecipeFilter'>*/}
      {/*  <option value='false' selected>SELECT One</option>*/}
      {/*  {data && data.map((recipe, index)=>(*/}
      {/*      <option value={recipe.recipeTitle}>{recipe.recipeTitle}</option>*/}
      {/*  )        )}*/}

      {/*</select>*/}
      <select id="RecipeFilter" value={filtered} onChange={(e)=>handleChange(e.currentTarget.value)} className="RecipeFilterClass">
        {data && data.map((recipe, indexRecipe)=>(
            <option value={recipe.recipeTitle}>{recipe.recipeTitle}</option>
        ))}
      </select>
      Filtered{filtered}
                 <div className="RecipeSection">
        {data &&
          data.map((num, index) => (
            <div className="recipeCard">
              {num && <h2 key={`recipeTitle${index}`}> {num.recipeTitle}</h2>}
              <button onClick={() => updateState(index)}>Toggle</button>
              {num.active && (
                <>
                  <div className={`ingredients ${index}`}>
                    {ratingShow && num.lillyRating && (
                      <img
                        className="LillyRating"
                        src={num.lillyRating == 1 ? Lilly_Bad : Lilly_Good}
                        alt="rating"
                      />
                    )}

                    <h3>Ingredients</h3>
                    {num.ingredients.map((ingred, indexIngred) => (
                      <div>
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
                </>
              )}

              {num.active && (
                <div className="closeButton" onClick={() => updateState(index)}>
                  &#8682;
                </div>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default RecipeSection;

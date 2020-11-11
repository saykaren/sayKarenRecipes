import React, { useState, useEffect } from 'react';
import RecipeData from '../data/data';
import RecipeDataInterface from '../Interface/RecipeDataInterface';
import Lilly_Good from '../assests/Lilly_Good.jpg';
import Lilly_Bad from '../assests/Lilly_Bad.jpg';
import Navigation from './Navigation';

interface RecipeSectionProps {
  // data: Array<RecipeDataInterface>;
  ratingShow: boolean;
  setRatingShow: (arg1: boolean) => void;
  // setData: (arg1:  Array<RecipeDataInterface>) => void;
}

const RecipeSection = ({ ratingShow, setRatingShow }: RecipeSectionProps) => {
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

  const clearFilter = () => {
    setData(RecipeData);
  };
  const filterData = (title: string) => {
    const newFiltered = RecipeData.filter(
      (titleName) => titleName.recipeTitle === title,
    );
    setData(newFiltered);
  };

  return (
    <>
      <header className="App-header">
        <Navigation
          ratingShow={ratingShow}
          setRatingShow={setRatingShow}
          data={data}
          filtered={filtered}
          setFiltered={setFiltered}
          filterData={filterData}
          clearFilter={clearFilter}
        />
      </header>
      {loading && <h2>LOADING</h2>}
      <div className="RecipeSection">
        {data &&
          data.sort((a,b)=> a.recipeTitle.localeCompare(b.recipeTitle)).map((num, index) => (
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

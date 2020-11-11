import sayKarenLogo from '../assests/sayKaren_logo-white_8.1.2019.png';
import React, { useState } from 'react';
import RecipeDataInterface from '../Interface/RecipeDataInterface';
import RecipeData from '../data/data';

interface NavigationProps {
  setRatingShow: (arg1: boolean) => void;
  ratingShow: boolean;
  filtered: string;
  setFiltered: (arg1: string) => void;
  data: Array<RecipeDataInterface>;
  filterData: (arg1: string) => void;
  clearFilter: () => void;
}

const Navigation = ({
  ratingShow,
  setRatingShow,
  filtered,
  setFiltered,
  data,
  filterData,
  clearFilter,
}: NavigationProps) => {
  const [nav, setNav] = useState(false);

  const handleChange = (e: string) => {
    setFiltered(e);
    filterData(e);
  };

  const toggle = () => {
    setNav(!nav);
  };

  return (
    <>
      <div id={nav ? 'navigationActive' : 'navigation'}>
        <div onClick={() => toggle()}>{nav ? <>&#10005;</> : <>&#9776;</>}</div>
        {nav && (
          <>
            <div onClick={() => setRatingShow(!ratingShow)}>
              Toggle Rating Image
            </div>
            <label>Filter by Recipe</label>
            <select
              id="RecipeFilter"
              value={filtered}
              onChange={(e) => handleChange(e.currentTarget.value)}
              className="RecipeFilterClass"
            >
              {RecipeData &&
                RecipeData.map((recipe, indexRecipe) => (
                  <option value={recipe.recipeTitle}>
                    {recipe.recipeTitle}
                  </option>
                ))}
            </select>
            <button onClick={() => clearFilter()}>Clear Filter</button>
          </>
        )}
      </div>
      <h2>
        {' '}
        <img src={sayKarenLogo} id="sayKaren" alt="sayKaren" />
        's Recipes Box
      </h2>
    </>
  );
};

export default Navigation;

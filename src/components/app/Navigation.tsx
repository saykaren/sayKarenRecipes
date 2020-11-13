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
  filterBoolean: (arg1: number) => void;
  updateActive: (arg1: boolean) => void;
  activeAllStatus: boolean;
}

const Navigation = ({
  ratingShow,
  setRatingShow,
  filtered,
  setFiltered,
  data,
  filterData,
  clearFilter,
  filterBoolean,
  updateActive,
  activeAllStatus,
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
            <div className="navItem">
              <label>Filter by Recipe</label>
              <select
                id="RecipeFilter"
                value={filtered}
                onChange={(e) => handleChange(e.currentTarget.value)}
                className="RecipeFilterClass"
              >
                {RecipeData &&
                  RecipeData.sort((a, b) =>
                    a.recipeTitle.localeCompare(b.recipeTitle),
                  ).map((recipe, indexRecipe) => (
                    <option value={recipe.recipeTitle}>
                      {recipe.recipeTitle}
                    </option>
                  ))}
              </select>
            </div>
            <div className="navItem">
              <label>Filter by Week </label>
              <select
                id="WeekFilter"
                value={filtered}
                onChange={(e) =>
                  filterBoolean(parseInt(e.currentTarget.value, 10))
                }
                className="RecipeFilterClass"
              >
                <option value={0}>Select One</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>

            <button onClick={() => clearFilter()}>Clear Filter</button>
            {activeAllStatus ? (
              <>
                <button onClick={() => updateActive(false)}>Close All</button>
                <button
                  onClick={() => setRatingShow(!ratingShow)}
                  className="navItem"
                >
                  {ratingShow ? 'Hide' : 'Show'} Lilly Rating
                </button>
              </>
            ) : (
              <button onClick={() => updateActive(true)}>Open All</button>
            )}
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

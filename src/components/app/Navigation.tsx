import sayKarenLogo from "../assests/sayKaren_logo-white_8.1.2019.png";
import React, { useState } from "react";
import RecipeDataInterface from "../Interface/RecipeDataInterface";
import RecipeData from "../data/data";

interface NavigationProps {
  setRatingShow: (arg1: boolean) => void;
  ratingShow: boolean;
  clearFilter: () => void;
  updateActive: (arg1: boolean) => void;
  activeAllStatus: boolean;
}

const Navigation = ({
  ratingShow,
  setRatingShow,
  clearFilter,
  updateActive,
  activeAllStatus,
}: NavigationProps) => {
  const [nav, setNav] = useState(false);
  const toggle = () => {
    setNav(!nav);
  };

  return (
    <>
      <div id={nav ? "navigationActive" : "navigation"}>
        <div onClick={() => toggle()}>
          {nav ? <span className="navX">&#10005;</span> : <span>&#9776;</span>}
        </div>
        {nav && (
          <>
            <button onClick={() => clearFilter()}>Clear Filter</button>
            {activeAllStatus ? (
              <>
                <button onClick={() => updateActive(false)}>Close All</button>
                <button
                  onClick={() => setRatingShow(!ratingShow)}
                  className="navItem"
                >
                  {ratingShow ? "Hide" : "Show"} Lilly Rating
                </button>
              </>
            ) : (
              <button onClick={() => updateActive(true)}>Open All</button>
            )}
          </>
        )}
      </div>
      <h2>
        <img src={sayKarenLogo} id="sayKaren" alt="sayKaren" />
        <span id="appTitle">'s Recipe Box</span>
      </h2>
    </>
  );
};

export default Navigation;

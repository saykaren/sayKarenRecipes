import React, { useState } from 'react';
import '../styling/App.scss';
import Footer from './Footer';
import sayKarenLogo from '../assests/sayKaren_logo-white_8.1.2019.png';
import RecipeSection from './RecipeSection';

const App = () => {
  const [nav, setNav] = useState(false);
  const [ratingShow, setRatingShow] = useState(true);

  const toggle = () => {
    setNav(!nav);
  };
  return (
    <>
      <header className="App-header">
        <div id={nav ? "navigationActive" : "navigation"}>
          <div onClick={() => toggle()}>
            {nav ? <>&#10005;</> : <>&#9776;</>}
          </div>
          {nav && (
            <div onClick={() => setRatingShow(!ratingShow)}>
              Toggle Rating Image
            </div>
          )}
        </div>
        <h2>
          {' '}
          <img src={sayKarenLogo} id="sayKaren" alt="sayKaren" />
          's Recipes Box
        </h2>
      </header>

      <RecipeSection ratingShow={ratingShow} />

      <Footer />
    </>
  );
};

export default App;

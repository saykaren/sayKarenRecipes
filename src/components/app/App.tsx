import React, { useState } from 'react';
import '../styling/App.scss';
import Footer from './Footer';
import sayKarenLogo from '../assests/sayKaren_logo-white_8.1.2019.png';
import RecipeSection from './RecipeSection';

const App = () => {
  const [nav, setNav] = useState(false);

  const toggle = () => {
    setNav(!nav);
  };
  return (
    <>
      <header className="App-header">

        <div id="navigation" onClick={() => toggle()}>
          {nav ? <>&#10005;</> : <>&#9776;</>}
        </div>
        <h2> <img src={sayKarenLogo} id="sayKaren" alt="sayKaren"/>'s Recipes Box</h2>
      </header>

      <RecipeSection />

      <Footer />
    </>
  );
};

export default App;

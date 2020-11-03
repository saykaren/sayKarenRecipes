import React, { useState } from 'react';
import '../styling/App.scss';
import Footer from './Footer';
import RecipeSection from './RecipeSection';

const App = () => {
  const [nav, setNav] = useState(false);

  const toggle = () => {
    setNav(!nav);
  };
  return (
    <>
      <header className="App-header">
        <div onClick={() => toggle()}>{nav ? <>&#9747;</> : <>&#9776;</>}</div>

        <h2>sayKaren's Recipes Box</h2>
      </header>

      <RecipeSection />

      <Footer />
    </>
  );
};

export default App;

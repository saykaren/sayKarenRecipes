import React from 'react';
import logo from '../assests/sayKaren_logo.png';
import '../styling/App.scss';
import Footer from './Footer';
import RecipeSection from './RecipeSection';

const App = () => {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        sayKaren's Recipes
      </header>

      <RecipeSection />

      <Footer />
    </>
  );
};

export default App;

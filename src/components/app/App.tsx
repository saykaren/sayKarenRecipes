import React from 'react';
import logo from '../assests/sayKaren_logo.png';
import '../styling/App.scss';
import Footer from './Footer';
import RecipeSection from './RecipeSection';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        sayKaren's Recipes
      </header>
      <RecipeSection />
      <Footer />
    </div>
  );
};

export default App;

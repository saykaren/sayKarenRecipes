import React, { useState } from 'react';
import '../styling/App.scss';
import Footer from './Footer';
import RecipeSection from './RecipeSection';
import Groceries from './Groceries';

const App = () => {
  const [ratingShow, setRatingShow] = useState(true);
  const [activeGroceries, setActiveGroceries] = useState(true);

  return (
    <>
      <RecipeSection ratingShow={ratingShow} setRatingShow={setRatingShow} />
      {/* <Groceries /> */}
      <Footer />
    </>
  );
};

export default App;

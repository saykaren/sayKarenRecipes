import React, { useState } from 'react';
import '../styling/App.scss';
import Footer from './Footer';
import RecipeSection from './RecipeSection';

const App = () => {
  const [ratingShow, setRatingShow] = useState(true);

  return (
    <>
      <RecipeSection ratingShow={ratingShow} setRatingShow={setRatingShow} />
      <Footer />
    </>
  );
};

export default App;

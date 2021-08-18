import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import '../styling/App.scss';
import Footer from './Footer';
import RecipeSection from './RecipeSection';
import MealFinder from './MealFinder';

const App = () => {
  const [ratingShow, setRatingShow] = useState(true);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
       <MealFinder/>
      <RecipeSection ratingShow={ratingShow} setRatingShow={setRatingShow} />
     
      <Footer />
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
  );
};

export default App;

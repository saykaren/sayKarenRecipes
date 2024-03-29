import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styling/App.css";
import Footer from "./Footer";
import RecipeSection from "./RecipeSection";
import MealFinder from "./MealFinder";
import Cocktails from "./Cocktails";

const App = () => {
  const [ratingShow, setRatingShow] = useState(true);
  const [activeModule, setActieModule] = useState("Recipe");

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <section className="appSwitch">
        <div
          className={
            activeModule === "Recipe" ? "appButton disable" : "appButton"
          }
          onClick={() => setActieModule("Recipe")}
        >
          Recipe Box
        </div>
        <div
          className={
            activeModule === "Meal" ? "appButton disable" : "appButton"
          }
          onClick={() => setActieModule("Meal")}
        >
          Meal Finder
        </div>
        <div
          className={
            activeModule === "Cocktails" ? "appButton disable" : "appButton"
          }
          onClick={() => setActieModule("Cocktails")}
        >
          Cocktails
        </div>
      </section>
      {activeModule === "Meal" && <MealFinder />}
      {activeModule === "Cocktails" && <Cocktails />}
      {activeModule === "Recipe" && (
        <RecipeSection ratingShow={ratingShow} setRatingShow={setRatingShow} />
      )}

      <Footer />
      <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"} />
    </QueryClientProvider>
  );
};

export default App;

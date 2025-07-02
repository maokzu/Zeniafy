import React from "react";
import { mockRecipes } from "../api/mockData";
import RecipeCard from "../components/RecipeCard";


const AllRecipes = () => {
  return (
    <div>
      <h1>Toutes les recettes</h1>
      <div className="recipes-grid">
        {mockRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;

import React, { useState } from "react";
import { mockRecipes } from "../api/mockData";
import { mockStock } from "../api/mockStock";
import RecipeCard from "../components/RecipeCard";
import RecipeFilters from "../components/RecipeFilters";
import SearchToolbar from "../components/SearchToolbar";


const AllRecipes = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState(""); // "chaud" ou "froid"
  const [categories, setCategories] = useState([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortAsc, setSortAsc] = useState(true); // Pour le tri

  const handleSortClick = () => {
    setSortAsc(!sortAsc);
  };



  const filteredRecipes = mockRecipes.filter((recipe) => {
    // 🔍 Filtrer par recherche (titre)
    if (!recipe.title.toLowerCase().includes(search.toLowerCase())) return false;

    // 🍽️ Filtrer par type de plat
    if (type && recipe.type !== type) return false;

    // 🥩 Filtrer par catégories
    if (categories.length > 0) {
      const ingCats = recipe.ingredients.map((i) => i.category);
      const hasOne = categories.some((cat) => ingCats.includes(cat));
      if (!hasOne) return false;
    }

    // ✅ Filtrer selon le stock
    if (inStockOnly) {
      const allInStock = recipe.ingredients.every((ing) =>
        mockStock.includes(ing.name.toLowerCase())
      );
      if (!allInStock) return false;
    }

    return true;
  });

  return (
    <div className="all-recipes-page">
      <h1>Toutes les recettes</h1>

      <RecipeFilters
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        categories={categories}
        setCategories={setCategories}
        inStockOnly={inStockOnly}
        setInStockOnly={setInStockOnly}
      />

      <SearchToolbar
        search={search}
        setSearch={setSearch}
        onSortClick={handleSortClick}
        onFilterClick={() => setFilterOpen(true)}
        sortAsc={sortAsc}
      />


      {filteredRecipes.length === 0 ? (
        <p className="no-result">Aucune recette ne correspond à vos filtres.</p>
      ) : (
        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
              calories={recipe.calories}
              time={recipe.time}
              author={recipe.chef || "Loïc"}
              ingredients={recipe.ingredients}
              mealTime={recipe.moment}
              stockOk={recipe.ingredients.every(ing =>
                mockStock.includes(ing.name.toLowerCase())
              )}
            />

          ))}
        </div>
      )}

    </div>
  );
};

export default AllRecipes;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { mockRecipes } from "../api/mockData";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = mockRecipes.find((r) => r.id === parseInt(id));

  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [isModified, setIsModified] = useState(false);
  const [servings, setServings] = useState(recipe.defaultServings || 2); // 👈 AJOUT

  // ⚠️ On recalcule les quantités de départ selon le nombre de personnes
  const getAdjustedQuantity = (qty) => {
    return Math.round((qty * servings) / recipe.defaultServings);
  };

  // ⚠️ Détecte si les ingrédients ont été modifiés
  useEffect(() => {
    setIsModified(JSON.stringify(ingredients) !== JSON.stringify(recipe.ingredients));
  }, [ingredients]);

  const handleQuantityChange = (index, newQty) => {
    const updated = [...ingredients];
    updated[index].quantity = parseFloat(newQty);
    setIngredients(updated);
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: 0, unit: "" }]);
  };

  const handleRemoveIngredient = (index) => {
    const updated = [...ingredients];
    updated.splice(index, 1);
    setIngredients(updated);
  };

  return (
    <div className="recipe-details all-recipes-page">
      <img src={recipe.image} alt={recipe.title} className="recipe-banner" />

      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div className="recipe-meta">
        <span>🕒 {recipe.time}</span> | <span>🔥 {recipe.calories} kcal</span> | <span>🍽 {recipe.moment}</span>
      </div>

      <h2>🧾 Ingrédients</h2>

      {/* 🔢 Choix du nombre de personnes */}
      <label>
        Nombre de personnes :{" "}
        <select value={servings} onChange={(e) => setServings(parseInt(e.target.value))}>
          {[1,2,3,4,5,6,7,8].map(n => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
      </label>

      <ul>
        {ingredients.map((ing, i) => (
          <li key={i}>
            <input
              type="text"
              value={getAdjustedQuantity(ing.quantity)}
              onChange={(e) => handleQuantityChange(i, e.target.value)}
              style={{ width: "80px", marginRight: "8px" }}
            />
            <input
              type="text"
              value={ing.name}
              onChange={(e) => {
                const updated = [...ingredients];
                updated[i].name = e.target.value;
                setIngredients(updated);
              }}
              placeholder="Nom ingrédient"
              style={{ marginRight: "8px" }}
            />
            <span>{ing.unit}</span>
            <button onClick={() => handleRemoveIngredient(i)}>❌</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddIngredient}>➕ Ajouter un ingrédient</button>

      <h2>📋 Étapes de la recette</h2>
      <ol>
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

      <h2>📘 Conseil nutritionnel</h2>
      <p>{recipe.tip}</p>

      <button style={{ marginTop: "1rem" }}>✅ J’ai réalisé cette recette</button>

      {isModified && (
        <div className="floating-save">
          <label>💾 Enregistrer :</label>
          <select onChange={(e) => console.log(e.target.value)}>
            <option value="">Choisissez une action</option>
            <option value="new">Enregistrer comme nouvelle recette</option>
            <option value="overwrite">Remplacer la recette actuelle</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;

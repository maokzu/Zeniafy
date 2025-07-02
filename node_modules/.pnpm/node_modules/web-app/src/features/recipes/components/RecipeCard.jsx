import React from "react";
import { mockStock } from "../api/mockStock";

const RecipeCard = ({ title, image, calories, time, ingredients }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <div className="recipe-content">
        <h3>{title}</h3>
        <p>{calories} kcal – {time}</p>
        <ul>
          {ingredients.map((ing, i) => {
            const inStock = mockStock.includes(ing.name.toLowerCase());
            return (
              <li key={i} style={{ color: inStock ? "green" : "red" }}>
                {inStock ? "✔️" : "❌"} {ing.quantity} {ing.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;

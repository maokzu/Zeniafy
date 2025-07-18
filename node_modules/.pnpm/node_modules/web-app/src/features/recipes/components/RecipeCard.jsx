import React from "react";
import { useNavigate } from "react-router-dom";
import { mockStock } from "../api/mockStock";

const RecipeCard = ({ id, title, image, calories, time, ingredients, author = "Loïc", stockOk, mealTime }) => {
  const navigate = useNavigate();

  const allInStock = ingredients.every((ing) =>
    mockStock.includes(ing.name.toLowerCase())
  );

  return (
    <div className="glass-card" onClick={() => navigate(`/recettes/${id}`)}>
      <img src={image} alt={title} className="card-bg" />
      <div className="card-overlay">
        <div className="card-header">
          <div>
            <h2>{title}</h2>
            <p className="author">by {author}</p>
          </div>
          <button className="fav-btn">💖</button>
        </div>

        <div className="recipe-footer">
          <div className="info">
            <div>
              <span className="value">{calories} kcal</span>
              <span className="label">Calories</span>
            </div>
            <div>
              <span className="value">{time}</span>
              <span className="label">Temps</span>
            </div>
            <div>
              <div className={`badge-stock ${stockOk ? 'ok' : 'missing'}`}>
                {stockOk ? "En stock" : "Manque ingrédients"}
              </div>
            </div>

            <div>
              <span className="value">{mealTime}</span>
              <span className="label">Moment</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default RecipeCard;

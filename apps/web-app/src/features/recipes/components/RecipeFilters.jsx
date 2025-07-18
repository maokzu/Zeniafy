import React from "react";

const categoriesList = [
  "protéine_animale",
  "protéine_végétale",
  "légume",
  "fruit",
  "féculent"
];

const RecipeFilters = ({
  search,
  setSearch,
  type,
  setType,
  categories,
  setCategories,
  inStockOnly,
  setInStockOnly
}) => {
  const handleCategoryChange = (cat) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  return (
  <div className="recipe-filters">
    <input
      type="text"
      placeholder="🔍 Rechercher une recette"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <select value={type} onChange={(e) => setType(e.target.value)}>
      <option value="">Tous les types</option>
      <option value="froid">Froid</option>
      <option value="chaud">Chaud</option>
    </select>

    <fieldset className="filter-group">
      <legend>Catégories</legend>
      {[
        "protéine_animale",
        "protéine_végétale",
        "légume",
        "fruit",
        "féculent"
      ].map((cat) => (
        <label key={cat}>
          <input
            type="checkbox"
            checked={categories.includes(cat)}
            onChange={() => handleCategoryChange(cat)}
          />
          {cat}
        </label>
      ))}
    </fieldset>
    {categories.length > 0 && (
    <div className="active-tags">
        {categories.map((cat) => (
        <span className="tag" key={cat} onClick={() => handleCategoryChange(cat)}>
            {cat} ✕
        </span>
        ))}
    </div>
    )}


    <div className="toggle-stock">
      <input
        type="checkbox"
        checked={inStockOnly}
        onChange={() => setInStockOnly(!inStockOnly)}
        id="stock"
      />
      <label htmlFor="stock">✅ Recettes faisables avec mon stock</label>
    </div>
  </div>
);

};

export default RecipeFilters;

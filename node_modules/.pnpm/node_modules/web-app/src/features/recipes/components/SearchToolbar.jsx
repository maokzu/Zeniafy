import React from "react";

const SearchToolbar = ({
  search,
  setSearch,
  onSortClick,
  onFilterClick,
  sortAsc,
}) => {
  return (
    <div className="search-toolbar">
      <input
        type="text"
        placeholder="Rechercher une recette..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <button className="icon-btn" onClick={() => setSearch("")} title="Effacer">
          ❌
        </button>
      )}
      <button className="icon-btn" onClick={onSortClick} title="Trier">
        {sortAsc ? "⬆️" : "⬇️"}
      </button>
      <button className="icon-btn" onClick={onFilterClick} title="Filtres">
        ⚙️
      </button>
    </div>
  );
};

export default SearchToolbar;

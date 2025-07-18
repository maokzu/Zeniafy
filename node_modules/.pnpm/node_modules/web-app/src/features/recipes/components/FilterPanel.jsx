<div className="filters-toolbar">
  <button className="btn-icon">←</button>
  <input
    type="text"
    placeholder="Rechercher une recette..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  {search && <button onClick={() => setSearch("")}>✖</button>}
  <button className="btn-icon" onClick={handleSortClick}>⇅</button>
  <button className="btn-icon" onClick={() => setFilterOpen(true)}>⚙️</button>
</div>

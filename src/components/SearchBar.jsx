import React, { useState } from 'react';
import { fetchBooks } from '../bookApi';
import '../scss/SearchBar.scss';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const results = await fetchBooks(query);
    onSearch(results);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;

import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import BookCard from '../components/BookCard';
import '../scss/FavouritesPage.scss';

function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <div className="favorites-page">
      <h2>Your Favorites</h2>
      {favorites.length > 0 ? (
        <div className="favorites-list">
          {favorites.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p>You have no favorite books yet.</p>
      )}
    </div>
  );
}

export default FavoritesPage;

import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../context/FavoritesContext';
import '../scss/BookCard.scss';

function BookCard({ book }) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some(favBook => favBook.id === book.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(book.id);
    } else {
      addFavorite(book);
    }
  };

  return (
    <div className="book-card">
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
      <Link to={`/book/${book.id}`}>View Details</Link>
      <button onClick={handleFavoriteClick}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
}

export default BookCard;

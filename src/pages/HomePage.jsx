import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../bookApi';
import BookCard from '../components/BookCard';
import SearchBar from '../components/SearchBar';
import '../scss/HomePage.scss';

function HomePage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks('Harry Potter').then(data => setBooks(data));
  }, []);

  return (
    <div className="home-page">
      <SearchBar onSearch={setBooks} />
      <div className="book-list">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

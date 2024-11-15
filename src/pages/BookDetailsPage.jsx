import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBookDetails } from '../bookApi';
import '../scss/BookDetailsPage.scss';

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetchBookDetails(id).then(data => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-details">
      <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.description}</p>
    </div>
  );
}

export default BookDetailsPage;

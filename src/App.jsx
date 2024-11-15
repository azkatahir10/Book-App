import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import FavoritesPage from './pages/FavouritesPage';
import './App.scss';

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Navbar />
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<BookDetailsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </div>
      </Router>
    </FavoritesProvider>
  );
}

export default App;

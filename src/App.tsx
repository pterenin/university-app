import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import FavouritesPage from './pages/FavouritesPage';
import NavigationBar from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;

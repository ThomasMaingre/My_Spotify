import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/GenreList.css';

function GenreList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/genres';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setGenres(data));
  }, []);

  return (
    <div className="genre-list-container">
        <Link to="/" className="home-link">Accueil</Link>
      <h1 className="genre-title">Liste des genres</h1>
      <div className="genre-list">
        {genres.map((genre) => (
          <div key={genre.id} className="genre">
              <Link key={genre.id} to={`/genres/${genre.id}`} className="genre"></Link>
              <h3>{genre.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GenreList;

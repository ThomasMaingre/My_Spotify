import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Home.css';

function Home() {
  const [albums, setAlbums] = useState([]);
  const maxDisplayedAlbums = 8;

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/albums';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setAlbums(shuffle(data).slice(0, maxDisplayedAlbums)));
  }, []);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="home">
      <h1>Bienvenue sur notre plateforme musicale</h1>
      <div className="home-links">
        <Link to="/albums" className="home-link">Liste des albums</Link>
        <Link to="/genres" className="home-link">Liste des genres</Link>
        <Link to="/artists" className="home-link">Liste des artistes</Link>
        <Link to="/search" className="home-link">Recherche</Link>
      </div>
      <div className="random-albums">
        {albums.map((album) => (
          <Link key={album.id} to={`/albums/${album.id}`} className="random-album">
            <img src={album.cover} alt={album.name} />
            <h3>{album.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;


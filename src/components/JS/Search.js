import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CSS/AlbumList.css';

function Search() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState({ artists: [], albums: [], genres: [] });
  const [searchType, setSearchType] = useState('artist');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(`http://localhost:8000/search?query=${encodeURIComponent(query)}&type=${searchType}&like=${encodeURIComponent(query)}%25&orderBy=name`);

    if (searchType === 'artist') {
      setSearchResults({ artists: response.data.artists, albums: [], genres: [] });
    } else if (searchType === 'album') {
      setSearchResults({ artists: [], albums: response.data.albums, genres: [] });
    } else if (searchType === 'genre') {
      setSearchResults({ artists: [], albums: [], genres: response.data.genres });
    }

    navigate(`/search?q=${encodeURIComponent(query)}&type=${searchType}`);
  };

  return (
    <div className="search album-list-container">
      <Link to="/" className="home-link">Accueil</Link>
      <h1 className="album-title">Recherche</h1>
      <form className="album-title" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un artiste, un album ou un titre"
        />
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
          <option value="artist">Artiste</option>
          <option value="album">Album</option>
          <option value="genre">Genre</option>
        </select>
        <button type="submit">Rechercher</button>
      </form>
      {searchResults.albums.length > 0 && searchType === 'album' && (
        <div className="album-list-container">
          <h2>Albums</h2>
          {searchResults.albums.map((album) => (
              <div className="album-list-container">
              <div className="album-list">
              <Link key={album.id} to={`/albums/${album.id}`} className="album">
                <img src={album.cover} alt={album.name} />
                <h3>{album.name}</h3>
              </Link>
              </div>
              </div>
          ))}
        </div>
      )}
      {searchResults.genres.length > 0 && searchType === 'genre' && (
        <div>
          <h2>Genres</h2>
          {searchResults.genres.map((genre) => (
            // <div key={genre.id}>
            //   <h3>{genre.name}</h3>
            // </div>
              <div key={genre.id} className="genre">
                <Link key={genre.id} to={`/genres/${genre.id}`} className="genre"></Link>
                <h3>{genre.name}</h3>
              </div>
          ))}
        </div>
      )}
      {searchResults.artists.length > 0 && searchType === 'artist' && (
        <div>
          <h2>Artistes</h2>
          {searchResults.artists.map((artist) => (
            <div className="artist-list-container">
            <div className="artist-list">
            <Link key={artist.id} to={`/artists/${artist.id}`} className="artist">
            <img src={artist.photo} alt={artist.name} />
            <h3>{artist.name}</h3>
            </Link>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;

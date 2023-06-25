import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../CSS/ArtistDetail.css';

function ArtistDetail() {
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const artistApiUrl = `http://localhost:8000/artists/${id}`;
    const albumsApiUrl = `http://localhost:8000/albums/artist/${id}`;

    fetch(artistApiUrl)
      .then((response) => response.json())
      .then((data) => setArtist(data));

    fetch(albumsApiUrl)
      .then((response) => response.json())
      .then((data) => setAlbums(data));
  }, [id]);

  if (!artist) return <div>Loading...</div>;

  return (
    <div className="artist-detail">
        <Link to="/" className="home-link">Accueil</Link>
        <Link to="/artists" className="home-link">Liste des artistes</Link>
      <h1>{artist.name}</h1>
      <img src={artist.photo} alt={artist.name} />
      <div className="artist-description">
        <h2>Description</h2>
        <p>{artist.description}</p>
      </div>
      <div className="artist-bio">
        <h2>Biographie</h2>
        <p>{artist.bio}</p>
      </div>

      <h2>Albums</h2>
      <div className="artist-albums">
        {albums.map((album) => (
          <Link key={album.id} to={`/albums/${album.id}`} className="album">
            <img src={album.cover} alt={album.title} />
            <h3>{album.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArtistDetail;


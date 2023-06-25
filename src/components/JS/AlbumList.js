import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/AlbumList.css';

function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const apiUrl = 'http://localhost:8000/albums';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setAlbums(data);
        const artistIds = data.map((album) => album.artist_id);
        const uniqueArtistIds = [...new Set(artistIds)];
        return Promise.all(
          uniqueArtistIds.map((artistId) => fetch(`http://localhost:8000/artists/${artistId}`).then((res) => res.json())),
        );
      })
      .then((data) => {
        setArtists(data);
      });
  }, []);

  const paginatedAlbums = albums.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="album-list-container">
        <Link to="/" className="home-link">Accueil</Link>

        <h1 className='album-title'>Liste des albums</h1>
      <div className="album-list">
        {paginatedAlbums.map((album) => {
          const artist = artists.find((artist) => artist.id === album.artist_id);
          return (
            <Link key={album.id} to={`/albums/${album.id}`} className="album">
              <img src={album.cover} alt={album.name} />
              <h3>{album.name}</h3>
              {artist && <p>{artist.name}</p>}
              <p>Date de sortie : {new Date(album.release_date * 1000).toLocaleDateString()}</p>
            </Link>
          );
        })}
      </div>
      <div className="pagination">
        <button onClick={() => setPage((prevPage) => prevPage - 1)} disabled={page === 1}>
          Précédent
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((prevPage) => prevPage + 1)} disabled={page * itemsPerPage >= albums.length}>
          Suivant
        </button>
      </div>
    </div>
  );
}

export default AlbumList;


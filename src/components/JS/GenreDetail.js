import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import '../CSS/GenreDetail.css';


function GenreDetail() {
  const [genreDetail, setGenreDetail] = useState({});
  const [albums, setAlbums] = useState([]);
  const [albumDetails, setAlbumDetails] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch(`http://localhost:8000/genres/${id}`)
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          setGenreDetail(json["genre"]);
          setAlbums(json["albums"]);
        }
      });
  }, [id]);

  useEffect(() => {
    async function fetchAlbumDetails() {
      setLoading(true);
      const albumDetailsPromises = albums.map(async (album) => {
        const res = await fetch(`http://localhost:8000/albums/${album}`);
        const json = await res.json();
        return json["album"];
      });
      const albumDetails = await Promise.all(albumDetailsPromises);
      setAlbumDetails(albumDetails);
      setLoading(false);
    }

    fetchAlbumDetails();
  }, [albums]);

  const paginatedAlbumDetails = albumDetails.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="genre-detail-container">
      <Link to="/" className="home-link">Accueil</Link>
      <Link to="/genres" className="home-link">Liste des genres</Link>
      <header className="App-header">
        <Genre name={genreDetail.name} />
        {loading ? (
          <Genre name={"Loading..."} />
        ) : (
          paginatedAlbumDetails.map((albumDetail) => (
            <Album
              id={albumDetail.id}
              key={albumDetail.id}
              cover={albumDetail.cover}
              name={albumDetail.name}
              popularity={albumDetail.popularity}
            />

          ))
        )}
        <div className="pagination">
          <button
            onClick={() => setPage((prevPage) => prevPage - 1)}
            disabled={page === 1}
          >
            Précédent
          </button>
          <span>Page {page}</span>
          <button
            onClick={() => setPage((prevPage) => prevPage + 1)}
            disabled={page * itemsPerPage >= albumDetails.length}
          >
            Suivant
          </button>
        </div>
      </header>
    </div>
  );
}

function Album({ id, cover, name, popularity }) {
  return (
    <div className="album">
      <Link to={`/albums/${id}`}>
        <img src={cover} alt={name} />
        <h3>{name}</h3>
        <p>Popularité : {popularity}</p>
      </Link>
    </div>
  );
}



function Genre({ name }) {
  return <h2>{name}</h2>;
}

export default GenreDetail;

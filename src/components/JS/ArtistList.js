import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/ArtistList.css';

function ArtistList() {
    const [artists, setArtists] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 16;

    useEffect(() => {
        const apiUrl = 'http://localhost:8000/artists';

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setArtists(data));
    }, []);

    const paginatedArtist = artists.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div className="artist-list-container">
            <Link to="/" className="home-link">Accueil</Link>
            <h1>Liste des artistes</h1>
            <div className="artist-list">
                {paginatedArtist.map((artist) => (
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
            <div className="pagination">
                <button onClick={() => setPage((prevPage) => prevPage - 1)} disabled={page === 1}>
                    Précédent
                </button>
                <span>Page {page}</span>
                <button onClick={() => setPage((prevPage) => prevPage + 1)} disabled={page * itemsPerPage >= artists.length}>
                    Suivant
                </button>
            </div>
        </div>
    );
}

export default ArtistList;


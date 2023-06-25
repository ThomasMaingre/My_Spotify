import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import {Link, useParams} from 'react-router-dom';
import '../CSS/AlbumDetail.css';

function AlbumDetail() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const audioRefs = useRef([]);

  useEffect(() => {
    fetch(`http://localhost:8000/albums/${id}`)
      .then((res) => res.json())
      .then((json) => {
        if (json) {
          setAlbum(json['album']);
          setTracks(json['tracks']);

          fetch(`http://localhost:8000/artists/${json['album'].artist_id}`)
            .then((response) => response.json())
            .then((artistData) => setArtist(artistData));
        }
      });
  }, [id]);

  function handlePlay(index) {
    audioRefs.current.forEach((audio, idx) => {
      if (idx !== index) {
        audio.pause();
      }
    });
  }

  return (
    <div className="album-detail">
      <Link to="/" className="home-link">Accueil</Link>
      <Link to="/albums" className="home-link">Liste des albums</Link>

      {album && artist ? (
        <>
          <div className="album-info">
            <img src={album.cover_small} alt={album.name} />
            <div>
              <h4>ALBUM</h4>
              <h1>{album.name}</h1>
              <p>Artiste : {artist.name}</p>
              <p>Date de sortie : {new Date(album.release_date * 1000).toLocaleDateString()}</p>
              <p>Popularité : {album.popularity}</p>
              <p className="album-description">{album.description}</p>
            </div>
          </div>
          <h2>Titres</h2>
          <ul>
            {tracks.map((track, index) => (
              <li key={track.id}>
                <p>{track.name}</p>
                <audio
                  ref={(el) => (audioRefs.current[index] = el)}
                  onPlay={() => handlePlay(index)}
                  controls
                  src={track.mp3}
                >
                  Votre navigateur ne supporte pas l'élément <code>audio</code>.
                </audio>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </div>
  );
}

export default AlbumDetail;

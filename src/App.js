import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/JS/Home';
import AlbumList from './components/JS/AlbumList';
import AlbumDetail from './components/JS/AlbumDetail';
import GenreList from './components/JS/GenreList';
import GenreDetail from './components/JS/GenreDetail';
import ArtistList from './components/JS/ArtistList';
import ArtistDetail from './components/JS/ArtistDetail';
import Search from './components/JS/Search';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/albums" element={<AlbumList />} />
          <Route path="/albums/:id" element={<AlbumDetail />} />
          <Route path="/genres" element={<GenreList />} />
          <Route path="/genres/:id" element={<GenreDetail />} />
          <Route path="/artists" element={<ArtistList />} />
          <Route path="/artists/:id" element={<ArtistDetail />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


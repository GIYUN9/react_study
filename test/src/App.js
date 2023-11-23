import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import CreateMovie from './pages/CreateMovie';

function App() {
  const [movies, setMovies] = useState([
    {id: 1, title: 'Movie 1', genre: "Drama", release_date: '2022-01-01'},
    {id: 2, title: 'Movie 2', genre: "Action", release_date: '2022-02-01'},
    {id: 3, title: 'Movie 3', genre: "Comedy", release_date: '2022-03-01'},
  ]);

  const [newMovie, setNewMovie] = useState({
    id: '',
    title: '',
    genre: '',
    release_date: '',
  });

  const handleInputChange = (ev) => {
      const { name, value } = ev.target;
      
      setNewMovie({
          ...newMovie,
          [name] : value,
      })
  }

  const handleDeleteMovie = (id) => {
    const updateMovies = movies.filter((m) => m.id !== id);
    setMovies(updateMovies);
  }

  const handleAddMovie = () => {
    
    if(!newMovie.id || !newMovie.title || !newMovie.genre || !newMovie.release_date){
      alert("모든 값을 입력해주세요.")
      return;
    }
    
    const isCheckId = movies.some((movie) => String(movie.id) === newMovie.id);
    if (isCheckId) {
      alert("이미 존재하는 ID입니다.")
      return;
    }

    setMovies([
      ...movies,
      newMovie,
    ]);

    setNewMovie({
      id: '',
      title: '',
      genre: '',
      release_date: '',
    })
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/create">Add New Movie</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home movies={movies} onDeleteMovie={handleDeleteMovie}/>}/>
          <Route path='/create' element={<CreateMovie newMovie={newMovie} onInputChange={handleInputChange} onAddMovie={handleAddMovie}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './ManageMovies.css';

function ManageMovies() {
  const [movies, setMovies] = useState([]);
  const [editedMovie, setEditedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/movies/View');
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        } else {
          console.error('Failed to fetch movies');
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleEdit = (movie) => {
    setEditedMovie({ ...movie });
  };

  const handleChange = (e) => {
    setEditedMovie({
      ...editedMovie,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/movies/Update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedMovie),
      });

      if (response.ok) {
        alert('Movie updated successfully');
        setMovies(movies.map(movie => movie.movieID === editedMovie.movieID ? editedMovie : movie));
        setEditedMovie(null);
      } else {
        alert('Failed to update movie');
      }
    } catch (error) {
      alert('Error updating movie');
    }
  };

  const handleDelete = async (movieID) => {
    try {
      const response = await fetch(`http://localhost:8080/api/movies/Delete?id=${movieID}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Movie deleted successfully');
        setMovies(movies.filter(movie => movie.movieID !== movieID));
      } else {
        alert('Failed to delete movie');
      }
    } catch (error) {
      alert('Error deleting movie');
    }
  };

  return (
    <div className="manage-movies">
      <h3>Manage Movies</h3>
      <table className="manage-movies-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Director</th>
            <th>Release Date</th>
            <th>URL</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.movieID}>
              <td>{movie.movieID}</td>
              <td>
                {editedMovie && editedMovie.movieID === movie.movieID ? (
                  <input
                    type="text"
                    name="movieName"
                    value={editedMovie.movieName}
                    onChange={handleChange}
                  />
                ) : (
                  movie.movieName
                )}
              </td>
              <td>
                {editedMovie && editedMovie.movieID === movie.movieID ? (
                  <input
                    type="text"
                    name="movieType"
                    value={editedMovie.movieType}
                    onChange={handleChange}
                  />
                ) : (
                  movie.movieType
                )}
              </td>
              <td>
                {editedMovie && editedMovie.movieID === movie.movieID ? (
                  <input
                    type="text"
                    name="movieDirector"
                    value={editedMovie.movieDirector}
                    onChange={handleChange}
                  />
                ) : (
                  movie.movieDirector
                )}
              </td>
              <td>
                {editedMovie && editedMovie.movieID === movie.movieID ? (
                  <input
                    type="date"
                    name="movieReleaseDate"
                    value={editedMovie.movieReleaseDate}
                    onChange={handleChange}
                  />
                ) : (
                  new Date(movie.movieReleaseDate).toLocaleDateString()
                )}
              </td>
              <td className="movie-url" data-url={movie.movieUrl}>
                {editedMovie && editedMovie.movieID === movie.movieID ? (
                  <input
                    type="text"
                    name="movieUrl"
                    value={editedMovie.movieUrl}
                    onChange={handleChange}
                  />
                ) : (
                  movie.movieUrl
                )}
              </td>
              <td>
                {editedMovie && editedMovie.movieID === movie.movieID ? (
                  <button className="save-btn" onClick={handleSave}>Save</button>
                ) : (
                  <>
                    <button className="edit-btn" onClick={() => handleEdit(movie)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(movie.movieID)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageMovies;

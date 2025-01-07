import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoviesPage.css'; 

const apiURL = 'http://localhost:8080/api/movies/View';
const comingSoonMovies = [
  {
    movieID: 1,
    movieName: "A Minecraft Movie",
    movieReleaseDate: "2025",
    movieType: "Adventure/Action",
    movieUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/A_Minecraft_Movie_poster.jpg/220px-A_Minecraft_Movie_poster.jpg"
  },
  {
    movieID: 2,
    movieName: "Moana 2",
    movieReleaseDate: "2024",
    movieType: "Adventure/Family",
    movieUrl: "https://lumiere-a.akamaihd.net/v1/images/p_moana2_d23_eb995f91.jpeg"
  },
  {
    movieID: 3,
    movieName: "Captain America 4",
    movieReleaseDate: "2025",
    movieType: "Action/Sci-fi",
    movieUrl: "https://m.media-amazon.com/images/M/MV5BZTk2NTUxZDItN2Y1Ni00MDFjLTg4OWItMWY3M2Q2OGNiODUwXkEyXkFqcGc@._V1_.jpg"
  },
  {
    movieID: 4,
    movieName: "Pathaan 2",
    movieReleaseDate: "2025",
    movieType: "Action",
    movieUrl: "https://cdn.siasat.com/wp-content/uploads/2024/02/Snapinsta.app_429173158_1435251557081048_5381113590930485882_n_1080-819x1024.jpg"
  }
];

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, []);

  const handleBuyTickets = () => {
    navigate('/buy-tickets'); 
  };

  return (
    <div className='movies-page'>
      <div className='movies-container'>
        <h2>Now Showing</h2>
        <div className='movie-grid'>
          {movies.map((movie) => (
            <div key={movie.movieID} className='movie-item'>
              <img src={movie.movieUrl} alt={movie.movieName} />
              <div className='movie-details'>
                <h3>{movie.movieName}</h3>
                <p>{movie.movieReleaseDate}</p>
                <p>{movie.movieType}</p>
              </div>
              <div className="buy-button-container">
                <button className='buy-button' onClick={handleBuyTickets}>Buy Tickets</button>
              </div>
            </div>
          ))}
        </div>

        <h2 className='coming-soon-header'>Coming Soon</h2>
        <div className='coming-soon-grid'>
          {comingSoonMovies.map((movie) => (
            <div key={movie.movieID} className='movie-item'>
              <img src={movie.movieUrl} alt={movie.movieName} />
              <div className='movie-details'>
                <h3>{movie.movieName}</h3>
                <p>{movie.movieReleaseDate}</p>
                <p>{movie.movieType}</p>
              </div>
              <div className="buy-button-container">
                <button className='buy-button'>Coming Soon</button>
              </div>
            </div>
          ))}
        </div>
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-about">
              <h3>About Us</h3>
              <p>We are Milano Cineplex providing an extraordinary movie-going experience.</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-social">
              <h3>Follow Us</h3>
              <ul className="social-icons">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Milano Cineplex. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MoviesPage;

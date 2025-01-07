import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Body.css';
import Deadpool from './../../../Images/Deadpool.jpg';
import CinemaImage1 from './../../../Images/cinema1.jpg';
import CinemaImage2 from './../../../Images/cinema2.jpg';

const apiURL = 'http://localhost:8080/api/movies/View';

function Body() {
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
    <div className='Body'>
      <div className='BodyContainer'>
        <div className='image'>
          <img src={Deadpool} alt="Deadpool" />
        </div>
        <h2>Now Showing</h2>
        <div className='movieGrid'>
          {movies.map((movie) => (
            <div key={movie.movieID} className='movieItem'>
              <img src={movie.movieUrl} alt={movie.movieName} />
              <div className='movieDetails'>
                <h3>{movie.movieName}</h3>
                <p>{movie.movieReleaseDate}</p>
                <p>{movie.movieType}</p>
              </div>
              <div className="buyButtonContainer">
                <button className='buyButton' onClick={handleBuyTickets}>Buy Tickets</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cinemaDetailsSection">
          <div className="cinemaRow">
            <div className="cinemaDescriptionLeft">
              <h3>Experience Luxury at Our Cinema</h3>
              <p>
                Our cinema hall is a state-of-the-art venue designed for ultimate comfort and entertainment. 
                Featuring the latest projection technology and Dolby Atmos sound, you’ll feel like you're part of the action. 
                Enjoy reclining seats, a private lounge, and gourmet snacks, all designed to enhance your movie-going experience.
              </p>
              <p>
                Our staff is always on hand to ensure that every visit is special, whether it's a blockbuster premiere or 
                a cozy weekend showing. We invite you to immerse yourself in an experience beyond just watching movies.
              </p>
            </div>
            <div className="cinemaImageRight">
              <img src={CinemaImage1} alt="Cinema Hall" />
            </div>
          </div>

          <div className="cinemaRow">
            <div className="cinemaImageLeft">
              <img src={CinemaImage2} alt="Cinema Experience" />
            </div>
            <div className="cinemaDescriptionRight">
              <h3>A Unique Movie Experience</h3>
              <p>
                From the moment you step into our theatre, you'll notice the attention to detail, from the stunning architecture to the plush seating. 
                We aim to provide an atmosphere that elevates your movie experience beyond the ordinary.
              </p>
              <p>
                Whether you're here for the latest blockbuster or a classic film, we offer an array of features including 3D screenings, 
                luxury seating, and even private event hosting. Your perfect movie night starts here!
              </p>
            </div>
          </div>
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

export default Body;

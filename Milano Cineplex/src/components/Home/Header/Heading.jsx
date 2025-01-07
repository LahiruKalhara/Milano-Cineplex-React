import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from './../../../Images/Logo.png';

function Heading() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken'); 
    setIsLoggedIn(false); 

    window.location.href = '/'; 
  };

  return (
    <div className='Header'>
      <div className={`HeaderContainer ${isScrolled ? 'scrolled' : ''}`}>
        <img src={Logo} alt="Logo" />
        <ul>
          <li><a href="/">HOME</a></li>
          <li><a href="/movies">MOVIES</a></li>
          <li><a href="/contact">CONTACT US</a></li>
        </ul>
        {isLoggedIn ? (
          <a className='LoginSignup' href="/" onClick={handleLogout}>LOGOUT</a>
        ) : (
          <a className='LoginSignup' href="/login">LOGIN / SIGNUP</a>
        )}
      </div>
    </div>
  );
}

export default Heading;

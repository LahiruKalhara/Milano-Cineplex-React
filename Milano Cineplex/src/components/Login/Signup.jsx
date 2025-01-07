import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    telephone: '',
    address: '',
    password: '',
    confirmPassword: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/users/Add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: formData.name,
          userTelephone: formData.telephone,
          userAddress: formData.address,
          userPassword: formData.password,
          userConfirmPassword: formData.confirmPassword
        })
      });

      if (response.ok) {
        setErrorMessage('');
        navigate('/login'); 
      } else {
        setErrorMessage('Signup failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('An error occurred during signup. Please try again later.');
    }
  };

  return (
    <div className='SignupPage'>
      <div className='SignupContainer'>
        <h2>Sign Up</h2>

        {errorMessage && <p className="errorMessage">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <div className='formGroup'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className='formGroup'>
            <label htmlFor="telephone">Telephone</label>
            <input type="text" id="telephone" value={formData.telephone} onChange={handleInputChange} required />
          </div>
          <div className='formGroup'>
            <label htmlFor="address">Address</label>
            <input type="text" id="address" value={formData.address} onChange={handleInputChange} required />
          </div>
          <div className='formGroup'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={handleInputChange} required />
          </div>
          <div className='formGroup'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

import React, { useState } from 'react';
import './ContactUsPage.css'; 

function ContactUsPage() {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const reviewData = {
      reviewUsername: name,
      reviewDescription: review,
    };

 
    fetch('http://localhost:8080/api/reviews/Add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    })
      .then((response) => {
        if (response.ok) {
          setMessage('Thank you for your feedback!');
          setName('');
          setReview('');
        } else {
          setMessage('There was an error submitting your review. Please try again.');
        }
      })
      .catch((error) => {
        console.error('Error submitting review:', error);
        setMessage('There was an error submitting your review. Please try again.');
      });
  };

  return (
    <div className='contact-us-page'>
      <div className='contact-container'>
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! If you have any questions, feedback, or just want to get in touch, please use the form below or reach out to us through our social media channels.</p>
        <div className='social-media'>
          <a href='https://www.facebook.com/yourpage' target='_blank' rel='noopener noreferrer'>Facebook</a>
          <a href='https://www.instagram.com/yourprofile' target='_blank' rel='noopener noreferrer'>Instagram</a>
          <a href='https://twitter.com/yourprofile' target='_blank' rel='noopener noreferrer'>Twitter</a>
          <a href='https://www.linkedin.com/in/yourprofile' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        </div>
        <div className='feedback-section'>
          <h3>Feedback</h3>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <textarea
              placeholder='Write a review'
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
            ></textarea>
            <button type='submit'>Submit</button>
          </form>
          {message && <p>{message}</p>} 
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;

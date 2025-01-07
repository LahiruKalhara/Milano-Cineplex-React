import React, { useEffect, useState } from 'react';
import './ManageReviewsPage.css'; 

const apiURL = 'http://localhost:8080/api/reviews/View';

function ManageReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleDelete = (reviewID) => {
    fetch(`http://localhost:8080/api/reviews/Delete?id=${reviewID}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        setReviews(reviews.filter(review => review.reviewID !== reviewID));
      })
      .catch(error => console.error('Error deleting review:', error));
  };
  
  

  return (
    <div className="manage-reviews">
      <h2>Manage Reviews</h2>
      <table className="manage-reviews-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Review</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.reviewID}>
              <td>{review.reviewUsername}</td>
              <td>{review.reviewDescription}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(review.reviewID)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageReviewsPage;

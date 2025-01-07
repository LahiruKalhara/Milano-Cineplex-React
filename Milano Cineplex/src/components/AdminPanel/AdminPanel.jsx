import React, { useState } from 'react';
import './AdminPanel.css';
import ManageUsers from './ManageUsers'; 
import ManageTickets from './ManageTickets'; 
import ManageMovies from './ManageMovies';
import ManageReviewsPage from './ManageReviewsPage';

function AdminPanel() {
  const [activeSection, setActiveSection] = useState('ManageUsers');

  const renderContent = () => {
    switch (activeSection) {
      case 'ManageUsers':
        return <ManageUsers />;
      case 'ManageTickets':
        return <ManageTickets />;
      case 'ManageMovies':
        return <ManageMovies />;
      case 'ManageReviews':
        return <ManageReviewsPage />;
      default:
        return <div><h3>Welcome to the Admin Panel</h3></div>;
    }
  };

  return (
    <div className="admin-panel">
      <div className="side-menu">
        <ul>
          <li
            className={activeSection === 'ManageUsers' ? 'active' : ''}
            onClick={() => setActiveSection('ManageUsers')}
          >
            Manage Users
          </li>
          <li
            className={activeSection === 'ManageTickets' ? 'active' : ''}
            onClick={() => setActiveSection('ManageTickets')}
          >
            Manage Tickets
          </li>
          <li
            className={activeSection === 'ManageMovies' ? 'active' : ''}
            onClick={() => setActiveSection('ManageMovies')}
          >
            Manage Movies
          </li>
          <li
            className={activeSection === 'ManageReviews' ? 'active' : ''}
            onClick={() => setActiveSection('ManageReviews')}
          >
            Manage Reviews
          </li>
          
        </ul>
      </div>
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default AdminPanel;

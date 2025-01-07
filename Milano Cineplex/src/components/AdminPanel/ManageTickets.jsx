import React, { useEffect, useState } from 'react';
import './ManageTickets.css';

function ManageTickets() {
  const [tickets, setTickets] = useState([]);
  const [editedTicket, setEditedTicket] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/tickets/View');
        if (response.ok) {
          const data = await response.json();
          setTickets(data);
        } else {
          console.error('Failed to fetch tickets');
        }
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const handleEdit = (ticket) => {
    setEditedTicket({ ...ticket });
  };

  const handleChange = (e) => {
    setEditedTicket({
      ...editedTicket,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/tickets/Update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedTicket),
      });

      if (response.ok) {
        alert('Ticket updated successfully');
        setTickets(tickets.map(ticket => ticket.ticketID === editedTicket.ticketID ? editedTicket : ticket));
        setEditedTicket(null);
      } else {
        alert('Failed to update ticket');
      }
    } catch (error) {
      alert('Error updating ticket');
      console.error('Error updating ticket:', error);
    }
  };

  const handleDelete = async (ticketID) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this ticket?');
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:8080/api/tickets/Delete?id=${ticketID}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Ticket deleted successfully');
        setTickets(tickets.filter(ticket => ticket.ticketID !== ticketID));
      } else {
        alert('Failed to delete ticket');
      }
    } catch (error) {
      alert('Error deleting ticket');
      console.error('Error deleting ticket:', error);
    }
  };

  return (
    <div className="manage-tickets">
      <h3>Manage Tickets</h3>
      <table className="manage-tickets-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Movie</th>
            <th>Time</th>
            <th>Type</th>
            <th>Count</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.ticketID}>
              <td>{ticket.ticketID}</td>
              <td>
                {editedTicket && editedTicket.ticketID === ticket.ticketID ? (
                  <input
                    type="text"
                    name="ticketName"
                    value={editedTicket.ticketName}
                    onChange={handleChange}
                  />
                ) : (
                  ticket.ticketName
                )}
              </td>
              <td>
                {editedTicket && editedTicket.ticketID === ticket.ticketID ? (
                  <input
                    type="text"
                    name="ticketEmail"
                    value={editedTicket.ticketEmail}
                    onChange={handleChange}
                  />
                ) : (
                  ticket.ticketEmail
                )}
              </td>
              <td>
                {editedTicket && editedTicket.ticketID === ticket.ticketID ? (
                  <input
                    type="text"
                    name="ticketMovie"
                    value={editedTicket.ticketMovie}
                    onChange={handleChange}
                  />
                ) : (
                  ticket.ticketMovie
                )}
              </td>
              <td>
                {editedTicket && editedTicket.ticketID === ticket.ticketID ? (
                  <input
                    type="text"
                    name="ticketTime"
                    value={editedTicket.ticketTime}
                    onChange={handleChange}
                  />
                ) : (
                  ticket.ticketTime
                )}
              </td>
              <td>
                {editedTicket && editedTicket.ticketID === ticket.ticketID ? (
                  <input
                    type="text"
                    name="ticketType"
                    value={editedTicket.ticketType}
                    onChange={handleChange}
                  />
                ) : (
                  ticket.ticketType
                )}
              </td>
              <td>
                {editedTicket && editedTicket.ticketID === ticket.ticketID ? (
                  <input
                    type="number"
                    name="ticketCount"
                    value={editedTicket.ticketCount}
                    onChange={handleChange}
                  />
                ) : (
                  ticket.ticketCount
                )}
              </td>
              <td>
                {editedTicket && editedTicket.ticketID === ticket.ticketID ? (
                  <input
                    type="number"
                    name="ticketPrice"
                    value={editedTicket.ticketPrice}
                    onChange={handleChange}
                  />
                ) : (
                  ticket.ticketPrice
                )}
              </td>
              <td>
                {editedTicket && editedTicket.ticketID === ticket.ticketID ? (
                  <button onClick={handleSave}>Save</button>
                ) : (
                  <button onClick={() => handleEdit(ticket)}>Edit</button>
                )}
                <button
                  className="delete-button"
                  onClick={() => handleDelete(ticket.ticketID)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageTickets;

import React, { useState, useEffect } from 'react';
import './TicketPage.css';

function TicketPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [movie, setMovie] = useState('');
    const [time, setTime] = useState('');
    const [seatType, setSeatType] = useState('');
    const [ticketCount, setTicketCount] = useState(1);
    const [price, setPrice] = useState(0);

    const movieOptions = [
        'Deadpool & Wolverine',
        'A Quiet Place : Day One',
        'The Garfield Movie',
        'SpaceMan',
        'One More Shot',
        'Madame Web',
        'It Ends With Us',
        'Upgraded'
    ];

    const timeOptions = ['9.30 A.M', '12.30 P.M', '4.30 P.M', '7.30 P.M'];
    const seatOptions = ['ODC', 'FirstClass', 'Box'];
    const ticketOptions = Array.from({ length: 10 }, (_, i) => i + 1);

    const calculatePrice = () => {
        let rate = 0;
        switch (seatType) {
            case 'ODC':
                rate = 1000;
                break;
            case 'FirstClass':
                rate = 1500;
                break;
            case 'Box':
                rate = 3000;
                break;
            default:
                rate = 0;
        }
        setPrice(rate * ticketCount);
        console.log(`Seat Type: ${seatType}, Ticket Count: ${ticketCount}, Rate: ${rate}, Price: ${rate * ticketCount}`);
    };

    useEffect(() => {
        calculatePrice();
    }, [seatType, ticketCount]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const ticketData = {
            ticketName: name,
            ticketEmail: email,
            ticketMovie: movie,
            ticketTime: time,
            ticketType: seatType,
            ticketCount: ticketCount,
            ticketPrice: price
        };

        try {
            const response = await fetch('http://localhost:8080/api/tickets/Add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ticketData)
            });

            if (response.ok) {
                alert('Ticket booked successfully!');
            } else {
                alert('Failed to book ticket. Please try again.');
            }
        } catch (error) {
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="ticket-page">
            <div className="ticket-container">
                <h2>Buy Tickets</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="movie">Movie:</label>
                        <select
                            id="movie"
                            value={movie}
                            onChange={(e) => setMovie(e.target.value)}
                            required
                        >
                            <option value="">Select Movie</option>
                            {movieOptions.map((m, index) => (
                                <option key={index} value={m}>{m}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time:</label>
                        <select
                            id="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            required
                        >
                            <option value="">Select Time</option>
                            {timeOptions.map((t, index) => (
                                <option key={index} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="seatType">Seat Type:</label>
                        <select
                            id="seatType"
                            value={seatType}
                            onChange={(e) => setSeatType(e.target.value)}
                            required
                        >
                            <option value="">Select Seat Type</option>
                            {seatOptions.map((s, index) => (
                                <option key={index} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="ticketCount">Number of Tickets:</label>
                        <select
                            id="ticketCount"
                            value={ticketCount}
                            onChange={(e) => setTicketCount(Number(e.target.value))}
                            required
                        >
                            {ticketOptions.map((n, index) => (
                                <option key={index} value={n}>{n}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input
                            type="text"
                            id="price"
                            value={`Rs. ${price}`}
                            readOnly
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default TicketPage;

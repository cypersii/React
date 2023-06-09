import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ShowSummary.css';
import MovieTicketBooking from '../movieticketbooking/MovieTicketBooking';
const ShowSummary = () => {
  const { showId } = useParams();
  const [summary, setSummary] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((response) => response.json())
      .then((data) => {
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data.summary, 'text/html');
        const summaryText = htmlDoc.body.textContent;
        setSummary(summaryText);
        setImage(data.image.medium); 
      });
  }, [showId]);

  return (
    <div className="show-summary-popup">
      <div className="show-summary-content">
        <h1 className="heading">Details:</h1>
        {image && <img src={image} alt="Show Poster" />} 
        <p className="summary-text">{summary}</p>
        <button className="booking-button">
        <Link to="/movie-ticket-booking" >Book Ticket</Link>
        </button>
       
      </div>
    </div>
  );
};

export default ShowSummary;

import React from 'react'
import "../App.css";

function NotFound() {
  return (
    <div className="notfound-container">
        <div className="notfound-content">
            <h1 className="notfound-title">404</h1>
            <p className="notfound-message">Oops! The page you're looking for doesn't exist.</p>
            <a href="/" className="notfound-button">Go Back Home</a>
        </div>
    </div>
);
}

export default NotFound
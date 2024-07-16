
import React from 'react';
import './NavBar.css';

function NavBar({ onNewVideoClick }) {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Videos</h1>
      <div className="navbar-buttons">
        <button className="navbar-button">Home</button>
        <button className="navbar-button" onClick={onNewVideoClick}>Nuevo Video</button>
      </div>
    </nav>
  );
}

export default NavBar;

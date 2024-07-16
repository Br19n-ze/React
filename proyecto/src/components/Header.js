
import React from 'react';
import './Header.css';
import alura_latam_logo from '../img/alura_latam_logo.jpeg';

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="text-content">
          <h1>Front end</h1>
          <h2>challenge react</h2>
          <h3> creando el ultimo proyecto de react para finalizar</h3>
        </div>
        <div className="image-content">
          <img src={alura_latam_logo} alt="Neon Image" />
        </div>
      </div>
    </div>
  );
}

export default Header;

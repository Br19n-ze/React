import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Contenido del footer */}
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Primera vez en react. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;

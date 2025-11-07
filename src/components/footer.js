
import React from 'react';

const Footer = () => {

  const añoHoy = new Date().getFullYear(); 

  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>
          &copy; {añoHoy} Ferretería El Clavo de Oro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
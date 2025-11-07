
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <h2 className='titulo'>Ferretería El Clavo de Oro</h2>
        </NavLink>
      </div>
      <div className="nav-links">

        <NavLink to="/" 
          className={({ isActive }) => isActive ? 'link active' : 'link'}
        >
          Inicio
        </NavLink>
        <NavLink to="/contacto" 
          className={({ isActive }) => isActive ? 'link active' : 'link'}
        >
          Cotización
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
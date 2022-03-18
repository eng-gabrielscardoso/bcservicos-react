import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar () {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <nav className="navbar is-transparent p-4">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-size-4 has-text-light">
          BC Serviços
        </Link>
        <div className={`navbar-burger has-text-light ${isActive ? "is-active" : ""}`} data-target="toggler" onClick={() => setIsActive(!isActive)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="toggler" className={`navbar-menu my-auto ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          <Link to="/" className="navbar-item has-text-light">
            Home
          </Link>
          <Link to="/servicos" className="navbar-item has-text-light">
            Serviços
          </Link>
          <Link to="/sobre" className="navbar-item has-text-light">
            Sobre
          </Link>
          <Link to="/contato" className="navbar-item has-text-light">
            Contato
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

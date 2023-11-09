import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Logo" width="60" height="60" className="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-dark">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link text-dark">Menu</Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link text-dark">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-dark">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary p-4">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold">KaroAbhayas</Link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto"> 
            <li className="nav-item">
              <Link to="/" className="nav-link active ">JOIN US</Link> 
            </li>
            <li className="nav-item">
              <Link to="/classes" className="nav-link">Classes</Link> 
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Products</Link> 
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About Us</Link> 
            </li>
            <li className="nav-item">
              <Link to="/auth" className="nav-link">
                <FaUserCircle/>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link"> 
               <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

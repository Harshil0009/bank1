import React from 'react';
import Banklogo from './Banklogo.png';
import './Mix.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg cnavbar">
          <div className="container-fluid">
            <a className="navbar-brand cimg" href="/">
              <img src={Banklogo} alt="logo" />
              <big>YourBanK</big>
            </a>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto"> {/* Centering the links */}
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Careers
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/Contact">
                  Contact
                  </Link>
                </li>
              </ul>

              {/* Buttons aligned to the right */}
              <div className="d-flex">
                <button className="btns" type="submit">
                  Signup
                </button>
                <button className="btns" type="submit">
                  Login
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import globalStyles from "../App.css";
import "../App.css";
import O2 from '../images/logo.png';

const Navbar = () => {

  return (
    <>
      <nav>
        <ul>
          <div className="logo">
            <img src={O2} alt="O2 fest logo" srcset="" width={55} />
          </div>
          <div className="nav-links">
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Events</a>
            </li>
            <li>
              <a href='#'>Sponsors</a>
            </li>
          </div>

        </ul>
      </nav>
    </>
  )
}

export default Navbar

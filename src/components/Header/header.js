// == Import npm
import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1> Header </h1>
    <ul className="bloc-navbar">
      <span>
      <Link className="mainLogo" to="/home">
        <button className="navbar">Accueil</button>
        </Link>
      </span>

      <span>
      <Link className="mainLogo" to="/club">
        <button className="navbar">Notre Club</button>
        </Link>
      </span>

      <span>
      <Link className="mainLogo" to="/evt">
        <button className="navbar">Evènements</button>
        </Link>
      </span>

      <span>
      <Link className="mainLogo" to="/members">
        <button className="navbar">Membres</button>
        </Link>
      </span>

      <span>
      <Link className="mainLogo" to="/photo">
        <button className="navbar">Photos</button>
        </Link>
      </span>

      <span>
      <Link className="mainLogo" to="/contact">
        <button className="navbar">Contact</button>
        </Link>
      </span>
    </ul>
  </div>
);
export default Header;

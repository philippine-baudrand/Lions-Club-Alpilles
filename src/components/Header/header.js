// == Import npm
import React from 'react';
import './header.scss';
// import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <h1> Header </h1>
    <ul className="bloc-navbar">
      <span>
        <button className="navbar">Accueil</button>
      </span>

      <span>
        <button className="navbar">Notre Club</button>
      </span>

      <span>
        <button className="navbar">Evènements</button>
      </span>

      <span>
        <button className="navbar">Membres</button>
      </span>

      <span>
        <button className="navbar">Photos</button>
      </span>

      <span>
        <button className="navbar">Contact</button>
      </span>
    </ul>
  </div>
);
export default Header;

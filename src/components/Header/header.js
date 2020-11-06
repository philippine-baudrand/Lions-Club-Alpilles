// == Import npm
import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header-lions">

    <ul className="bloc-navbar-lions">
      <span>
      <Link className="mainLogo" to="/home">
        <button className="navbar-lions">Accueil</button>
        </Link>
      </span>

      <span>
      <Link className="mainLogo" to="/club">
        <button className="navbar-lions">Notre Club</button>
        </Link>
      </span>

      <span>
      <Link className="mainLogo" to="/evt">
        <button className="navbar-lions">évènements</button>
        </Link>
      </span>

      <span>
      <Link className="mainLogo" to="/members">
        <button className="navbar-lions">Membres</button>
        </Link>
      </span>

      <span>
      <Link className="mainLogo" to="/photo">
        <button className="navbar-lions">Photos</button>
        </Link>
      </span>

      <span>
      <Link className="mainLogo" to="/contact">
        <button className="navbar-lions">Contact</button>
        </Link>
      </span>
    </ul>
  </div>
);
export default Header;

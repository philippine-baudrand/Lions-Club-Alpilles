// == Import npm
import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header-lions">

    <div className="bloc-navbar-lions">
      <span className="span-nav">
      <Link className="navigation" to="/home">
        <button className="navbar-lions">Accueil</button>
        </Link>
      </span>

      <span className="span-nav">
      <Link className="navigation" to="/club">
        <button className="navbar-lions">Notre Club</button>
        </Link>
      </span>

      <span className="span-nav">
      <Link className="navigation" to="/evt">
        <button className="navbar-lions">évènements</button>
        </Link>
      </span>

      <span className="span-nav">
      <Link className="navigation" to="/members">
        <button className="navbar-lions">Membres</button>
        </Link>
      </span>

      <span className="span-nav">
      <Link className="navigation" to="/photo">
        <button className="navbar-lions">Photos</button>
        </Link>
      </span>

      <span className="span-nav">
      <Link className="navigation" to="/contact">
        <button className="navbar-lions">Contact</button>
        </Link>
      </span>
    </div>
  </div>
);
export default Header;

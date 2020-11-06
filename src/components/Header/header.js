// == Import npm
import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
    <div>
    <h1> Header </h1>
    <Link to="/home">
      <button >Home</button>
    </Link>
    </div>
);
export default Header;

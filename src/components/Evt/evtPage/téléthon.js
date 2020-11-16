import React from 'react';
import './evt.scss';
import Footer from '../../Footer/footer';
import Header from '../../Header/header';
import { Link } from 'react-router-dom';


const Telethon = () => (

  <div>
    <Header />
    <h1>Téléthon</h1>
    <Link className="navigation" to="/evt">
        <button className="go-back">Retour</button>
    </Link>
    <Footer />
  </div>
);
export default Telethon;
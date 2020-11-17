// == Import npm
import React from 'react';
import './evt.scss';
import Footer from '../Footer/footer';
import Header from '../Header/header';

import { Link } from 'react-router-dom';

const Evt = () => (

  <div>
    <Header />
    <h1> Evt </h1>
      <h2>
        Nous sommes fiers de vous présenter ici nos évènements
      </h2>
      <p>
        <Link to="/foire-au-gras"><span>La foire gourmande au Gras</span></Link>
      </p>
      <p>
        <Link to="/vide-commode"><span>Le vide commode d'Arlesiennes</span></Link>
      </p>
      <p>
        <Link to="/salon-créateurs"><span>Le salon des créateurs</span></Link>     
      </p>
      <p>
        <Link to="/telethon"><span>Le Téléthon</span></Link>        
      </p> 
    <Footer />
  </div>
);
export default Evt;

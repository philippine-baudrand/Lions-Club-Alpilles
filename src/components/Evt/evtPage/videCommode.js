import React from 'react';
import './evt.scss';
import Footer from '../../Footer/footer';
import Header from '../../Header/header';
import { Link } from 'react-router-dom';

const VideCommode = () => (

  <div>
    <Header />
    <h1>Le vide commode d'Arlesiennes</h1>
    <span className="bandeau-vide-commode">
      <img className="bandeau-vide-commode" src="https://www.provence-camargue-tourisme.com/image/5246-normal.jpg" alt="foire-au-gras" />
    </span>

        <h1>Nos partenaires</h1>
    <div className="club">

      <div className="paragraph">

        <p>photo</p>
      </div>
      
        <Link className="navigation" to="/evt">
          <button className="go-back">Retour</button>
        </Link>

    </div>
  <Footer />
  </div>
);
export default VideCommode;
import React from 'react';
import './evt.scss';
import Footer from '../../Footer/footer';
import Header from '../../Header/header';
import { Link } from 'react-router-dom';

const FoireGras = () => (
  <div>
    <Header />
      <h1>La foire gourmande au Gras</h1>
      <span className="bandeau-foire-gras">
        <img className="bandeau-foire-gras" src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/121553927_1348896165311689_4260808936534934848_o.png?_nc_cat=101&ccb=2&_nc_sid=dd9801&_nc_ohc=tCaxnZouYS0AX8OOhuu&_nc_ht=scontent-cdt1-1.xx&oh=40d36efb54758ba6f4778ee41ba5d556&oe=5FD94BEA" alt="foire-au-gras" />
      </span>
      <div className="club">
        <div className="paragraph">
          <div className="bloc-foire-gras">
            <div className="txt-foire">
            <p className="foire-50"><img className="picture-foire" src="https://media.discordapp.net/attachments/739121254438666292/783689751675928616/IMG_3450.JPG" alt="lions-woman" /></p>
            <p className="foire-50">Cette année, en raison de la crise sanitaire, la Foire Gourmande au Gras de Fontvieille a été annulée dans son format habituel.</p>
            </div>             
            <div div className="txt-foire">
            <p className="foire-50">A défaut de pouvoir déambuler parmis les stands, un drive s'est organisé pour que vous puissiez récupérer tous vos produits préférés, pour vos fêtes de fin d'année!</p>
            <p className="foire-50"><img className="picture-foire" src="https://images.unsplash.com/photo-1577015467226-9c3974439d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="christmas diner" /></p>
            </div>
          </div>
        </div>
        <div className="paragraph">
          <h1>Nos partenaires</h1>
          <Link className="navigation" to="/evt">
            <button className="go-back">Retour</button>
          </Link>
        </div>
      </div>
    <Footer />
  </div>
);
export default FoireGras;
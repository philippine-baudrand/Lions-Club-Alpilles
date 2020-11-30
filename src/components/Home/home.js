// == Import npm
import React from 'react';
import './home.scss';
//import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer/footer';
import photo from './logolions.png';
//import photo2 from './foire-gras-20.jpg';
import Header from '../Header/header';
import { Link } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <div>
    <Header />
    <h1>Club féminin Paradou les Alpilles</h1>
    <div className="lions-presentation">
      <div className="picture-presentation">
        <div className="lions-paradou">
          <img className="picture" src={photo} alt="lions-woman" />
          <img className="picture" src="https://media.discordapp.net/attachments/739121254438666292/782973427295584256/logo_paradou.jpg" alt="lions-woman" />
        </div>
        <h2>Convivialité et humanisme, 29 femmes lionistes</h2>
      </div>
      <div className="cards-presentation">
        <div className="cards">
        <Link to="/foire-au-gras"><h3 className="cards-title">La foire gourmande au Gras</h3>
          <div className="cards-img">
            <img
              src="https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/121553927_1348896165311689_4260808936534934848_o.png?_nc_cat=101&ccb=2&_nc_sid=dd9801&_nc_ohc=tCaxnZouYS0AX8OOhuu&_nc_ht=scontent-cdt1-1.xx&oh=40d36efb54758ba6f4778ee41ba5d556&oe=5FD94BEA"
              alt="foire-au-gras"
              className="cards-img"
            />
            
          </div>

          <p className="cards-text">Cette année, en raison de la crise sanitaire, la Foire Gourmande au Gras de Fontvieille est annulée dans son format habituel.</p></Link>
        </div>
        <div className="cards">
        <Link to="/vide-commode"><h3 className="cards-title">Le vide commode d'Arlesiennes</h3>
          <div className="cards-img">
            <img
              src="https://www.provence-camargue-tourisme.com/image/5246-normal.jpg" alt="foire-au-gras"
              className="cards-img"
            />
          </div>
          <p className="cards-text">text Arlesiennes</p></Link>
        </div>
        <div className="cards">
        <Link to="/telethon"><h3 className="cards-title">Téléthon</h3>
          <div className="cards-img">
            <img
              src="https://cdn.discordapp.com/attachments/778173311783403560/781450894112980992/13864739.jpg"
              alt="Téléthon"
              className="cards-img"
            />
          </div>
          <p className="cards-text">Le Téléthon rassemble 5 millions de personnes. Depuis 1987, il donne à l'association l’AFM-Téléthon les moyens de poursuivre son combat contre la maladie.</p></Link>
        </div>
        <div className="cards">
        <Link to="/salon-créateurs"><h3 className="cards-title">Le salon des créateurs</h3>
          <div className="cards-img">
            <img></img>
          </div>
          <p className="cards-text">text Le salon des créateurs</p></Link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
export default Home;

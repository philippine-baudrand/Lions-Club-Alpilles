// == Import npm
import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import facebook from '../../assets/logos-rs/facebook.png';
import instagram from '../../assets/logos-rs/instagram.png';
import twitter from '../../assets/logos-rs/twitter.png';

const Footer = () => (
  <footer>
    <div className="footer_corp">
    <div className="logos-rs">
      <a href="https://fr-fr.facebook.com/pages/category/Local-Business/Lions-Club-Paradou-les-Alpilles-291496984384951/" className="youtube social">
        <img className="facebook" src={facebook} alt="facebook" />
      </a>
      <a href="http://twitter.com/home?lang=fr" className="youtube social">
        <img className="facebook" src={twitter} alt="twitter"/>
      </a>
      <a href="https://www.instagram.com/?hl=fr" className="youtube social">
        <img className="facebook" src={instagram} alt="instagram"/>
      </a>
    </div>
    <div className="copiright">
      <Link to="/contact"><span>Lions Club</span></Link>
      <Link to="/Legal"><span>Mentions légales</span></Link>
      </div>
    </div>
  </footer>
);
export default Footer;

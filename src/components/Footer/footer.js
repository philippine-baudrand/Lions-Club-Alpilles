// == Import npm
import React from 'react';
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer_corp">
      <a href="#" className="footer_mention"> Mentions légales </a>
      <div className="footer_link">
        <a href="#"><i className="fa fa-phone" /></a>
        <a href="#"><i className="fa fa-home" /></a>
        <a href="#"><i className="fa fa-facebook" /></a>
        <a href="#"><i className="fa fa-map" /></a>
      </div>
    </div>
  </div>
);
export default Footer;

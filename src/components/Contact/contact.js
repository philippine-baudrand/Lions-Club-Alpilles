// == Import npm
import React from 'react';
import './contact.scss';
import Footer from '../Footer/footer';
import Header from '../Header/header';

const Contact = () => (
  <div>
    <Header />
    <div className="contact">
      <h1 className="contact_title">Nous contactez : </h1>
        <address className="contact_main">
          <span>Vous pouvez contacter notre équipe au <a href="tel:+33610037884"> 06 10 03 78 84 </a></span>
          <span>Ou bien par email à l'adresse suivante <a className="emailLink" href="mailto:j.hibelot@laposte.net"> j.hibelot@laposte.net </a></span>
          <span>Notre présidente se fera un plaisir de vous répondre.</span>
        </address>
    </div>
    <Footer />
</div>
);

export default Contact;

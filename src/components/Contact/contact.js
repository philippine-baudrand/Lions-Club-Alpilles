// == Import npm
import React from 'react';
import './contact.scss';
import Footer from '../Footer/footer';
import Header from '../Header/header';

const Contact = () => (
  <div>

    <Header />
    <p>
      Vous pouvez contacter notre équipe au <a className="telLink" href="tel:+33610037884">06 10 03 78 84</a>
    </p>
    <p>
      Ou bien par email à l'adresse suivante <a className="emailLink" href="mailto:j.hibelot@laposte.net">j.hibelot@laposte.net</a>
    </p>
    <p>
      Notre présidente se fera un plaisir de vous répondre
    </p>
    <Footer />
</div>
);

export default Contact;

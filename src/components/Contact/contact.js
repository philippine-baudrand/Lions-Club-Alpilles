// == Import npm
import React, { useState } from "react";
import './contact.scss';
import Footer from '../Footer/footer';
import Header from '../Header/header';

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const templateId = 'template_phil';

    
    sendFeedback("template_phil", {
      name,
      phone,
      email,
      message,
    });
  };

  const sendFeedback = (templateId, variables) => {

    window.emailjs.send("service_0il7y5q", templateId, variables, "user_HQ3amBPUSryNqpUfrStDk" )
      .then((res) => {
        console.log('success !');
        setName("");
        setPhone("");
        setEmail("");
        setMessage("");
      })
      .catch(
        (err) =>
          document.querySelector('.form-message').innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
  };

  return (
    <div>
      <Header />
        <div className="contact">
          <h1 className="contact_title">Nous contacter : </h1>
            <address className="contact_main">
              <span>Vous pouvez contacter notre équipe au 
                <a href="tel:+33610037884"> 06 10 03 78 84</a>
              </span>
              <span>Ou bien par email à l'adresse suivante 
                <a className="emailLink" href="mailto:foireaugras.lcp11@gmail.com"> foireaugras.lcp11@gmail.com </a>
              </span>
              <span>Notre présidente se fera un plaisir de vous répondre.</span>
                <h2>Ou directement via ce formulaire :</h2>
                  <form className="contact-form">
                    <div className="form-content">
                      <div>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="nom *"
                        value={name}
                        autoComplete="off"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          id="phone"
                          name="phone"
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="téléphone"
                          value={phone}
                        />
                        </div>
                      <div className="email-content">
                        <label id="not-mail"></label>
                        <input
                          type="mail"
                          id="email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="email *"
                          value={email}
                          autoComplete="off"
                        />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="message *"
                        value={message}
                        rows="7" 
                        cols="50"
                      />
                    </div>
                    <div className="form-message"></div>
                  </form>
                  <input
                    className="send"
                    type="button"
                    value="Envoyer"
                    onClick={handleSubmit}
                  />
            </address>
     </div>
    <Footer />
</div>
  );
};

export default Contact;
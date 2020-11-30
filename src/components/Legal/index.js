import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import { Link } from 'react-router-dom';
import './style.scss';

const Legal = () => (
	<div>
		<Header />
		<div>
			<h1>Mentions légales :</h1>
			<p>Association à but non lucratif (loi 1901)</p>
			<div className="legal_contact">
				<a className="legal_mail" href="mailto: j.hibelot@laposte.net"><i className="fa fa-envelope-o" /> Email : j.hibelot@laposte.net </a>
				<a href="tel:+33610037884" > <i className="fa fa-phone" /> Tel : 06 10 03 78 84 </a>
			</div>
			<p className="legal_text">Ce site est une création intellectuelle originale qui, par conséquent entre dans le champ de protection du droit d’auteur. Son contenu est également protégé par des droits de propriété intellectuelle et/ou industrielle. Toute personne qui portera atteinte aux droits de propriété intellectuelle attachés aux différents objets de ce site internet se rend coupable du délit de contrefaçon et est passible des sanctions pénales prévues par la loi. </p>
			<h2>Conception et réalisation du site :</h2>
			<ul className="legal_ul">
				<li><a href="https://github.com/MorelRemi17"><i className="fa fa-github" /> Rémi Morel-Charpentier</a></li>
				<li><a href="https://github.com/philippine-baudrand"><i className="fa fa-github" /> Philippine Baudrand </a></li>
			</ul>
			<h2>Hébergement du site : </h2>
			<a href="https://www.planethoster.com">https://www.planethoster.com</a>
		</div>
		<Footer />
	</div>
);

export default Legal;
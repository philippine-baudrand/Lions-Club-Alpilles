import React from 'react';
import Footer from '../Footer/footer';
import Header from '../Header/header';
import './style.scss';

const NotFound = () => (
	<div>
		<Header />
		<div>
			<h1>OUPS... ERREUR 404</h1>
            <p>Nous sommes désolés, mais la page que vous recherchez n'existe pas.</p>
		</div>
		<Footer />
	</div>
);

export default NotFound;
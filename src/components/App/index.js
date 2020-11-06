// == Import npm
import React from 'react';

// == Import
import Header from '../Header/header';
// import Footer from '..Footer';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Header />

    <Club />
    <Evt />
    <Members />
    <Photos />
    <Contact />
    <Footer />
  </div>
);

// == Export
export default App;

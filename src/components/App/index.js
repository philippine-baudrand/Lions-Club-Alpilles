// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import
// import Header from '../Header/header';
// import Footer from '../Footer/footer';
import Home from '../Home/home';
// import Club from '../Club';
// import Contact from '../Contact';
// import Evt from '../Evt';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
    </Switch>

  </div>
);

// == Export
export default App;

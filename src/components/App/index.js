// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import

import Home from '../Home/home';
import Club from '../Club/club';
import Contact from '../Contact/contact';
import Evt from '../Evt/evt';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/club">
        <Club />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/evt">
        <Evt />
      </Route>
    </Switch>

  </div>
);

// == Export
export default App;

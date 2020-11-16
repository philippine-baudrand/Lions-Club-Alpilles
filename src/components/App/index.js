// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
// == Import

import Home from '../Home/home';
import Club from '../Club/club';
import Contact from '../Contact/contact';
import Evt from '../Evt/evt';
import Members from '../Members/members';
import Photo from '../Photo/photo';
import data from '../../data/data';
import photoData from '../../data/photo-data';
import FoireGras from '../Evt/evtPage/foireAuGras';
import VideCommode from '../Evt/evtPage/videCommode';
import SalonCreateurs from '../Evt/evtPage/salonCréateurs';
import Telethon from '../Evt/evtPage/téléthon';

import './app.scss';


// == Composant
const App = () => (
  <div className="app">
    <Switch>
    <Route exact path="/">
        <Home />
      </Route>
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
      <Route exact path="/members">
        <Members list={data}/>
      </Route>
      <Route exact path="/photo">
        <Photo pictureList={photoData}/>
      </Route>
      <Route exact path="/foire-au-gras">
        <FoireGras />
      </Route>
      <Route exact path="/vide-commode">
        <VideCommode />
      </Route>
      <Route exact path="/salon-créateurs">
        <SalonCreateurs />
      </Route>
      <Route exact path="/telethon">
        <Telethon />
      </Route>
    </Switch>

  </div>
);

// == Export
export default App;

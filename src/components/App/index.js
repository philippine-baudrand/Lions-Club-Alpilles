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
import Legal from '../Legal';
import NotFound from '../NotFound';
import './app.scss';

// TODO EVT ARLESIENNES : problème de bouton.
// TODO CLUB : Revoir le css ( mise en page et ajout de photo ou logo ).
// TODO EVT : Faire la mise en page de événement avec lien ect .
// TODO PHOTO : changer le titre "photo".
// TODO CONTACT : Faire le css du formulaire et faire les vérifications nécéssaire.
// TODO faire une 404.
// TODO faire les mentions légales.
// TODO RESPONSIVE : a faire.

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
      <Route exact path="/legal">
        <Legal />
      </Route>
      <Route>
          <NotFound />
        </Route>
    </Switch>

  </div>
);

// == Export
export default App;

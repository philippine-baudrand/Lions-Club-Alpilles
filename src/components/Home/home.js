// == Import npm
import React from 'react';
import './home.scss';
//import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer/footer';
import photo from './logolions.png';
//import photo2 from './foire-gras-20.jpg';
import Header from '../Header/header';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <div>

    <Header />
    <div>

    </div>
    <div className="lions-presentation">
    <span className="text-presentation">
        <h1>Qu'est ce que le Lions Club International?</h1>
        Aujourd'hui, le Lions International est la plus grande association internationale de Clubs-Services du monde avec 1,35 million de membres dans 45 000 clubs répartis dans 206 pays, chaque pays disposant d'ailleurs d'une large autonomie qui lui permet de manifester son identité culturelle dans l'Association.
        Initiateur du statut d'ONG, il est présent à titre consultatif auprès le l'ONU, l'UNESCO, l'UNICEF, de l'OMS et du Conseil de l'Europe.
        660 millions de dollars, reversés chaque année dans le monde. 76 millions d'heures de bénévolat.
        En France, 30 000 membres dans 1 250 Clubs, 16 millions d'euros reversés, 1 million d'heures de don de soi.
        <h1>Qui sont les Lions?</h1>
        Les Lions sont des femmes et des hommes qui dans un esprit de solidarité, s'attellent à deux tâches essentielles: ouverture et rapprochement entre les hommes, actions humanitaires en venant en aide à ceux qui en ont besoin, localement et dans le monde.
      </span>
      <span className="picture-presentation">
        <img className="picture" src={photo} alt="lions-woman" />
      </span>
    </div>
    <Footer />
  </div>
);
export default Home;

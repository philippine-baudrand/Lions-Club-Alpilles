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
    <h1>Club féminin Paradou les Alpilles</h1>
    <div className="lions-presentation">
      <span className="picture-presentation">
        <img className="picture" src={photo} alt="lions-woman" />
      </span>
      <div className="text-presentation">
        <h2>Convivialité et humanisme, 29 femmes lionistes</h2>

      </div>
    </div>
    <Footer />
  </div>
);
export default Home;

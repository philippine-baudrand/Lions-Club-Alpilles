// == Import npm
import React from 'react';
import './home.scss';
import Carousel from 'react-bootstrap/Carousel';
import Footer from '../Footer/footer';
import photo from './lions-woman.jpg';
import photo2 from './foire-gras-20.jpg';
import Header from '../Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => (
  <div>

    <Header />
    <div>
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={photo2}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    <div className="lions-presentation">
      <span className="text-presentation">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget quam blandit, semper urna accumsan, scelerisque leo. Mauris a ex et eros gravida sodales ultricies sed nunc. Donec consequat in eros ac rhoncus. Phasellus tempus, ipsum id lobortis tempor, dolor tortor viverra erat, nec vehicula est odio sit amet mauris. Cras et faucibus metus, id fermentum sem. Donec varius congue nulla non pretium. Cras vitae ante pharetra, pellentesque est eu, porta neque. Curabitur ultrices odio volutpat, euismod urna sit amet, scelerisque purus.
      </span>
      <span className="picture-presentation">
        <img className="picture" src={photo} alt="lions-woman" />
      </span>
    </div>
    <Footer />
  </div>
);
export default Home;

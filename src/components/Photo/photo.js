// == Import npm
import React from 'react';
import './photo.scss';
import Footer from '../Footer/footer';
import Header from '../Header/header';

const Photo = ( props ) => {
  const { pictureList } = props;
    return (
  <div>
    <Header />
    <h1> Photo </h1>
      <div className="pictureList">
        {
          pictureList.map((pictureCard) =>
          <div className="card_unit">
            <h3 className="card_name">{pictureCard.name}</h3>
            <div>
              <img src={pictureCard.photo} className="card_img"></img>
            </div>
          </div>
          )
        }
      </div>
    <Footer />
  </div>
)};
export default Photo;

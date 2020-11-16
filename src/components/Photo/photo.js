// == Import npm
import React from 'react';
import './photo.scss';
import Footer from '../Footer/footer';
import Header from '../Header/header';

const Photo = ( props ) => {
  const { pictureList } = props;
    return (
  <div className="picture">
    <Header />
    <h1 className="picture_title"> Photo </h1>
      <div className="picture_list">
        {
          pictureList.map((pictureCard) =>
          <div className="card_picture_unit">
            <h3 className="card_picture_name">{pictureCard.name}</h3>
            <div>
              <img src={pictureCard.photo} className="card_picture_img"></img>
            </div>
          </div>
          )
        }
      </div>
    <Footer />
  </div>
)};
export default Photo;

// == Import npm
import React from 'react';
import './members.scss';
import Footer from '../Footer/footer';
import Header from '../Header/header';

const Members = ( props ) => {
  const { list } = props;
    return (
    <div className="member">
    <Header />  
    <h1 className="member_title"> Members </h1>
      <div className="card">
        {
          list.map((cardObject) =>
          <div className="card_unit">
            <h3 className="card_name">{cardObject.name}</h3>
            <div >
              <img  
              src={cardObject.photo}
              className="card_img"/>  
            </div>
            <p className="card_function"> {cardObject.fonction} </p>
          </div>
          )
        }
      </div>
    <Footer />
  </div>
  )};
export default Members;

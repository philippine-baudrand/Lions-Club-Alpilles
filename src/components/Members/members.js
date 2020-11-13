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
    <h1> Members </h1>
      <div className="card">
        {
          list.map((cardObject) =>
          <div className="card_unit">
            <h3 className="card_name">{cardObject.name}</h3>
            <div className="">
              <img  src={cardObject.photo}/>  
            </div>
            <p> {cardObject.fonction} </p>
          </div>
          )
        }
      </div>
    <Footer />
  </div>
  )};
export default Members;

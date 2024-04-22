import React from "react";
import CardItem from "./cardItem";
import "./card.css";
import dispensablesImg from "../images/dispensables.jpg";
import PreventerImg from "../images/change-preventers.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check The Dispensables Dan Change Preventer</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem 
            src={dispensablesImg}
            text="Belajar Tentang Dispensables Disini"
            label="Dispensables"
            path='/dispensables'
             />  

        <CardItem 
            src={PreventerImg}
            text="Belajar Tentang Change Preventer Disini"
            label="Change Preventer"
            path='/change-preventer'
             />  
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

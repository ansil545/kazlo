import React from "react";
import "./Cards.css";

function Cards() {
  return (
    <div className="cardscontainer">
      <div className="cardscontent">
        <div className="cardsdesc">
            <div>
          <h5 style={{fontSize:20,fontWeight:"bold"}}>NEED RIGHT NOW</h5>
          <p className="card-para">You curated roundup of these season essentials</p>
          </div>
        </div>
        <div className="cardshead">
        <div>
          <img
            src="https://n.nordstrommedia.com/id/a77b8cae-ba1f-4ea4-97b7-6229154c14d5.jpeg?h=382&w=402"
            alt=""
            className="cardsimg"
          />
          <div style={{width:280,display:"flex",justifyContent:"center"}}>
            <p >wedding dresses</p>
            </div>
        </div>
        <div>
          <img
            src="https://n.nordstrommedia.com/id/f09841e1-6e0e-4db6-8534-6e3e4f5b3dd1.jpeg?h=382&w=402"
            alt=""
            className="cardsimg"
          />
          <div style={{width:280,display:"flex",justifyContent:"center"}}>
          <p>Skirts</p>
          </div>
        </div>
        <div>
          <img
            src="https://n.nordstrommedia.com/id/abd2d220-8556-4d03-8eef-e0259f8d8325.jpeg?h=382&w=402"
            alt=""
            className="cardsimg"
          />
          <div  style={{width:280,display:"flex",justifyContent:"center"}}>
            <p>Sneakers</p>
            </div>
        </div>
        </div>
      </div>
      <div className="border">

      </div>
    </div>
   
  );
}

export default Cards;

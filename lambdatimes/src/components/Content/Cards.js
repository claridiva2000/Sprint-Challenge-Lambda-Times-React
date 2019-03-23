import React, { Component } from 'react';
import Card from './Card';

import "../../CSS/index.css"
const Cards = props => {
  return (
    <div className="cards-container">
    {props.cards.map( card =>(
      <div className="card" key={card.headline}>
        <div className="headline">{card.headline}</div>
      <p>{card.tab}</p>
      
      <div className="author"><span>{card.author}</span><div className="img-container"><img src={card.img} alt="img"/></div></div>
      </div>
    ))}
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;
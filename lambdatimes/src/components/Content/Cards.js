import React, { Component } from 'react';
import Card from './Card';

import "../../CSS/index.css"

const Cards = props => {
  return (
    <div className="cards-container" >
      {props.cards.map( c =><Card key={c.headline} card={c}/>)}

    </div>

  );
};


// {/* Using the cards prop, map over the list creating a 
//           new Card component for each passing the card as the only prop*/}
// Make sure you include prop types for all of your incoming props

export default Cards;
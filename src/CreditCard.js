import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./CreditCard.css";

const CreditCard = () => {
const [cardIndex, setCardIndex] = useState(0)

  const store = useSelector((state) => state.Data);
  const currentUser = useSelector((state) => state.Data.currentUser);
//   const currentCardIndex = useSelector((state) => state.Data.currentCard);
  const currentCard = store[currentUser].cards[cardIndex];
  const currentCardNumber = currentCard.cardNumber.replace(/\d(?=\d{4})/g, "*");

  const updateCard = () => {
    setCardIndex(cardIndex => cardIndex !== 2 ? cardIndex + 1 : cardIndex)
  }

  const lowerCard = () => {
    setCardIndex(cardIndex => cardIndex !== 0 ? cardIndex - 1 : cardIndex)
  }
  

  console.log(currentCard)

  return (
    <>
      <h1 id="title">Your Cards</h1>

      <span className="arrow" onClick={lowerCard}>-</span>

      <span className="arrow" onClick={updateCard}>+</span>
    
      
      <div className="credit-card-container">

        <div className="front-card">
          <span className="info">
            <h3 id="name">{currentUser}</h3>
            <h3 id="card-number">{currentCardNumber}</h3>
          </span>
          <span className="card-data">
            <h3 id="card-type">{currentCard.cardType}</h3>
            <h3 id="card-balance">balance : ${currentCard.balance}</h3>
          </span>
        </div>

      </div>



    </>
  );
};

export default CreditCard;

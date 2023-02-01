import React from "react";
import { useSelector } from "react-redux";
import "./CreditCard.css";

const CreditCard = () => {
  const store = useSelector((state) => state.Data);
  const currentUser = useSelector((state) => state.Data.currentUser);
  const currentCardIndex = useSelector((state) => state.Data.currentCard);
  const currentCard = store[currentUser].cards[currentCardIndex];
  const currentCardNumber = currentCard.cardNumber.replace(/\d(?=\d{4})/g, "*");

  console.log(currentCard)

  return (
    <>
      <h1 id="title">Current Card</h1>
      <div className="credit-card-container">
        <div className="front-card">
          <span className="info">
            <h3 id="name">{currentUser}</h3>
            <h3 id="card-number">{currentCardNumber}</h3>
          </span>

          <span className="card-data">
            <h3 id="card-type">{currentCard.cardType}</h3>
            <h3 id="card-balance">240,350</h3>
          </span>
        </div>
      </div>
    </>
  );
};

export default CreditCard;

import React from "react";
import "./AddCard.css";
import { useState } from "react";

const AddCard = () => {
  const [cardData, setCardData] = useState({
    cardType: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
    balance: "",
  });

  return (
    <>
      <div id="form-container">
        <h1>Add a Card</h1>
        <form>
          <label htmlFor="cardType">Card Type</label>
          <input name="cardType" id="cardType" type="text" placeholder="Mastercard" onChange={(e) => handleChange("cardType", e.target.value)}></input>

          <label htmlFor="cardNumber">Card Number</label>
          <input
            id="cardNumber"
            type="text"
            placeholder="4539 9256 5662 3410"
          ></input>

          <label htmlFor="month">Expiration Month</label>
          <input id="month" placeholder="08" type="text" maxLength="2"></input>

          <label htmlFor="year">Expiration Year</label>
          <input id="year" placeholder="2024" type="text" maxLength="4"></input>

          <label htmlFor="cvv">CVV</label>
          <input
            id="cvv"
            placeholder="2024"
            type="password"
            maxLength="3"
          ></input>

          <label htmlFor="balance">Card Balance</label>
          <input id="balance" type="text" placeholder="1200"></input>
        </form>
      </div>
    </>
  );
};

export default AddCard;

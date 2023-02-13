import React from "react";
import "./AddCard.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "./Actions";

const AddCard = () => {
  const [cardData, setCardData] = useState({
    cardType: "",
    cardNumber: "",
    month: "",
    year: "",
    cvv: "",
    balance: "",
  });

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.Data.currentUser);
  const store = useSelector((state) => state);

  const handleChange = (name, value) => {
    setCardData((cardData) => ({
      ...cardData,
      [name]: value,
    }));
  };

  const add = () => {
    if (
      cardData.cardType !== "" &&
      cardData.cardNumber !== "" &&
      cardData.month !== "" &&
      cardData.year !== "" &&
      cardData.cvv !== "" &&
      cardData.cardbalance !== ""
    ) {
      dispatch(addCard(currentUser, cardData));
    } else {
      alert("No inputs can be blank!");
    }
  };

  return (
    <>
      <div id="form-container">
        <h1 id="card-title">Add a Card</h1>
        <label htmlFor="cardType">Card Type</label>
        <input
          name="cardType"
          id="cardType"
          type="text"
          placeholder="Mastercard"
          onChange={(e) => handleChange("cardType", e.target.value)}
        ></input>

        <label htmlFor="cardNumber">Card Number</label>
        <input
          name="cardNumber"
          id="cardNumber"
          type="text"
          placeholder="4539 9256 5662 3410"
          onChange={(e) => handleChange("cardNumber", e.target.value)}
        ></input>

        <label htmlFor="month">Expiration Month</label>
        <input
          name="month"
          id="month"
          placeholder="08"
          type="text"
          maxLength="2"
          onChange={(e) => handleChange("month", e.target.value)}
        ></input>

        <label htmlFor="year">Expiration Year</label>
        <input
          name="year"
          id="year"
          placeholder="2024"
          type="text"
          maxLength="4"
          onChange={(e) => handleChange("year", e.target.value)}
        ></input>

        <label htmlFor="cvv">CVV</label>
        <input
          name="cvv"
          id="cvv"
          placeholder="2024"
          type="password"
          maxLength="3"
          onChange={(e) => handleChange("cvv", e.target.value)}
        ></input>

        <label htmlFor="balance">Card Balance</label>
        <input
          name="balance"
          id="balance"
          type="text"
          placeholder="1200"
          onChange={(e) => handleChange("balance", e.target.value)}
        ></input>
        <div id="add-card-btn-holder">
          <button onClick={() => add()} id="add-card-btn">
            add card
          </button>
        </div>
      </div>
    </>
  );
};

export default AddCard;

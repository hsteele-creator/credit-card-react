import React from "react";
import "./AddCard.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "./Actions";
import { TextField, Button } from "@mui/material";

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
        {/* <label htmlFor="cardType">Card Type</label> */}
        <input
          margin="normal"
          name="cardType"
          label="Card Type"
          id="cardType"
          type="text"
          placeholder="Card Type"
          onChange={(e) => handleChange("cardType", e.target.value)}
          className="input"
        ></input>

        {/* <label htmlFor="cardNumber">Card Number</label> */}
        <input
          margin="normal"
          label="Card Number"
          name="cardNumber"
          id="cardNumber"
          type="text"
          placeholder="Card Number"
          onChange={(e) => handleChange("cardNumber", e.target.value)}
          className="input"
        ></input>

        {/* <label htmlFor="month">Expiration Month</label> */}
        <input
          margin="normal"
          label="month"
          name="month"
          id="month"
          placeholder="Month"
          type="text"
          maxLength="2"
          onChange={(e) => handleChange("month", e.target.value)}
          className="input"
        ></input>

        {/* <label htmlFor="year">Expiration Year</label> */}
        <input
          margin="normal"
          label="year"
          name="year"
          id="year"
          placeholder="Year"
          type="text"
          maxLength="4"
          onChange={(e) => handleChange("year", e.target.value)}
          className="input"
        ></input>

        {/* <label htmlFor="cvv">CVV</label> */}
        <input
          margin="normal"
          label="cvv"
          name="cvv"
          placeholder="CVV"
          type="password"
          maxLength="3"
          onChange={(e) => handleChange("cvv", e.target.value)}
          className="input"
        ></input>

        {/* <label htmlFor="balance">Card Balance</label> */}
        <input
          margin="normal"
          label="balance"
          name="balance"
          id="balance"
          type="text"
          placeholder="Balance"
          onChange={(e) => handleChange("balance", e.target.value)}
          className="input"
        ></input>

        <div id="add-card-btn-holder">
          <Button id="add-card-btn" variant="contained" onClick={() => add()}>
            Add Card
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddCard;

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
        <TextField
          margin="normal"
          name="cardType"
          id="cardType"
          type="text"
          placeholder="Mastercard"
          onChange={(e) => handleChange("cardType", e.target.value)}
        ></TextField>

        {/* <label htmlFor="cardNumber">Card Number</label> */}
        <TextField
          margin="normal"
          label="Card Number"
          name="cardNumber"
          id="cardNumber"
          type="text"
          placeholder="4539 9256 5662 3410"
          onChange={(e) => handleChange("cardNumber", e.target.value)}
        ></TextField>

        {/* <label htmlFor="month">Expiration Month</label> */}
        <TextField
          margin="normal"
          label="month"
          name="month"
          id="month"
          placeholder="08"
          type="text"
          maxLength="2"
          onChange={(e) => handleChange("month", e.target.value)}
        ></TextField>

        {/* <label htmlFor="year">Expiration Year</label> */}
        <TextField
          margin="normal"
          label="year"
          name="year"
          id="year"
          placeholder="2024"
          type="text"
          maxLength="4"
          onChange={(e) => handleChange("year", e.target.value)}
        ></TextField>

        {/* <label htmlFor="cvv">CVV</label> */}
        <TextField
          margin="normal"
          label="cvv"
          name="cvv"
          id="cvv"
          placeholder="2024"
          type="password"
          maxLength="3"
          onChange={(e) => handleChange("cvv", e.target.value)}
        ></TextField>

        {/* <label htmlFor="balance">Card Balance</label> */}
        <TextField
          margin="normal"
          label="balance"
          name="balance"
          id="balance"
          type="text"
          placeholder="1200"
          onChange={(e) => handleChange("balance", e.target.value)}
        ></TextField>

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

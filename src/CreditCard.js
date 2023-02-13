import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./CreditCard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Transaction from "./Transaction";
import { NavLink } from "react-router-dom";
import { removeCard } from "./Actions";

const CreditCard = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.Data.currentUser);
  const currentData = useSelector((state) => state.Data[currentUser]);
  const cards = currentData.cards;
  const transactions = cards[cardIndex].transactions;
  const filteredCards = currentData.cards.filter(
    (card) =>
      card.cardNumber !== "" &&
      card.cardType !== "" &&
      card.year !== "" &&
      card.balnce !== ""
  );

  const remove = (cardNumber) => {
    if (filteredCards.length > 1) {
      dispatch(removeCard(currentUser, cardNumber))
    } else {
      alert("You can't remove all of your cards");
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <h2 id="card-title">The current user is {currentUser}</h2>

        <div className="container">
          <Carousel
            responsive={responsive}
            afterChange={(previousSlide, { currentSlide, onMove }) => {
              setCardIndex(
                currentSlide > previousSlide ? cardIndex + 1 : cardIndex - 1
              );
            }}
          >
            {filteredCards.map((card, i) => {
              return (
                <div key={i} className="card">
                  <p>{card.cardNumber}</p>
                  <p>{card.cardType}</p>
                  <p>{card.year}</p>
                  <p>{currentUser}</p>
                  <p>Balance : {card.balance} </p>
                  <button
                    id="remove-btn"
                    onClick={() => remove(card.cardNumber)}
                  >
                    x
                  </button>
                </div>
              );
            })}
          </Carousel>
        </div>

        <NavLink to="/AddCard">
          <div id="button-container">
            <button id="add-card">Add Card</button>
          </div>
        </NavLink>

        <Transaction transactions={transactions} />
    </>
  );
};

export default CreditCard;

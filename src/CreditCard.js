import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import "./CreditCard.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Transaction from "./Transaction";

const CreditCard = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const currentUser = useSelector((state) => state.Data.currentUser);
  const currentData = useSelector((state) => state.Data[currentUser]);
  const cards = currentData.cards;
  const transactions = cards[cardIndex].transactions
  // console.log(transactions);


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
      <h1 id="card-title">Your Cards</h1>
      <div className="container">
        <Carousel
          responsive={responsive}
          afterChange={(previousSlide, { currentSlide, onMove }) => {
            setCardIndex(currentSlide > previousSlide ? cardIndex + 1 : cardIndex - 1);
          }}
        >
          {currentData.cards.map((card, i) => {
            return (
              <div key={i} className="card">
                {card.cardNumber}
              </div>
            );
          })}
        </Carousel>
      </div>

      <Transaction transactions={transactions} />

    </>
  );
};

export default CreditCard;

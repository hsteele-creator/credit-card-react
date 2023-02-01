import React from "react";
import { useSelector, useDispatch } from "react-redux";

const SelectCard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Data);
  const currentUser = useSelector((state) => state.Data.currentUser);
  const cards = data[currentUser].cards;


  const updateCard = (index) => {
    dispatch({ type: "UPDATE_CARD", payload : { card: index }});
  };

  return (
    <>
      <h1>Select Card</h1>

      {cards.map((card, i) => {
        return (
          <button onClick={() => updateCard(i)} key={i} value="hello">
            {"card ending in " + card.cardNumber.substr(-4)}
          </button>
        );
      })}
    </>
  );
};

export default SelectCard;

import React from "react";
import { useSelector } from "react-redux";
import "./Avatar.css";

const Avatars = () => {
  const store = useSelector((state) => state.Data);
  const currentUser = useSelector((state) => state.Data.currentUser);
  const keys = Object.keys(store);
  const names = 
    keys.filter(
      (name) =>
        name !== "currentUser" && name !== "currentCard" && name !== "cardIndex"
    );
    return (
        <div className="images-container">
            {names.map(name => {
                return(
                    <div className="image-container">
                    <img className="avatar" src={store[name].image} />
                    <h3>{name}</h3>
                    </div>
                )
            })}
        </div>
    ) 
};

export default Avatars;

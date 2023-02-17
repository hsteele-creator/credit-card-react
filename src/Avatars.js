import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Avatar.css";
import { updateUser } from "./Actions";

const Avatars = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.Data);
  const currentUser = useSelector((state) => state.Data.currentUser);
  const keys = Object.keys(store);
  const names = keys.filter(
    (name) =>
      name !== "currentUser" && name !== "currentCard" && name !== "cardIndex"
  );

  return (
    <div className="images-container">
      {names.map((name, i) => {
        return (
          <div className="image-container" key={i}>
            <img
              className="avatar"
              src={store[name].image}
              onClick={() => dispatch(updateUser(name))}
              style={{
                border: name === currentUser ? "3px solid black" : "none",
                width: name === currentUser ? "50px" : "30px",
                height: name === currentUser ? "50px" : "30px",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Avatars;

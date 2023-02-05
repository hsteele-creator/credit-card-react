import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Avatar.css";
// import { updateUser } from "./Actions";

const Avatars = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.Data);
  const currentUser = useSelector((state) => state.Data.currentUser);
  const keys = Object.keys(store);
  const names = keys.filter(
    (name) =>
      name !== "currentUser" && name !== "currentCard" && name !== "cardIndex"
  );

  console.log(store);

  const updateUser = (name) => {
    return dispatch({ type: "UPDATE_USER", payload: { name } });
  };

  return (
    <div className="images-container">
      {names.map((name) => {
        return (
          <div className="image-container">
            <img
              className="avatar"
              src={store[name].image}
              onClick={() => updateUser(name)}
              style={{border : name === currentUser ? "1px solid white" : "none", }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Avatars;

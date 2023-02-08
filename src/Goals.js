import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Goals.css";

const Goals = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.Data);
  const currentUser = useSelector((state) => state.Data.currentUser);
  const goals = store[currentUser].goals;

  const remove = () => {
    console.log("remove");
    dispatch({ type: "REMOVE_GOAL" });
  };

  const toggle = () => {
    console.log("toggle");
    dispatch({ type: "TOGGLE_GOAL" });
  };

  return (
    <>
      <ul id="goals">
        {goals.map((goal, i) => {
          return (
            <div key={i} id="todo">
              <li id="goal">{goal.goal}</li>
              <button id="remove" onClick={() => remove()}>
                Remove
              </button>
              <button id="toggle" onClick={() => toggle()}>
                Toggle
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Goals;
